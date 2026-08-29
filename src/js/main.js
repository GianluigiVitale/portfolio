document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.querySelector('.menu-toggle');
    var navigation = document.querySelector('.site-nav');
    var languageButtons = document.querySelectorAll('[data-lang]');
    var translatableNodes = document.querySelectorAll('[data-i18n]');

    var italian = {
        navWork: 'Lavori', navResearch: 'Ricerca', navService: 'Servizio accademico', navProfile: 'Profilo',
        heroEyebrow: 'Ricercatore ML systems · Systems engineer',
        heroTitle: 'Studio i sistemi alla base del comportamento dei modelli.',
        heroLede: 'Sviluppo framework di misurazione per l’affidabilità del serving LLM, valuto acceleratori e stack di inferenza e studio come i cambiamenti infrastrutturali si propagano negli output dei modelli.',
        heroProof: 'Unico autore di DriftBench a MLSys 2026 · Ricercatore attivo nel Google TPU Research Cloud · Invitato nel Program Committee di MLSys 2027',
        viewResearch: 'Esplora la ricerca', downloadCv: 'Scarica il CV', currentLabel: 'Attualmente',
        nowComputeKey: 'Calcolo', nowComputeValue: 'Allocazione Google TRC di 320 chip',
        nowReviewKey: 'In revisione', nowReviewValue: '2 submission NeurIPS 2026 come primo autore',
        nowServiceKey: 'Servizio', nowServiceValue: 'Invito nel PC di MLSys 2027', nowBaseKey: 'Sede',
        metricEvaluations: 'valutazioni DriftBench', metricPrediction: 'predizione del drift hardware',
        metricTpu: 'chip TPU allocati', metricArtifacts: 'artefatti MLSys valutati',
        workIndex: 'Lavori selezionati', workTitle: 'Misurare lo stack. Spiegare il cambiamento.',
        workIntro: 'Il mio lavoro collega i cambiamenti infrastrutturali alle differenze osservabili nel comportamento dei modelli, con particolare attenzione a evidenze riproducibili.',
        oralPresentation: 'Presentazione orale', soleAuthor: 'Unico autore',
        driftbenchDesc: 'Un benchmark e un modello predittivo per misurare come architettura GPU, precisione numerica e cambiamenti del framework di inferenza alterino silenziosamente gli output degli LLM. In 237.000 valutazioni, il drift indotto dall’hardware è risultato altamente prevedibile, mentre quello dovuto al framework richiede generalmente una nuova misurazione diretta.',
        resultLabel: 'Risultato chiave', resultText: 'tasso di inversione della safety misurato in una migrazione H100 → B200',
        activeSince: 'Attivo da maggio 2026', trcTitle: 'Allocazione TPU Research Cloud',
        trcIntro: 'Un’allocazione di 320 chip per ricerca indipendente sulla portabilità tra acceleratori e sulle prestazioni dei sistemi LLM in zone USA ed EU.',
        onDemand: 'chip v4 on-demand', spotChips: 'chip spot v4, v5e e v6e', completed: 'Completato',
        trcCompleted: 'Porting dei workload del modello GLM su Cloud TPU, risoluzione dei problemi di compatibilità tra modello e runtime e validazione della corretta esecuzione.',
        inProgress: 'In corso',
        trcProgress: 'Estensione del lavoro in uno studio più ampio sulla portabilità tra acceleratori e sulle prestazioni dei sistemi LLM attraverso diverse generazioni TPU.',
        twoFirstAuthor: '2 submission come primo autore', underReviewTitle: 'Attualmente in revisione', mainTrack: 'Main track',
        framingDesc: 'Un’ablazione fattoriale su circa 31.900 prove e nove LLM che isola l’effetto di persona framing, sostituzione terminologica e giustificazione morale sulle risposte dei modelli.',
        positionTrack: 'Position paper track',
        flatlandDesc: 'Un position paper che sostiene l’uso di substrati di ragionamento automatico non vincolati dalla struttura del linguaggio umano.',
        reviewNote: 'Lo stato delle submission è riportato senza implicare accettazione.',
        serviceIndex: 'Servizio accademico', serviceTitle: 'Valutare la ricerca sui sistemi, dalle evidenze all’impatto.',
        invitedBadge: 'Invitato · agosto 2026', pcTitle: 'Program Committee MLSys 2027',
        pcDesc: 'Invitato dai Program Chairs di MLSys 2027 a far parte del Program Committee e contribuire con revisioni dettagliate e discussioni tecniche attive. L’incarico è indicato esplicitamente come invito, in attesa dell’accettazione formale.',
        neuripsEthicsTitle: 'Ethics Reviewer NeurIPS',
        neuripsEthicsDesc: 'Revisione delle submission per criticità etiche, possibili danni sociali, rischi per l’integrità della ricerca e conformità alle linee guida della conferenza.',
        sospTitle: 'Artifact Evaluation Committee SOSP',
        sospDesc: 'Valutazione degli artefatti di ricerca per disponibilità, funzionalità, riproducibilità e coerenza con le affermazioni sperimentali dei paper associati.',
        mlsysAeTitle: 'Artifact Evaluation Committee MLSys',
        mlsysAeDesc: 'Revisione di quattro paper accettati su ottimizzazione di kernel di attenzione, profiling ML full-stack, disaggregazione della memoria GPU e inferenza distribuita. Risultati riprodotti su cluster 8×H100 a noleggio e infrastruttura AMD MI350X; raccomandato l’artefatto che ha poi ricevuto il Distinguished Artifact Award.',
        researchIndex: 'Agenda di ricerca', researchTitle: 'L’inferenza affidabile è un problema di sistemi.',
        researchIntro: 'Mi interessa il confine tra ML systems e comportamento dei modelli: cosa cambia, perché cambia e come possiamo saperlo prima di una migrazione in produzione.',
        areaServingTitle: 'Infrastruttura di serving LLM',
        areaServingDesc: 'Caratterizzazione delle prestazioni e misurazione dello stack di inferenza attraverso acceleratori, framework e modalità di precisione.',
        areaDriftTitle: 'Infrastructure drift',
        areaDriftDesc: 'Quantificazione dei cambiamenti comportamentali quando gli ambienti hardware o software cambiano, con implicazioni per safety e riproducibilità.',
        areaBenchTitle: 'Benchmarking di sistemi ML',
        areaBenchDesc: 'Framework di valutazione e dataset per misurazioni rigorose e riproducibili dei sistemi di serving in produzione.',
        areaSafetyTitle: 'Safety e robustezza',
        areaSafetyDesc: 'Studio di come framing professionale, contesto recuperato e scelte infrastrutturali influenzino rifiuto e comportamento di safety.',
        profileIndex: 'Profilo', profileTitle: 'Ricerca radicata nei sistemi reali.', experienceLabel: 'Esperienza', present: 'oggi',
        ministryTitle: 'Systems Engineer · Ministero della Cultura',
        ministryDesc: 'Progettazione e deployment di un sistema RAG su oltre 10.000 documenti amministrativi interni, con risposte corredate da fonti. Realizzazione della prima interfaccia di consultazione pubblica assistita da AI in un archivio di stato italiano, con accesso in linguaggio naturale all’inventario per personale e cittadini.',
        educationLabel: 'Formazione', expectedDate: 'Prevista feb. 2027',
        degreeTitle: 'Laurea in Ingegneria Informatica · Universitas Mercatorum',
        degreeDesc: 'Media 29,03/30 (3,79/4,0 conversione WES). Tesi: DSProfiler — analisi statica e machine learning per il rilevamento automatico di anti-pattern prestazionali nelle strutture dati Python.',
        contactEyebrow: 'Conversazioni di ricerca e opportunità PhD', contactTitle: 'Parliamo di sistemi ML affidabili.',
        footerNote: 'Ricerca ML systems · Pistoia, Italia', backToTop: 'Torna su ↑'
    };

    translatableNodes.forEach(function (node) {
        node.dataset.enText = node.textContent;
    });

    function setLanguage(language) {
        translatableNodes.forEach(function (node) {
            var key = node.dataset.i18n;
            node.textContent = language === 'it' && italian[key] ? italian[key] : node.dataset.enText;
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
