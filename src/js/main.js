document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.querySelector('.menu-toggle');
    var navigation = document.querySelector('.site-nav');
    var languageButtons = document.querySelectorAll('[data-lang]');
    var translatableNodes = document.querySelectorAll('[data-i18n]');

    var italian = {
        navWork: 'Lavori', navResearch: 'Ricerca', navService: 'Servizio accademico', navProfile: 'Profilo',
        heroEyebrow: 'Ricercatore ML systems · Systems engineer',
        heroTitle: 'Studio come falliscono i sistemi LLM.',
        heroLede: 'Costruisco e misuro i sistemi alla base del comportamento dei modelli: stack di serving, kernel per acceleratori, percorsi numerici e i guasti che emergono quando l’infrastruttura cambia.',
        viewResearch: 'Esplora la ricerca', downloadCv: 'Scarica il CV', currentLabel: 'Attualmente',
        nowPublicationKey: 'Pubblicazione', nowPublicationValue: 'DriftBench · MLSys 2026 · unico autore',
        nowReviewKey: 'In revisione', nowReviewValue: '2 submission NeurIPS 2026 come primo autore',
        nowServiceKey: 'Servizio', nowServiceValue: 'Ethics Reviewer NeurIPS · Artifact Evaluation MLSys e SOSP',
        oralPresentation: 'Presentazione orale', soleAuthor: 'Unico autore', acmBadges: 'Badge ACM: Available · Functional · Reproduced',
        recordedTalk: 'Talk registrato',
        driftbenchDesc: 'DriftBench è un framework di misurazione e previsione composto da 236.985 coppie prompt-risposta in 105 configurazioni, 5 modelli, 4 piattaforme GPU, 3 framework e 3 precisioni. Il Portability Risk Index generalizza a hardware (R² = 0,909) e precisioni (R² = 0,763) mai visti, separando il drift sistematico hardware/precisione dai cambiamenti di framework/modello che richiedono nuove misurazioni. Nella validazione in produzione ha bloccato un aggiornamento ad alto drift in cui il 23,85% dei prompt di safety ha cambiato classificazione.',
        activeSince: 'Attivo da maggio 2026', trcTitle: 'Cosa ho costruito su TRC',
        trcIntro: 'Bring-up di modelli, nuovi kernel, validazione tra acceleratori e caratterizzazione hardware a livello di bit su TPU v4, v5e e v6e.',
        workingBringup: 'Bring-up funzionante',
        deepseekDesc: 'Ho completato un bring-up su 32 chip v4-64, validando tutte le modalità di attenzione con prefill e decode operativi. Un supporto equivalente è stato successivamente integrato in vLLM TPU inference attraverso uno sviluppo parallelo nell’ecosistema più ampio.',
        workInProgress: 'Lavoro in corso', dsaTitle: 'Kernel DSA per TPU',
        dsaDesc: 'Un’implementazione funzionante, bit-exact rispetto al riferimento fino a 8K token e in esecuzione fino a 256K. È la base del porting GLM-5.2 e rimane un lavoro in corso.',
        validated: 'Validato',
        driftTpuDesc: 'Estensione del risultato MLSys 2026 a TPU v5e e v6e. La prevedibilità ha retto sul nuovo percorso numerico, con R² da 0,72 a 0,96.',
        researchInProgress: 'Ricerca in corso', mxuTitle: 'Caratterizzazione bit-level della TPU MXU',
        mxuDesc: 'Sviluppo di un simulatore CPU che riproduce bit per bit le moltiplicazioni di matrici reali di Llama-3.1-8B in un passaggio nativo, permettendo uno studio deterministico del comportamento numerico delle TPU.',
        collaboration: 'Collaborazione', genomicsTitle: 'Genomica long-context con il CNR',
        genomicsDesc: 'Una collaborazione per studiare se i modelli DNA long-context codificano il linkage disequilibrium, combinando ML systems e competenze genomiche del Consiglio Nazionale delle Ricerche.',
        twoFirstAuthor: '2 submission come primo autore', underReviewTitle: 'Attualmente in revisione', mainTrack: 'Main track',
        framingDesc: 'Un’ablazione fattoriale su circa 31.900 prove e nove LLM che isola l’effetto di persona framing, sostituzione terminologica e giustificazione morale sulle risposte dei modelli.',
        positionTrack: 'Position paper track',
        flatlandDesc: 'Un position paper che sostiene l’uso di substrati di ragionamento automatico non vincolati dalla struttura del linguaggio umano.',
        reviewNote: 'Lo stato delle submission è riportato senza implicare accettazione.',
        serviceIndex: 'Servizio accademico', serviceTitle: 'Valutare la ricerca sui sistemi, dalle evidenze all’impatto.',
        neuripsEthicsTitle: 'Ethics Reviewer NeurIPS',
        neuripsEthicsDesc: 'Revisione delle submission per criticità etiche, possibili danni sociali, rischi per l’integrità della ricerca e conformità alle linee guida della conferenza.',
        sospTitle: 'Artifact Evaluation Committee SOSP',
        sospDesc: 'Valutazione di artefatti di ricerca su serving multi-modello efficiente in memoria e analisi della sicurezza della memoria nei kernel CUDA per sistemi di inferenza LLM. Verifica di disponibilità, funzionalità, riproducibilità e coerenza con le affermazioni sperimentali dei paper associati.',
        mlsysAeTitle: 'Artifact Evaluation Committee MLSys',
        mlsysAeDesc: 'Revisione di quattro paper accettati su ottimizzazione di kernel di attenzione, profiling ML full-stack, disaggregazione della memoria GPU e inferenza distribuita. Risultati riprodotti su cluster 8×H100 a noleggio e infrastruttura AMD MI350X; raccomandato l’artefatto che ha poi ricevuto il Distinguished Artifact Award.',
        researchIndex: 'Agenda di ricerca', researchTitle: 'Seguire i guasti attraverso lo stack dei sistemi ML.',
        researchIntro: 'Il mio lavoro collega aritmetica hardware, kernel, infrastruttura di serving e comportamento dei modelli. Studio dove si rompono le assunzioni e costruisco evidenze che rendono i sistemi AI complessi più affidabili, riproducibili e distribuibili.',
        areaServingTitle: 'Sistemi e serving',
        areaServingDesc: 'Costruzione e valutazione di infrastrutture per un’esecuzione efficiente e affidabile dei modelli attraverso acceleratori e contesti di deployment.',
        areaDriftTitle: 'Hardware e comportamento numerico',
        areaDriftDesc: 'Comprendere come aritmetica, precisione e kernel influenzino correttezza, prestazioni e riproducibilità.',
        areaBenchTitle: 'Affidabilità e safety',
        areaBenchDesc: 'Misurare quando cambiamenti di sistema o contesto alterano gli output dei modelli e rendere visibile il rischio prima del deployment.',
        areaSafetyTitle: 'ML systems tra domini',
        areaSafetyDesc: 'Applicazione di metodi di sistemi e long-context a domini che includono genomica e accesso all’informazione nel settore pubblico.',
        profileIndex: 'Profilo', profileTitle: 'Ricerca radicata nei sistemi reali.', experienceLabel: 'Esperienza', present: 'oggi',
        ministryTitle: 'Systems Engineer · Ministero della Cultura',
        ministryDesc: 'Progettazione e deployment di un sistema RAG su oltre 10.000 documenti amministrativi interni, con risposte corredate da fonti. Realizzazione della prima interfaccia di consultazione pubblica assistita da AI in un archivio di stato italiano, con accesso in linguaggio naturale all’inventario per personale e cittadini.',
        educationLabel: 'Formazione', expectedDate: 'Prevista feb. 2027',
        degreeTitle: 'Laurea in Ingegneria Informatica · Universitas Mercatorum',
        degreeDesc: 'Media 29,03/30 (3,79/4,0 conversione WES). Tesi: DSProfiler — analisi statica e machine learning per il rilevamento automatico di anti-pattern prestazionali nelle strutture dati Python.',
        contactEyebrow: 'Conversazioni di ricerca e opportunità PhD', contactTitle: 'Parliamo di sistemi ML affidabili.',
        footerNote: 'Ricerca ML systems', backToTop: 'Torna su ↑'
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
