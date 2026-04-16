$(document).ready(function () {
    var sourceStatements = $("#statement-template").html();     // handlebars statements template
    var templateStatement = Handlebars.compile(sourceStatements);

    var sourceResearch = $("#research-template").html();     // handlebars research template
    var templateResearch = Handlebars.compile(sourceResearch);

    var sourceTag = $("#tag-template").html();     // handlebars tag template
    var templateTag = Handlebars.compile(sourceTag);

    var sourcePaper = $("#paper-template").html();     // handlebars paper template
    var templatePaper = Handlebars.compile(sourcePaper);

    var sourceTimeline = $("#timeline-template").html();     // handlebars timeline template
    var templateTimeline = Handlebars.compile(sourceTimeline);
    // end templates

    // animations when opening the page
    textTerminal("#myName", "> Gianluigi Vitale");
    ScrollReveal().reveal('.description', { delay: 1500 });
    ScrollReveal().reveal('.header-nav', { delay: 2800 });
    ScrollReveal().reveal('#contact-me', { delay: 500 });
    ScrollReveal().reveal('.contact-links', { delay: 500 });
    ScrollReveal().reveal('#madeby', { delay: 500 });
    ScrollReveal().reveal('#currentYear', { delay: 500 });

    // set the current year
    $('#currentYear').text(setCurrentYear());

    // handlebars statements
    handelbarsStatements();
    animationsStatements();

    // delay handlebars research areas, paper, and timeline
    setTimeout(function() {
        handelbarsResearch();
        handelbarsTags();
        animationsResearch();
    }, 3500);

    setTimeout(function() {
        handelbarsPaper();
        handelbarsTimeline();
        animationsPaper();
        animationsTimeline();
    }, 3500);


    // when an 'A' tag is clicked
    $("#goResearch").click(function() {
        slowScroll($(this));
    });

    $("#goTimeline").click(function() {
        slowScroll($(this));
    });

    $("#goContacts").click(function() {
        slowScroll($(this));
    });


    // to translate the website
    $("#it").click(function() {
        traduzioneItaliano();
    });
    $("#en").click(function() {
        traduzioneInglese();
        handelbarsStatements();
        handelbarsResearch();
        handelbarsPaper();
        handelbarsTimeline();
    });



    // FUNZIONI UTILIZZATE



    function setCurrentYear() {                 // returns the current year
        return new Date().getFullYear();
    }

    function textTerminal(variable, name) {     // given a div and a text populates the div with the text imitating a user writing in a terminal
        var i = 0;

        var consoleTyper = setInterval(function () {
            if (i != name.length) {
                i += 1;
                $(variable).text(name.substr(0, i));
            } else {
                clearInterval(consoleTyper);
            }
        }, 75);
    }


    function handelbarsStatements() {           // populates the statements html thanks to handlebars
        $('.statement-added').empty();

        // array of statements
        var dataStatements = [
            {
                "id" : "location",
                "input" : "> Gianluigi.currentLocation",
                "response" : "Pistoia, Italy",
            },
            {
                "id" : "affiliation",
                "input" : "> Gianluigi.affiliation",
                "response" : "Universitas Mercatorum",
            },
            {
                "id" : "info",
                "input" : "> Gianluigi.contactInfo",
                "response" : "[\"<a href=\"mailto:gianluigi.vitale11@gmail.com\">gianluigi.vitale11@gmail.com</a>\", \"<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/GianluigiVitale\">GitHub</a>\", \"<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.linkedin.com/in/gianluigi-vitale615\">LinkedIn</a>\"]",
            },
            {
                "id" : "research",
                "input" : "> Gianluigi.researchFocus",
                "response" : "ML Systems, LLM Serving Infrastructure, Infrastructure Drift",
            },
            {
                "id" : "publication",
                "input" : "> Gianluigi.featuredPublication",
                "response" : "\"<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/GianluigiVitale/driftbench-ae\">DriftBench: MLSys 2026</a>\"",
            },
            {
                "id" : "peer-review",
                "input" : "> Gianluigi.peerReview",
                "response" : "MLSys 2026 Artifact Evaluation Committee · 4 papers reviewed",
            },
            {
                "id" : "education",
                "input" : "> Gianluigi.education",
                "response" : "B.Eng. Computer Engineering · GPA 3.79/4.00 (Expected Feb 2027)",
            },
            {
                "id" : "work",
                "input" : "> Gianluigi.currentWork",
                "response" : "Archivio di Stato di Pistoia (Italian Ministry of Culture)",
            }
        ];

        // handlebars template with data
        for (var key in dataStatements) {
            var statement = dataStatements[key];

            var dataStatement = {
                "id" : statement.id,
                "input" : statement.input,
                "response" : statement.response
            };

            var htmlStatement = templateStatement(dataStatement);
            $('.statement-added').append(htmlStatement);
        }
    }

    function animationsStatements() {           // display animation for the statements div
        ScrollReveal().reveal('.terminal', { delay: 3000 });
        ScrollReveal().reveal('#location', { delay: 200 });
        ScrollReveal().reveal('#affiliation', { delay: 100 });
        ScrollReveal().reveal('#info', { delay: 100 });
        ScrollReveal().reveal('#research', { delay: 100 });
        ScrollReveal().reveal('#publication', { delay: 100 });
        ScrollReveal().reveal('#peer-review', { delay: 100 });
        ScrollReveal().reveal('#education', { delay: 100 });
        ScrollReveal().reveal('#work', { delay: 100 });
        ScrollReveal().reveal('#statement-terminal', { delay: 100 });
    }


    function handelbarsResearch() {             // populates the research areas html thanks to handlebars
        $('.research-areas').empty();
        // array of research interests
        var dataResearch = [
            {
                "id" : "llm-serving",
                "icon" : "⚡",
                "title" : "LLM Serving Infrastructure",
                "description" : "Performance characterization, inference system benchmarking, and serving stack measurement across hardware generations."
            },
            {
                "id" : "infrastructure-drift",
                "icon" : "📐",
                "title" : "Infrastructure Drift",
                "description" : "Quantifying behavioral changes in ML systems when hardware or software environments shift — safety, correctness, and reproducibility implications."
            },
            {
                "id" : "ml-benchmarking",
                "icon" : "🔬",
                "title" : "ML Systems Benchmarking",
                "description" : "Rigorous evaluation frameworks and datasets for reproducible measurement of production LLM serving systems."
            },
            {
                "id" : "safety-reliability",
                "icon" : "🛡️",
                "title" : "Safety & Reliability",
                "description" : "How infrastructure changes affect safety classifier outputs and model behavior — bridging systems and alignment concerns."
            },
        ];

        // handlebars template with data
        for (var key in dataResearch) {
            var research = dataResearch[key];

            var dataResearchArea = {
                "id" : research.id,
                "icon" : research.icon,
                "title" : research.title,
                "description" : research.description
            };

            var htmlResearch = templateResearch(dataResearchArea);
            $('.research-areas').append(htmlResearch);
        }
    }

    function handelbarsTags() {             // populates the tags html thanks to handlebars
        $('.tags').empty();
        // array of tags
        var dataTags = [
            "llm-serving", "vllm", "llamaguard", "gpu-benchmarking", 
            "h100 · b200", "infrastructure-drift", "ml-reproducibility", 
            "pytorch", "docker"
        ];

        // handlebars template with data
        for (var i = 0; i < dataTags.length; i++) {
            var dataTag = {
                "tagName" : dataTags[i]
            };

            var htmlTag = templateTag(dataTag);
            $('.tags').append(htmlTag);
        }
    }

    function animationsResearch() {               // display animations for the research div
        ScrollReveal().reveal('.research', { delay: 300 });
        ScrollReveal().reveal('.research-areas', { delay: 300 });
        ScrollReveal().reveal('#llm-serving', { delay: 400 });
        ScrollReveal().reveal('#infrastructure-drift', { delay: 500 });
        ScrollReveal().reveal('#ml-benchmarking', { delay: 600 });
        ScrollReveal().reveal('#safety-reliability', { delay: 700 });
        ScrollReveal().reveal('.tags', { delay: 800 });
    }


    function handelbarsPaper() {           // populates the paper html thanks to handlebars
        $('.paper-container').empty();

        // paper data
        var dataPaper = {
            "label" : "★ &nbsp;MLSys 2026 &nbsp;·&nbsp; Sole Author &nbsp;·&nbsp; Artifact: Available · Functional · Reproduced",
            "title" : "DriftBench: Measuring and Predicting<br>Infrastructure Drift in LLM Serving Systems",
            "meta" : "<span>Universitas Mercatorum</span><span class='highlight'>236,985 prompt-response pairs</span><span>MIT License · CC BY 4.0</span><span><a target='_blank' rel='noopener noreferrer' href='https://doi.org/10.5281/zenodo.19361066'>Zenodo DOI</a> · <a target='_blank' rel='noopener noreferrer' href='https://github.com/GianluigiVitale/driftbench-ae'>Artifact repo</a></span>",
            "description" : "A measurement framework and predictive model (PRI) for infrastructure drift in LLM serving systems. Demonstrates a 23.85% safety flip rate on H100→B200 migration. Three self-contained evaluation paths: GPU production case study, CPU-only PRI retraining, and automated numerical verification of all 34 claims."
        };

        var htmlPaper = templatePaper(dataPaper);
        $('.paper-container').append(htmlPaper);
    }

    function animationsPaper() {              // display animations for the paper div
        ScrollReveal().reveal('#title-paper', { delay: 300 });
        ScrollReveal().reveal('.paper-card', { delay: 400 });
    }

    function handelbarsTimeline() {           // populates the timeline html thanks to handlebars
        $('.timeline-container').empty();

        // array of timeline items
        var dataTimeline = [
            {
                "id" : "mlsys2026",
                "year" : "May 2026",
                "title" : "MLSys 2026 · Bellevue, WA",
                "description" : "Presenting DriftBench (sole author). MLSys 2026 Artifact Evaluation Committee: reviewed Hawkeye, HipKittens, DisAgg, and ParallelKittens."
            },
            {
                "id" : "predoctoral",
                "year" : "2026–2027",
                "title" : "Pre-doctoral bridge",
                "description" : "NeurIPS 2026 workshop proposal (co-organized with CNR-ICAR). Visiting researcher positions. Fall 2027 PhD applications — ML Systems, US programs."
            },
            {
                "id" : "degree",
                "year" : "2024–2027",
                "title" : "B.Eng. Computer Engineering",
                "description" : "Università Telematica Universitas Mercatorum · Expected February 2027."
            },
            {
                "id" : "work",
                "year" : "2024–now",
                "title" : "Archivio di Stato di Pistoia",
                "description" : "Assistente ai Servizi Statistico Informativi · Italian Ministry of Culture. I created the first AI RAG system for an Italian state archive to consult internal documents for visitors."
            },
        ];

        // handlebars template with data
        for (var i = 0; i < dataTimeline.length; i++) {
            var timeline = dataTimeline[i];

            var dataTimelineItem = {
                "id" : timeline.id,
                "year" : timeline.year,
                "title" : timeline.title,
                "description" : timeline.description
            };

            var htmlTimeline = templateTimeline(dataTimelineItem);
            $('.timeline-container').append(htmlTimeline);
        }
    }

    function animationsTimeline() {              // display animations for the timeline div
        ScrollReveal().reveal('#title-timeline', { delay: 300 });
        ScrollReveal().reveal('#mlsys2026', { delay: 400 });
        ScrollReveal().reveal('#predoctoral', { delay: 500 });
        ScrollReveal().reveal('#degree', { delay: 600 });
        ScrollReveal().reveal('#work', { delay: 700 });
    }

    function handelbarsProjects_OLD() {           // OLD FUNCTION - kept for reference
        $('.project-container').empty();

        // array of OLD projects
        var dataProjects = [
            {
                "id" : "vaccinum",
                "video" : "assets/videos/vaccinum.mp4",
                "title" : "Vaccinum Android/iOS",
                "description" : "The app displays key global and national covid-19 vaccinations data in a simple, fast and intuitive way.<br>It features worldwide data as well as data for the country selected by the user, and every Sunday sends a push notification with the selected nation's vaccinated data for the week and total, and is available in 15 languages.<br> Download link:<a class=\"link\" target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://appvaccinum.com/\"> appvaccinum.com</a>",
                "skills" : "<span class='project-skill'>HTML5</span><span class='project-skill'>SCSS</span><span class='project-skill'>Angular</span><span class='project-skill'>Ionic</span><span class='project-skill'>PHP</span><span class='project-skill'>Laravel</span><span class='project-skill'>MySQL</span>",
                "liveDisplay" : "none",
                "linkLive" : "https://play.google.com/store/apps/details?id=com.vaccinum.app",
                "linkGitHub" : "https://play.google.com/store/apps/details?id=com.vaccinum.app"
            },
            {
                "id" : "boolbnb",
                "video" : "assets/videos/1boolbnb.mp4",
                "title" : "BoolBnB",
                "description" : "BoolBnB is an application to find and manage apartment rentals. Users who want to rent an apartment once registered can create an ad. Users interested in an apartment, using the filters of a search page, see a list of possible apartments and by clicking on each one it's possible to see a detailed page. The user can contact the owner to ask questions. In addition, the owners of an apartment can pay to sponsor the ad of an apartment to make it more visible.",
                "skills" : "<span class='project-skill'>HTML5</span><span class='project-skill'>SCSS</span><span class='project-skill'>JavaScript</span><span class='project-skill'>jQuery</span><span class='project-skill'>PHP</span><span class='project-skill'>Laravel</span><span class='project-skill'>MySQL</span>",
                "liveDisplay" : "none",
                "linkLive" : "https://github.com/GianluigiVitale/BoolBnB",
                "linkGitHub" : "https://github.com/GianluigiVitale/BoolBnB"
            },
            {
                "id" : "boolzap",
                "video" : "assets/videos/2boolzap.mp4",
                "title" : "BoolZap",
                "description" : "Project inspired by WhatsApp Web. You can send messages to different contacts and after one second he/she will reply with a random funny message. The site supports mobile, tablet, and desktop sizes.",
                "skills" : "<span class='project-skill'>HTML5</span><span class='project-skill'>CSS3</span><span class='project-skill'>JavaScript</span><span class='project-skill'>jQuery</span><span class='project-skill'>Handlebars</span>",
                "liveDisplay" : "flex",
                "linkLive" : "https://gianluigivitale.github.io/js-html-css-boolzap/",
                "linkGitHub" : "https://github.com/GianluigiVitale/js-html-css-boolzap"
            },
            {
                "id" : "teambit",
                "video" : "assets/videos/3teambit.mp4",
                "title" : "Teambit",
                "description" : "Complete replica of the landing page of teambit.io. Everything has been replicated such as the hamburger menu as well as the window of the live chat. The site supports mobile, tablet, and desktop sizes.",
                "skills" : "<span class='project-skill'>HTML5</span><span class='project-skill'>SCSS</span><span class='project-skill'>JavaScript</span><span class='project-skill'>jQuery</span>",
                "liveDisplay" : "flex",
                "linkLive" : "https://gianluigivitale.github.io/node-sass-teambit/",
                "linkGitHub" : "https://github.com/GianluigiVitale/node-sass-teambit"
            },
            {
                "id" : "boolflix",
                "video" : "assets/videos/4boolflix.mp4",
                "title" : "BoolFlix",
                "description" : "Website to get informations about films/tv Series. For example, search ‘Star Wars’ and you will get all the films/tv Series that include ‘Star Wars’ in the title. The site supports mobile, tablet, and desktop sizes.",
                "skills" : "<span class='project-skill'>HTML5</span><span class='project-skill'>CSS3</span><span class='project-skill'>JavaScript</span><span class='project-skill'>jQuery</span><span class='project-skill'>Handlebars</span>",
                "liveDisplay" : "flex",
                "linkLive" : "https://gianluigivitale.github.io/ajax-ex-boolflix/",
                "linkGitHub" : "https://github.com/GianluigiVitale/ajax-ex-boolflix"
            },
            {
                "id" : "challenges",
                "video" : "assets/videos/5php-challenges.mp4",
                "title" : "100+ PHP Solved challenges",
                "description" : "This repository contains my solutions of PHP challenges I solved from the website <a class=\"link\" target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.codewars.com/\">codewars.com</a> <br> I solved 174 challenges including JavaScript and Python, ranking me 95th percentile.",
                "skills" : "<span class='project-skill'>PHP</span>",
                "liveDisplay" : "none",
                "linkLive" : "https://github.com/GianluigiVitale/PHP-Challenges",
                "linkGitHub" : "https://github.com/GianluigiVitale/PHP-Challenges"
            },
            {
                "id" : "minefield",
                "video" : "assets/videos/9campominato.mp4",
                "title" : "Minefield",
                "description" : "Game to test your luck! <br> The computer generates 16 random numbers from 1 to 100. The user enters one number at a time between 1 to 100. If the number is present in the list of generated numbers, the game ends, otherwise the game continues by asking the user for another number. The game ends when the player enters a \"forbidden\" number or reaches the maximum possible numbers of numbers allowed. At the end of the match the software communicates the score, i.e. the number of times that the user has entered an allowed number. The user can also select the difficulty that determines the maximum number. <br><br> I have created 2 versions of the game, one with JavaScript (playable in the browser) and the other with Python.",
                "skills" : "<span class='project-skill'>JavaScript</span><span class='project-skill'>jQuery</span><span class='project-skill'>Python</span>",
                "liveDisplay" : "flex",
                "linkLive" : "https://gianluigivitale.github.io/js-py-campominato/",
                "linkGitHub" : "https://github.com/GianluigiVitale/js-py-campominato"
            },
            {
                "id" : "calendar",
                "video" : "assets/videos/6calendar.mp4",
                "title" : "Calendar with Holidays",
                "description" : "Calendar of 2018 with the holidays. The days of the month are generated thanks to MomentJS and Handlebars and with an ajax request the holidays are added. The site supports mobile, tablet, and desktop sizes.",
                "skills" : "<span class='project-skill'>HTML5</span><span class='project-skill'>CSS3</span><span class='project-skill'>JavaScript</span><span class='project-skill'>jQuery</span><span class='project-skill'>MomentJS</span><span class='project-skill'>Handlebars</span>",
                "liveDisplay" : "flex",
                "linkLive" : "https://gianluigivitale.github.io/ajax-ex-calendar/",
                "linkGitHub" : "https://github.com/GianluigiVitale/ajax-ex-calendar"
            },
            {
                "id" : "dashboard",
                "video" : "assets/videos/7chartbool.mp4",
                "title" : "ChartBool",
                "description" : "Dashboard of a company's Key Performance Indicator. The data are taken from an API whereas the charts are made with ChartJS. It is possible to add a sale by selecting the salesman, the month and the amount.",
                "skills" : "<span class='project-skill'>HTML5</span><span class='project-skill'>CSS3</span><span class='project-skill'>JavaScript</span><span class='project-skill'>jQuery</span><span class='project-skill'>Handlebars</span>",
                "liveDisplay" : "none",
                "linkLive" : "https://github.com/GianluigiVitale/rest-chartbool",
                "linkGitHub" : "https://github.com/GianluigiVitale/rest-chartbool"
            },
            {
                "id" : "albums",
                "video" : "assets/videos/8dischi.mp4",
                "title" : "Albums",
                "description" : "Website to show the infos of different albums taken from an API. It is possible to filter the songs by genre. The site supports mobile, tablet, and desktop sizes.",
                "skills" : "<span class='project-skill'>HTML5</span><span class='project-skill'>SCSS</span><span class='project-skill'>JavaScript</span><span class='project-skill'>jQuery</span><span class='project-skill'>Handlebars</span><span class='project-skill'>PHP</span>",
                "liveDisplay" : "none",
                "linkLive" : "https://github.com/GianluigiVitale/php-ajax-dischi",
                "linkGitHub" : "https://github.com/GianluigiVitale/php-ajax-dischi"
            },
            {
                "id" : "digital",
                "video" : "assets/videos/10digitalocean.mp4",
                "title" : "Digital Ocean",
                "description" : "Replica of the landing page of DigitalOcean, made with Bootstrap. The site supports mobile, tablet, and desktop sizes.",
                "skills" : "<span class='project-skill'>HTML5</span><span class='project-skill'>CSS3</span>",
                "liveDisplay" : "flex",
                "linkLive" : "https://gianluigivitale.github.io/html-css-digitalocean/",
                "linkGitHub" : "https://github.com/GianluigiVitale/html-css-digitalocean"
            },
        ];

        // handlebars template with data

        for (var i = 0; i < dataProjects.length; i++) {
            var project = dataProjects[i];

            var dataSkill = {
                "id" : project.id,
                "video" : project.video,
                "title" : project.title,
                "description" : project.description,
                "skills" : project.skills,
                "liveDisplay" : project.liveDisplay,
                "linkLive" : project.linkLive,
                "linkGitHub" : project.linkGitHub
            };

            var htmlProject = templateProject(dataSkill);
            $('.project-container').append(htmlProject);
        }
    }

    function animationsProjects_OLD() {              // OLD FUNCTION - display animations for the projects div
        ScrollReveal().reveal('#vaccinum', { delay: 300 });
        ScrollReveal().reveal('#boolbnb', { delay: 300 });
        ScrollReveal().reveal('#boolzap', { delay: 300 });
        ScrollReveal().reveal('#teambit', { delay: 300 });
        ScrollReveal().reveal('#boolflix', { delay: 300 });
        ScrollReveal().reveal('#challenges', { delay: 300 });
        ScrollReveal().reveal('#calendar', { delay: 300 });
        ScrollReveal().reveal('#chartbool', { delay: 300 });
        ScrollReveal().reveal('#albums', { delay: 300 });
        ScrollReveal().reveal('#minefield', { delay: 300 });
        ScrollReveal().reveal('#digital', { delay: 300 });
    }


    function slowScroll(value) {            // scrolls to the given div slowly
        var aid = $(value).attr("href");
        $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
    }

    function traduzioneItaliano() {             // translates the website in italian
        $('#goResearch').text('Ricerca');
        $('#goTimeline').text('Esperienze');
        $('#goContacts').text('Contatti');
        $('#description').html('Ricercatore in ML Systems. <strong>Unico autore di DriftBench</strong> (MLSys 2026). Sviluppo infrastrutture di misurazione per sistemi di serving LLM. Candidatura per PhD autunno 2027 in ML Systems.');
        $('#location').find('.statement-input p').text('> Gianluigi.posizioneAttuale');
        $('#affiliation').find('.statement-input p').text('> Gianluigi.affiliazione');
        $('#info').find('.statement-input p').text('> Gianluigi.informazioniDiContatto');
        $('#research').find('.statement-input p').text('> Gianluigi.focusRicerca');
        $('#research').find('.statement-response p').text('ML Systems, Infrastruttura LLM Serving, Infrastructure Drift');
        $('#publication').find('.statement-input p').text('> Gianluigi.pubblicazionePrincipale');
        $('#peer-review').find('.statement-input p').text('> Gianluigi.revisioni');
        $('#peer-review').find('.statement-response p').text('Revisore per l\'Artifact Evaluation, MLSys 2026 · 4 paper revisionati');
        $('#education').find('.statement-input p').text('> Gianluigi.formazione');
        $('#education').find('.statement-response p').text('Laurea in Ingegneria Informatica · Media 29/30 (Prevista Febbraio 2027)');
        $('#work').find('.statement-input p').text('> Gianluigi.lavoroAttuale');
        $('#work').find('.statement-response p').text('Archivio di Stato di Pistoia (Ministero della Cultura)');

        $('#research').find('h2').text('Interessi di Ricerca');
        $('#title-paper').text('Pubblicazione in Evidenza');
        $('#title-timeline').text('Esperienze');

        // Update research area titles
        $('#llm-serving').find('h3').text('Infrastruttura LLM Serving');
        $('#llm-serving').find('p').text('Caratterizzazione delle prestazioni, benchmarking dei sistemi di inferenza e misurazione dello stack di serving tra diverse generazioni hardware.');
        $('#infrastructure-drift').find('h3').text('Infrastructure Drift');
        $('#infrastructure-drift').find('p').text('Quantificazione dei cambiamenti comportamentali nei sistemi ML quando gli ambienti hardware o software cambiano — implicazioni per sicurezza, correttezza e riproducibilità.');
        $('#ml-benchmarking').find('h3').text('Benchmarking Sistemi ML');
        $('#ml-benchmarking').find('p').text('Framework di valutazione rigorosi e dataset per misurazioni riproducibili dei sistemi di serving LLM in produzione.');
        $('#safety-reliability').find('h3').text('Sicurezza e Affidabilità');
        $('#safety-reliability').find('p').text('Come i cambiamenti infrastrutturali influenzano gli output dei classificatori di sicurezza e il comportamento del modello — collegando sistemi e problemi di allineamento.');

        // Update paper section
        $('.paper-label').html('★ &nbsp;MLSys 2026 &nbsp;·&nbsp; Unico Autore &nbsp;·&nbsp; Artefatto: Available · Functional · Reproduced');
        $('.paper-title').html('DriftBench: Misurare e Predire<br>Infrastructure Drift nei Sistemi di Serving LLM');
        $('.paper-meta').html('<span>Universitas Mercatorum</span><span class="highlight">236.985 coppie prompt-risposta</span><span>Licenza MIT · CC BY 4.0</span><span><a target="_blank" rel="noopener noreferrer" href="https://doi.org/10.5281/zenodo.19361066">Zenodo DOI</a> · <a target="_blank" rel="noopener noreferrer" href="https://github.com/GianluigiVitale/driftbench-ae">Repo artefatto</a></span>');
        $('.paper-desc').text('Un framework di misurazione e modello predittivo (PRI) per infrastructure drift nei sistemi di serving LLM. Dimostra un tasso di inversione di sicurezza del 23,85% nella migrazione H100→B200. Tre percorsi di valutazione autonomi: caso di studio GPU in produzione, riaddestramento PRI solo CPU e verifica numerica automatizzata di tutte le 34 affermazioni.');

        // Update timeline items
        $('#mlsys2026 .timeline-content h3').text('MLSys 2026 · Bellevue, WA');
        $('#mlsys2026 .timeline-content p').text('Presentazione di DriftBench (unico autore). Revisore per l\'Artifact Evaluation, MLSys 2026: revisione di Hawkeye, HipKittens, DisAgg e ParallelKittens.');
        $('#predoctoral .timeline-content h3').text('Ponte pre-dottorato');
        $('#predoctoral .timeline-content p').text('Proposta di workshop NeurIPS 2026 (co-organizzato con CNR-ICAR). Posizioni di ricercatore in visita. Candidature PhD autunno 2027 — ML Systems, programmi USA.');
        $('#degree .timeline-content h3').text('Laurea in Ingegneria Informatica');
        $('#degree .timeline-content p').text('Università Telematica Universitas Mercatorum · Media 29/30 · Prevista Febbraio 2027.');
        $('#work .timeline-content h3').text('Archivio di Stato di Pistoia');
        $('#work .timeline-content p').text('Assistente ai Servizi Statistico Informativi · Ministero della Cultura. Ho creato il primo sistema AI RAG per un archivio di stato italiano per consultare documenti interni per i visitatori.');

        $('#contact').find('h2').text('Contatti');
        $('#madeby').text('Creato da Gianluigi Vitale ');
    }

    function traduzioneInglese() {              // translates the website in english
        $('#goResearch').text('Research');
        $('#goTimeline').text('Timeline');
        $('#goContacts').text('Contact');

        $('#description').html('ML Systems researcher. <strong>Sole-author of DriftBench</strong> (MLSys 2026). Building measurement infrastructure for LLM serving systems. Targeting a Fall 2027 PhD in ML Systems.');

        $('#location').find('.statement-input p').text('> Gianluigi.currentLocation');
        $('#affiliation').find('.statement-input p').text('> Gianluigi.affiliation');
        $('#info').find('.statement-input p').text('> Gianluigi.contactInfo');
        $('#research').find('.statement-input p').text('> Gianluigi.researchFocus');
        $('#research').find('.statement-response p').text('ML Systems, LLM Serving Infrastructure, Infrastructure Drift');
        $('#publication').find('.statement-input p').text('> Gianluigi.featuredPublication');
        $('#peer-review').find('.statement-input p').text('> Gianluigi.peerReview');
        $('#peer-review').find('.statement-response p').text('MLSys 2026 Artifact Evaluation Committee · 4 papers reviewed');
        $('#education').find('.statement-input p').text('> Gianluigi.education');
        $('#education').find('.statement-response p').text('B.Eng. Computer Engineering · GPA 3.79/4.00 (Expected Feb 2027)');
        $('#work').find('.statement-input p').text('> Gianluigi.currentWork');
        $('#work').find('.statement-response p').text('Archivio di Stato di Pistoia (Italian Ministry of Culture)');

        $('#research').find('h2').text('Research Interests');
        $('#title-paper').text('Featured Publication');
        $('#title-timeline').text('Timeline');

        // Update research area titles
        $('#llm-serving').find('h3').text('LLM Serving Infrastructure');
        $('#llm-serving').find('p').text('Performance characterization, inference system benchmarking, and serving stack measurement across hardware generations.');
        $('#infrastructure-drift').find('h3').text('Infrastructure Drift');
        $('#infrastructure-drift').find('p').text('Quantifying behavioral changes in ML systems when hardware or software environments shift — safety, correctness, and reproducibility implications.');
        $('#ml-benchmarking').find('h3').text('ML Systems Benchmarking');
        $('#ml-benchmarking').find('p').text('Rigorous evaluation frameworks and datasets for reproducible measurement of production LLM serving systems.');
        $('#safety-reliability').find('h3').text('Safety & Reliability');
        $('#safety-reliability').find('p').text('How infrastructure changes affect safety classifier outputs and model behavior — bridging systems and alignment concerns.');

        // Reset paper section to English
        $('.paper-label').html('★ &nbsp;MLSys 2026 &nbsp;·&nbsp; Sole Author &nbsp;·&nbsp; Artifact: Available · Functional · Reproduced');
        $('.paper-title').html('DriftBench: Measuring and Predicting<br>Infrastructure Drift in LLM Serving Systems');
        $('.paper-meta').html('<span>Universitas Mercatorum</span><span class="highlight">236,985 prompt-response pairs</span><span>MIT License · CC BY 4.0</span><span><a target="_blank" rel="noopener noreferrer" href="https://doi.org/10.5281/zenodo.19361066">Zenodo DOI</a> · <a target="_blank" rel="noopener noreferrer" href="https://github.com/GianluigiVitale/driftbench-ae">Artifact repo</a></span>');
        $('.paper-desc').text('A measurement framework and predictive model (PRI) for infrastructure drift in LLM serving systems. Demonstrates a 23.85% safety flip rate on H100→B200 migration. Three self-contained evaluation paths: GPU production case study, CPU-only PRI retraining, and automated numerical verification of all 34 claims.');

        // Reset timeline items to English
        $('#mlsys2026 .timeline-content h3').text('MLSys 2026 · Bellevue, WA');
        $('#mlsys2026 .timeline-content p').text('Presenting DriftBench (sole author). MLSys 2026 Artifact Evaluation Committee: reviewed Hawkeye, HipKittens, DisAgg, and ParallelKittens (4 papers across 4 institutional affiliations).');
        $('#predoctoral .timeline-content h3').text('Pre-doctoral bridge');
        $('#predoctoral .timeline-content p').text('NeurIPS 2026 workshop proposal (co-organized with CNR-ICAR). Visiting researcher positions. Fall 2027 PhD applications — ML Systems, US programs.');
        $('#degree .timeline-content h3').text('B.Eng. Computer Engineering');
        $('#degree .timeline-content p').text('Università Telematica Universitas Mercatorum · GPA 3.79/4.00 · Expected February 2027.');
        $('#work .timeline-content h3').text('Archivio di Stato di Pistoia');
        $('#work .timeline-content p').text('Assistente ai Servizi Statistico Informativi · Italian Ministry of Culture. I created the first AI RAG system for an Italian state archive to consult internal documents for visitors.');

        $('#contact').find('h2').text('Contact');
        $('#madeby').text('Made by Gianluigi Vitale © ');
    }
});
