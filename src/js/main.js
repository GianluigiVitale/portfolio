document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.querySelector('.menu-toggle');
    var navigation = document.querySelector('.site-nav');
    var languageButtons = document.querySelectorAll('[data-lang]');
    var translatableNodes = document.querySelectorAll('[data-i18n]');
    var localizedLinks = document.querySelectorAll('[data-href-it]');

    var italian = {
        navWork: 'Progetti', navResearch: 'Ricerca', navService: 'Comitati', navProfile: 'Profilo',
        heroEyebrow: 'Ricercatore in sistemi ML · Systems engineer',
        heroTitle: 'Studio i punti di rottura dei sistemi LLM.',
        heroLede: 'Costruisco e analizzo i sistemi che determinano il comportamento dei modelli: stack di serving, kernel per acceleratori, calcolo numerico e i malfunzionamenti che emergono quando cambia l’infrastruttura.',
        viewResearch: 'Scopri le ricerche', downloadCv: 'Scarica il CV', currentLabel: 'In evidenza',
        nowPublicationKey: 'Ultima pubblicazione', nowPublicationValue: 'STF · poster a NeurIPS 2026',
        nowMlsysKey: 'MLSys 2026', nowMlsysValue: 'DriftBench · presentazione orale · unico autore',
        nowServiceKey: 'Comitati', nowServiceValue: 'Program Committee di MLSys 2027 · revisione etica per NeurIPS · Artifact Evaluation di MLSys e SOSP',
        oralPresentation: 'Presentazione orale', soleAuthor: 'Unico autore', acmBadges: 'Badge ACM: Available · Functional · Reproduced',
        recordedTalk: 'Guarda il talk a MLSys 2026', proceedingsLink: 'Atti di MLSys', artifactsLink: 'Artefatti e dataset',
        driftbenchDesc: 'DriftBench è un framework per misurare e prevedere il drift: comprende 236.985 coppie prompt-risposta su 105 configurazioni, 5 modelli, 4 piattaforme GPU, 3 framework e 3 livelli di precisione. Il suo Portability Risk Index generalizza a hardware (R² = 0,909) e precisioni (R² = 0,763) mai visti, distinguendo il drift sistematico dovuto a hardware e precisione dai cambi di framework o di modello, che richiedono nuove misurazioni. In una validazione in produzione ha bloccato un aggiornamento ad alto drift che cambiava la classificazione del 23,85% dei prompt di sicurezza.',
        activeSince: 'Da maggio 2026', trcTitle: 'Ricerca svolta con Google TPU Research Cloud',
        trcIntro: 'Porting di modelli, nuovi kernel, validazione su acceleratori diversi e caratterizzazione dell’hardware a livello di bit su TPU v4, v5e e v6e.',
        workingBringup: 'Porting funzionante',
        deepseekDesc: 'Ho portato il modello su 32 chip (v4-64), validando tutte le modalità di attenzione con prefill e decode funzionanti. Un supporto equivalente è poi arrivato in vLLM TPU inference grazie a sviluppi paralleli nel resto dell’ecosistema.',
        workInProgress: 'In corso', dsaTitle: 'Kernel DSA per TPU',
        dsaDesc: 'Un’implementazione funzionante, identica bit per bit al riferimento fino a 8K token e in grado di arrivare a 256K. È alla base del porting di GLM-5.3, ora in esecuzione su TPU v4, ed è tuttora in sviluppo.',
        validated: 'Validato',
        driftTpuDesc: 'Ho esteso il risultato di MLSys 2026 alle TPU v5e e v6e. La prevedibilità si è confermata anche con l’aritmetica delle TPU, con R² compreso tra 0,72 e 0,96.',
        researchInProgress: 'Ricerca in corso', mxuTitle: 'Caratterizzazione a livello di bit della MXU delle TPU',
        mxuDesc: 'Ho sviluppato un simulatore su CPU che riproduce bit per bit le moltiplicazioni tra matrici di Llama-3.1-8B eseguite in modalità nativa, rendendo possibile uno studio deterministico del comportamento numerico delle TPU.',
        collaboration: 'Collaborazione', genomicsTitle: 'Modelli genomici long-context con il CNR',
        genomicsDesc: 'Una collaborazione che indaga se i modelli del DNA a contesto lungo codifichino il linkage disequilibrium, unendo il lavoro sui sistemi ML alle competenze in genomica del Consiglio Nazionale delle Ricerche.',
        neuripsStatus: 'Poster accettato · Unico autore',
        neuripsSummary: 'Un’ablazione fattoriale 2×2×2, definita a priori, della pipeline di professional framing STF, valutata su circa 31.900 prove con nove LLM. L’assunzione di un ruolo (persona) è risultata il fattore principale dell’accettazione delle richieste (OR = 6,5), la sostituzione terminologica quello principale della profondità delle risposte (β = 0,91), mentre la giustificazione morale non ha mostrato alcun effetto positivo rilevabile entro i margini di equivalenza dichiarati.',
        neuripsPaperLink: 'Articolo su OpenReview',
        serviceIndex: 'Comitati e revisioni', serviceTitle: 'Valutare la ricerca sui sistemi, dalle prove sperimentali all’impatto.',
        mlsysPcTitle: 'Membro del Program Committee — MLSys 2027',
        mlsysPcDesc: 'Revisione degli articoli sottomessi al programma tecnico di MLSys 2027.',
        neuripsEthicsTitle: 'Revisore etico per NeurIPS',
        neuripsEthicsDesc: 'Valutazione degli articoli sottomessi sotto il profilo etico: possibili danni per la società, rischi per l’integrità della ricerca e rispetto delle linee guida della conferenza.',
        sospTitle: 'Membro dell’Artifact Evaluation Committee — SOSP 2026',
        sospDesc: 'Valutazione di artefatti di ricerca sul serving di modelli con uso efficiente della memoria e sull’analisi della sicurezza della memoria nei kernel GPU dei sistemi di inferenza LLM. Verifica di disponibilità, funzionamento e riproducibilità, oltre che della coerenza con i risultati sperimentali dichiarati negli articoli.',
        mlsysAeTitle: 'Membro dell’Artifact Evaluation Committee — MLSys 2026',
        mlsysAeDesc: 'Valutazione di quattro articoli accettati su ottimizzazione dei kernel di attenzione, infrastrutture di profiling per il ML, disaggregazione della memoria GPU e inferenza distribuita. Riproduzione dei risultati sperimentali su cluster 8×H100 a noleggio (RunPod) e su infrastruttura AMD MI350X (AMD University Program), con verifica di disponibilità, funzionamento e coerenza con quanto dichiarato in ciascun articolo.',
        researchIndex: 'Linee di ricerca', researchTitle: 'Seguire i guasti a ogni livello dello stack ML.',
        researchIntro: 'Il mio lavoro collega aritmetica dell’hardware, kernel, infrastruttura di serving e comportamento dei modelli. Studio dove le ipotesi smettono di valere e raccolgo prove che rendano i sistemi di AI complessi più affidabili, riproducibili e facili da mettere in produzione.',
        areaServingTitle: 'Sistemi e serving',
        areaServingDesc: 'Progettazione e valutazione di infrastrutture per eseguire i modelli in modo efficiente e affidabile su acceleratori e ambienti di deployment diversi.',
        areaDriftTitle: 'Hardware e comportamento numerico',
        areaDriftDesc: 'Studio di come aritmetica, precisione e kernel incidono su correttezza, prestazioni e riproducibilità.',
        areaBenchTitle: 'Affidabilità e sicurezza',
        areaBenchDesc: 'Individuazione dei casi in cui cambiamenti di sistema o di contesto alterano gli output dei modelli, per far emergere i rischi prima della messa in produzione.',
        areaSafetyTitle: 'Sistemi ML in altri ambiti',
        areaSafetyDesc: 'Applicazione di tecniche di sistemi e di modelli long-context ad ambiti come la genomica e l’accesso alle informazioni nella pubblica amministrazione.',
        profileIndex: 'Profilo', profileTitle: 'Una ricerca che parte da sistemi in produzione.', experienceLabel: 'Esperienza', present: 'oggi',
        ministryTitle: 'Systems Engineer — Archivio di Stato di Pistoia, Ministero della Cultura',
        ministryDesc: 'Progettazione e messa in produzione di un sistema di retrieval-augmented generation (RAG) su oltre 10.000 documenti amministrativi interni, che risponde alle domande del personale citando le fonti. Realizzazione di un’interfaccia di consultazione pubblica basata sull’AI, che permette a personale e cittadini di interrogare in linguaggio naturale l’intero database dell’inventario.',
        educationLabel: 'Formazione', expectedDate: 'Prevista a marzo 2027',
        degreeTitle: 'Laurea triennale in Ingegneria Informatica · Universitas Mercatorum',
        degreeDesc: 'Media 29,35/30 (3,87/4,0 secondo la conversione WES). Tesi: DSProfiler — analisi statica e machine learning per l’individuazione automatica di anti-pattern prestazionali nell’uso delle strutture dati in Python.',
        contactEyebrow: 'Collaborazioni di ricerca e opportunità di dottorato', contactTitle: 'Parliamo di sistemi ML affidabili.',
        footerNote: 'Ricerca sui sistemi ML', backToTop: 'Torna su ↑'
    };

    translatableNodes.forEach(function (node) {
        node.dataset.enText = node.textContent;
    });
    localizedLinks.forEach(function (link) {
        link.dataset.hrefEn = link.getAttribute('href');
    });

    function setLanguage(language) {
        translatableNodes.forEach(function (node) {
            var key = node.dataset.i18n;
            node.textContent = language === 'it' && italian[key] ? italian[key] : node.dataset.enText;
        });
        localizedLinks.forEach(function (link) {
            link.setAttribute('href', language === 'it' ? link.dataset.hrefIt : link.dataset.hrefEn);
        });
        languageButtons.forEach(function (button) {
            button.setAttribute('aria-pressed', String(button.dataset.lang === language));
        });
        document.documentElement.lang = language;
        try { localStorage.setItem('portfolio-language', language); } catch (error) {}
    }

    languageButtons.forEach(function (button) {
        button.addEventListener('click', function () { setLanguage(button.dataset.lang); });
    });

    if (menuButton && navigation) {
        menuButton.addEventListener('click', function () {
            var isOpen = menuButton.getAttribute('aria-expanded') === 'true';
            menuButton.setAttribute('aria-expanded', String(!isOpen));
            navigation.classList.toggle('is-open', !isOpen);
        });
        navigation.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                menuButton.setAttribute('aria-expanded', 'false');
                navigation.classList.remove('is-open');
            });
        });
    }

    document.getElementById('current-year').textContent = new Date().getFullYear();
    var savedLanguage = 'en';
    try { savedLanguage = localStorage.getItem('portfolio-language') || 'en'; } catch (error) {}
    setLanguage(savedLanguage === 'it' ? 'it' : 'en');
});
