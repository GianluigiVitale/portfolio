"""Generate discovery files from the public HTML; Python 3 standard library only.

Run from any directory. Use --check to detect stale generated files.
"""

import argparse
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlsplit, unquote
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]


class Element:
    def __init__(self, tag, attrs=()):
        self.tag = tag
        self.attrs = dict(attrs)
        self.children = []

    def walk(self):
        yield self
        for child in self.children:
            if isinstance(child, Element):
                yield from child.walk()

    def text(self):
        return ''.join(c.text() if isinstance(c, Element) else c for c in self.children)


class Document(HTMLParser):
    VOID = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
            'link', 'meta', 'param', 'source', 'track', 'wbr'}

    def __init__(self, html):
        super().__init__(convert_charrefs=True)
        self.root = Element('document')
        self.stack = [self.root]
        self.feed(html)
        self.close()

    def handle_starttag(self, tag, attrs):
        element = Element(tag, attrs)
        self.stack[-1].children.append(element)
        if tag not in self.VOID:
            self.stack.append(element)

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in self.VOID:
            self.handle_endtag(tag)

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                del self.stack[i:]
                break

    def handle_data(self, data):
        self.stack[-1].children.append(data)


def compact(text):
    return re.sub(r'\s+', ' ', text).strip()


def markdown(element, base):
    if isinstance(element, str):
        return re.sub(r'\s+', ' ', element)
    if element.attrs.get('aria-hidden') == 'true' or element.tag in {'script', 'style', 'button'}:
        return ''
    text = ''.join(markdown(c, base) for c in element.children)
    if element.tag == 'a' and element.attrs.get('href'):
        label = compact(text) or element.attrs.get('aria-label', '')
        return f'[{label}]({urljoin(base, element.attrs["href"])})' if label else ''
    if element.tag == 'img':
        return ''  # The Markdown edition contains the portfolio's textual content.
    if re.fullmatch(r'h[1-6]', element.tag):
        # The document title is the H1; retain the page heading hierarchy underneath.
        return '\n\n' + '#' * min(int(element.tag[1]) + 1, 6) + ' ' + compact(text) + '\n\n'
    if element.tag in {'p', 'div', 'section', 'article', 'aside', 'header', 'main'}:
        return '\n\n' + text.strip() + '\n\n'
    if element.tag in {'span', 'strong'}:
        return text + ' '
    if element.tag == 'br':
        return '\n'
    return text


def generate():
    document = Document((ROOT / 'index.html').read_text(encoding='utf-8'))
    elements = list(document.root.walk())
    canonical = next(e.attrs['href'] for e in elements
                     if e.tag == 'link' and e.attrs.get('rel') == 'canonical')
    base = urlsplit(canonical)
    assert base.scheme == 'https' and canonical.endswith('/') and not base.query and not base.fragment
    description = next(e.attrs['content'] for e in elements
                       if e.tag == 'meta' and e.attrs.get('name') == 'description')
    graph = json.loads(next(e.text() for e in elements
                           if e.tag == 'script' and e.attrs.get('type') == 'application/ld+json'))
    person = next(e for e in graph['@graph'] if e['@type'] == 'Person')
    main = next(e for e in elements if e.tag == 'main')

    # The section fragments and language buttons are not separate indexable pages.
    # Only include the canonical HTML page and public, linked PDF documents.
    urls = [canonical]
    for element in main.walk():
        for attribute in ('href', 'data-href-it'):
            href = element.attrs.get(attribute, '')
            url = urljoin(canonical, href)
            parsed = urlsplit(url)
            if parsed.path.lower().endswith('.pdf') and url.startswith(canonical):
                assert not parsed.query and not parsed.fragment
                local = (ROOT / unquote(parsed.path[len(base.path):])).resolve()
                assert ROOT in local.parents and local.is_file(), f'Missing PDF: {local}'
                if url not in urls:
                    urls.append(url)

    namespace = 'http://www.sitemaps.org/schemas/sitemap/0.9'
    ET.register_namespace('', namespace)
    sitemap = ET.Element(f'{{{namespace}}}urlset')
    for url in urls:
        entry = ET.SubElement(sitemap, f'{{{namespace}}}url')
        ET.SubElement(entry, f'{{{namespace}}}loc').text = url
    # Omit lastmod rather than claim every rebuild is a content update.
    ET.indent(sitemap, space='  ')
    xml = '<?xml version="1.0" encoding="UTF-8"?>\n' + ET.tostring(sitemap, encoding='unicode') + '\n'

    content = markdown(main, canonical)
    content = re.sub(r'\n[ \t]+', '\n', content)
    content = re.sub(r'[ \t]+\n', '\n', content)
    content = re.sub(r'\n{3,}', '\n\n', content).strip()
    md = (f'# {person["name"]} — Research portfolio\n\n'
          f'> {description}\n\n'
          f'Source: [Official portfolio]({canonical}). '
          'This English text edition is generated from the visible portfolio content.\n\n'
          f'{content}\n')

    llms = (f'# {person["name"]}\n\n> {description}\n\n'
            'Personal research portfolio. The HTML page is the primary source; '
            'the Markdown edition contains its English text. '
            'The HTML interface also offers an Italian translation.\n\n'
            '## Portfolio\n\n'
            f'- [Portfolio text]({canonical}index.md): Research, publications, service, experience, education, and contact details.\n'
            f'- [Official website]({canonical}): Original HTML portfolio.\n\n'
            '## Curriculum vitae\n\n')
    for url in urls[1:]:
        language = 'Italian' if url.endswith('_it.pdf') else 'English'
        llms += f'- [CV ({language})]({url}): Public curriculum vitae in PDF.\n'
    llms += '\n## Research profiles\n\n'
    for url in person['sameAs']:
        llms += f'- [{urlsplit(url).netloc}]({url})\n'
    llms += '\n## Publications and artifacts\n\n'
    seen = set()
    for element in main.walk():
        href = element.attrs.get('href', '')
        if element.tag == 'a' and urlsplit(href).netloc in {'proceedings.mlsys.org', 'doi.org', 'openreview.net'}:
            if href not in seen and '/profile' not in href:
                llms += f'- [{compact(element.text()).replace("↗", "").strip()}]({href})\n'
                seen.add(href)
    return {'sitemap.xml': xml, 'llms.txt': llms, 'index.md': md}


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    stale = []
    for name, content in generate().items():
        path = ROOT / name
        if args.check:
            if not path.is_file() or path.read_text(encoding='utf-8') != content:
                stale.append(name)
        else:
            path.write_text(content, encoding='utf-8', newline='\n')
            print(f'Generated {name}')
    if stale:
        parser.exit(1, 'Stale discovery files: ' + ', '.join(stale) + '\nRun python scripts/generate_discovery.py\n')
    if args.check:
        print('Discovery files are up to date.')
