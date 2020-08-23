$(document).ready(function () {
    var sourceStatements = $("#statement-template").html();     // handlebars statements template
    var templateStatement = Handlebars.compile(sourceStatements);

    var sourceSkills = $("#skill-template").html();     // handlebars skills template
    var templateSkill = Handlebars.compile(sourceSkills);

    var sourceProjects = $("#project-template").html();     // handlebars project template
    var templateProject = Handlebars.compile(sourceProjects);
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

    // delay handlebars skills and projects
    setTimeout(function() {
        handelbarsSkills();
        animationsSkills();
    }, 3500);

    setTimeout(function() {
        handelbarsProjects()
        animationsProjects();
    }, 3500);


    // when an 'A' tag is clicked
    $("#goSkills").click(function() {
        slowScroll($(this));
    });

    $("#goProjects").click(function() {
        slowScroll($(this));
    });

    $("#goToProjects").click(function() {
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
        handelbarsProjects();
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
                "response" : "Palermo, IT",
            },
            {
                "id" : "des-location",
                "input" : "> Gianluigi.willingToRelocate",
                "response" : "Yes",
            },
            {
                "id" : "info",
                "input" : "> Gianluigi.contactInfo",
                "response" : "[\"<a href=\"mailto:gianluigi.vitale12@gmail.com\">gianluigi.vitale12@gmail.com</a>\", \"<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.linkedin.com/in/gianluigi-vitale615\">LinkedIn</a>\", \"<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/GianluigiVitale\">GitHub</a>\"]",
            },
            {
                "id" : "resume",
                "input" : "> Gianluigi.resume",
                "response" : "[\"<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"assets/CV_Gianluigi_Vitale.pdf\">cv-EN.pdf</a>\", \"<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"assets/CV_Gianluigi_Vitale_it.pdf\">cv-IT.pdf</a>\"]",
            },
            {
                "id" : "interests",
                "input" : "> Gianluigi.interests",
                "response" : "[\"Coding\", \"Economics\", \"Reading\", \"Mechanics\"]",
            },
            {
                "id" : "education",
                "input" : "> Gianluigi.education",
                "response" : "[\"<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.boolean.careers/\">Boolean Careers</a>\", \"Liceo Scientifico S.Cannizzaro\"]",
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
        ScrollReveal().reveal('#des-location', { delay: 100 });
        ScrollReveal().reveal('#info', { delay: 100 });
        ScrollReveal().reveal('#resume', { delay: 100 });
        ScrollReveal().reveal('#interests', { delay: 100 });
        ScrollReveal().reveal('#education', { delay: 100 });
        ScrollReveal().reveal('#statement-terminal', { delay: 100 });
    }


    function handelbarsSkills() {             // populates the skills html thanks to handlebars
        // array of skills
        var dataSkills = [
            {
                "id" : "html",
                "pathSkill" : "assets/skills/html.png",
                "altSkill" : "html/css",
                "textSkill" : "HTML5, CSS3"
            },
            {
                "id" : "js-jquery",
                "pathSkill" : "assets/skills/js-jquery.png",
                "altSkill" : "js/jquery",
                "textSkill" : "JavaScript, jQuery"
            },
            {
                "id" : "vuejs",
                "pathSkill" : "assets/skills/vuejs.png",
                "altSkill" : "vuejs",
                "textSkill" : "VueJS"
            },
            {
                "id" : "php-laravel",
                "pathSkill" : "assets/skills/php-laravel.png",
                "altSkill" : "php-laravel",
                "textSkill" : "PHP, Laravel"
            },
            {
                "id" : "mysql",
                "pathSkill" : "assets/skills/mysql.png",
                "altSkill" : "mysql",
                "textSkill" : "MySQL, SQL"
            },
            {
                "id" : "python",
                "pathSkill" : "assets/skills/python.png",
                "altSkill" : "Python",
                "textSkill" : "Python"
            }
        ];

        // handlebars template with data
        for (var key in dataSkills) {
            var skill = dataSkills[key];

            var dataSkill = {
                "id" : skill.id,
                "pathSkill" : skill.pathSkill,
                "altSkill" : skill.altSkill,
                "textSkill" : skill.textSkill
            };

            var htmlSkill = templateSkill(dataSkill);
            $('.skills-icon').append(htmlSkill);
        }
    }

    function animationsSkills() {               // display animations for the skills div
        ScrollReveal().reveal('#title-project', { delay: 300 });
        ScrollReveal().reveal('.skills', { delay: 300 });
        ScrollReveal().reveal('.skills-icon', { delay: 300 });
        ScrollReveal().reveal('#html', { delay: 400 });
        ScrollReveal().reveal('#js-jquery', { delay: 500 });
        ScrollReveal().reveal('#vuejs', { delay: 600 });
        ScrollReveal().reveal('#php-laravel', { delay: 700 });
        ScrollReveal().reveal('#mysql', { delay: 800 });
        ScrollReveal().reveal('#python', { delay: 900 });
    }


    function handelbarsProjects() {           // populates the projects html thanks to handlebars
        $('.project-container').empty();

        // array of projects
        var dataProjects = [
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

    function animationsProjects() {              // display animations for the projects div
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
        $('#goSkills').text('Competenze');
        $('#goProjects').text('Progetti');
        $('#goContacts').text('Contatti');
        $('#description').html('Sono uno sviluppatore web full-stack. La mia passione è realizzare semplici e belle esperienze per gli utenti. <br> Dai un occhiata ai miei <a href="#projects" id="goToProjects">progetti</a> qui sotto.');
        $('#location').find('.statement-input p').text('> Gianluigi.ubicazioneAttuale');
        $('#des-location').find('.statement-input p').text('> Gianluigi.disponibilitàAlTrasferimento');
        $('#des-location').find('.statement-response p').text('Si');
        $('#info').find('.statement-input p').text('> Gianluigi.informazioniDiContatto');
        $('#resume').find('.statement-input p').text('> Gianluigi.curriculum');
        $('#interests').find('.statement-input p').text('> Gianluigi.interessi');
        $('#interests').find('.statement-response p').text('["Programmazione", "Economia", "Lettura", "Meccanica"]');
        $('#education').find('.statement-input p').text('> Gianluigi.formazione');

        $('#skills').find('h2').text('Competenze');

        $('.view-source').find('span').text('Visualizza Codice');
        $('.live-demo').find('span').text('Visualizza Demo');

        $('#projects').find('h2').text('Progetti');

        $('#boolbnb').find('.project-content p').text('BoolBnB è un\'applicazione per trovare e gestire l’affitto di appartamenti. Gli utenti che vogliono mettere in affitto un appartamento una volta registrati possono creare un annuncio. Gli utenti interessati ad un appartamento, utilizzando i filtri di una apposita pagina di ricerca, vedono una lista di possibili appartamenti e cliccando su ognuno possono vedere una pagina di dettaglio. L’utente può contattare il proprietario per fare domande. Inoltre, i proprietari di un appartamento possono pagare per sponsorizzare l’annuncio del proprio appartamento e renderlo maggiormente in evidenza.');
        $('#boolzap').find('.project-content p').text('Progetto ispirato a WhatsApp Web. È possibile inviare messaggi a diversi contatti che dopo un secondo risponderanno con un buffo messaggio casuale. Il sito è compatibile con i formati cellulari, tablet e desktop.');
        $('#teambit').find('.project-content p').text('Replica completa della landing page di teambit.io. Ogni elemento è stato replicato dall\'hamburger menu alla finestra della live chat. Il sito è compatibile con i formati cellulari, tablet e desktop.');
        $('#boolflix').find('.project-content p').text('Boolflix permette di ottenere informazioni su film/serie tv. Per esempio, cercando \'Star Wars\' si ottengono tutti i film/serie tv che includono \'Star Wars\' nel titolo. Il sito è compatibile con i formati cellulari, tablet e desktop.');
        $('#challenges').find('.project-content h3').text('100+ Esercizi Svolti di PHP');
        $('#challenges').find('.project-content p').text('Questa repository contiene le mie soluzioni a diversi esercizi che ho svolto di PHP presi dal sito codewars.com. Considerando anche JavaScript ho svolto 166 esercizi, classificandomi al 94° percentile.');
        $('#calendar').find('.project-content h3').text('Calendario delle festività');
        $('#calendar').find('.project-content p').text('Calendario delle festività del 2018. I giorni del mese sono generati grazie a MomentJS e Handlebars e grazie a una richiesta ajax vengono aggiunti i giorni festivi. Il sito è compatibile con i formati cellulari, tablet e desktop.');
        $('#dashboard').find('.project-content p').text('Dashboard dei Key Performance Indicator di una società. I dati sono presi da una API mentre i grafici sono realizzati con ChartJS. È possibile aggiungere una vendita selezionando il venditore, il mese e l\'importo.');
        $('#albums').find('.project-content p').text('Sito web per mostrare le informazioni di diversi album presi da un API. È possibile filtrare le canzoni per genere. Il sito è compatibile con i formati cellulari, tablet e desktop.');
        $('#minefield').find('.project-content p').text('Il computer genera 16 numeri casuali tra 1 e 100. In seguito chiede all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100. Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti. Al termine della partita il software comunica il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. L\'utente può anche selezionare la difficoltà che determina la dimensione del campo (il numero massimo).');
        $('#digital').find('.project-content p').text('Replica della landing page di Digital Ocean sviluppata con Bootstrap. Il sito è compatibile con i formati cellulari, tablet e desktop.');

        $('#contact').find('h2').text('Contatti');
        $('#madeby').text('Creato da Gianluigi Vitale © ');
    }

    function traduzioneInglese() {              // translates the website in english
        $('#goSkills').text('Skills');
        $('#goProjects').text('Projects');
        $('#goContacts').text('Contact');

        $('#description').html('I am a full-stack web developer. My passion is building simple, beautiful user experiences. <br> Check out my <a href="#projects" id="goToProjects">side-projects</a> below.');

        $('#skills').find('h2').text('Skills');
        $('#projects').find('h2').text('Projects');

        $('#contact').find('h2').text('Contact');
        $('#madeby').text('Made by Gianluigi Vitale © ');
    }
});
