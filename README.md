# Gianluigi Vitale - ML Systems Research Portfolio

This is my research portfolio showcasing my work in ML systems, LLM serving infrastructure, accelerator portability, and inference reliability. It is a bilingual, responsive static site built for GitHub Pages.

**Key Features:**
- Publications: accepted NeurIPS 2026 main-track poster and DriftBench (MLSys 2026 oral)
- Active Google TPU Research Cloud allocation and current TPU research
- Academic service: MLSys 2027 Program Committee, MLSys and SOSP artifact evaluation, and NeurIPS ethics review
- Professional experience, education, and research profiles
- English and Italian content with responsive desktop and mobile layouts

**Technologies:** Semantic HTML, SCSS, and vanilla JavaScript, compiled with Laravel Mix.

***
### [https://gianluigivitale.github.io/portfolio/](https://gianluigivitale.github.io/portfolio/)
***

## Search and AI discovery

The English portfolio content and its ordinary links are present in the HTML and
can be read without JavaScript. The page includes a canonical URL, indexing and
preview directives, and linked `ProfilePage` / `Person` JSON-LD metadata.

- `sitemap.xml` lists the canonical homepage and the two public CV PDFs.
- `llms.txt` provides a short guide to the portfolio, CVs, and research sources.
- `index.md` provides the English portfolio text with absolute links.
- `robots.txt` provides an unrestricted crawler policy and the sitemap URL.
- `.nojekyll` preserves the static files on GitHub Pages, including raw Markdown.

The sitemap deliberately omits section fragments, duplicate `index.html` URLs,
external publication URLs, and the Markdown copy. It omits `lastmod` rather than
reporting build times as content changes. The Italian language button currently
changes the same URL in JavaScript; it is not a separate indexable Italian HTML
page. Separate static language URLs would be needed before adding HTML hreflang
alternates. The Italian CV already has its own URL.

### Regenerate after editing content

Python 3.10+ is needed only to regenerate the discovery files, not to host the site:

```sh
python scripts/generate_discovery.py
python scripts/generate_discovery.py --check
```

The script reads `index.html`, derives the canonical URL and profile data, finds
the linked local PDFs, and generates `sitemap.xml`, `llms.txt`, and `index.md`.
Commit those generated files with content changes. If adding other HTML pages,
extend the generator to include their canonical URLs. Keep the HTML description,
social previews, and JSON-LD consistent when editing the profile. If changing the
domain or base path, also update the sitemap URL and placement note in `robots.txt`.

### Publish and submit to Google

1. Publish the updated files through this repository's GitHub Pages deployment.
   The deployed site must include the repository-root `index.html`, `sitemap.xml`,
   `llms.txt`, `index.md`, `.nojekyll`, and the existing `assets/` and `dist/` files.
   Deploying only `dist/` would omit the website and its discovery files.
2. Open `https://gianluigivitale.github.io/portfolio/sitemap.xml` and confirm it
   serves XML with HTTP 200. Check that `llms.txt` and `index.md` serve their text,
   and both PDF URLs work. Check the homepage for HTTP 200 and no `noindex`
   response header. A local check cannot verify the deployed response headers.
3. In [Google Search Console](https://search.google.com/search-console/), add or
   select the URL-prefix property `https://gianluigivitale.github.io/portfolio/`.
   Complete an offered ownership verification method, such as placing Google's
   supplied verification HTML file at the publishing root. Do not invent a token.
4. In **Sitemaps**, submit
   `https://gianluigivitale.github.io/portfolio/sitemap.xml`.
5. Inspect the homepage in **URL inspection**, run **Test live URL**, and use
   **Request indexing** if available. Monitor indexing and sitemap reports.

### GitHub Pages robots.txt placement

Crawler rules are read from **the origin root**:
`https://gianluigivitale.github.io/robots.txt`.
The copy published by this project at `/portfolio/robots.txt` has no authority.
To activate the supplied policy, publish it at the root of the user-site repository
`GianluigiVitale/gianluigivitale.github.io`, with GitHub Pages enabled there.
If that root later has an existing policy, merge the portfolio sitemap line into
it and review applicable rules instead of overwriting policies for other projects.

The origin-root robots file returned 404 during the check on 2026-10-25. For
Google, a missing robots file does not itself block crawling. Direct sitemap
submission in Search Console works without creating a user-site repository.
The supplied policy allows all crawlers, including AI search and AI training
crawlers; it does not distinguish those uses or grant a content license.

### Expectations and references

These files improve access and discovery; they cannot guarantee indexing,
rankings, AI citations, or adoption by every crawler. `llms.txt` is an optional
community proposal, not a Google indexing requirement or a replacement for HTML.
There are no special technical requirements for Google's AI search features
beyond the applicable Search requirements. No deployment or Search Console
submission is performed by the generator.

- [Google: build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google: robots.txt placement and syntax](https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt)
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [llms.txt proposal and discovery links](https://llmstxt.org/)
