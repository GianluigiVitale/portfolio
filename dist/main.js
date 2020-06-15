/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  var sourceStatements = $("#statement-template").html(); // handlebars statements template

  var templateStatement = Handlebars.compile(sourceStatements);
  var sourceSkills = $("#skill-template").html(); // handlebars skills template

  var templateSkill = Handlebars.compile(sourceSkills);
  var sourceProjects = $("#project-template").html(); // handlebars project template

  var templateProject = Handlebars.compile(sourceProjects); // fine templates

  textTerminal("#myName", "> Gianluigi Vitale");
  ScrollReveal().reveal('.description', {
    delay: 1500
  });
  ScrollReveal().reveal('.header-nav', {
    delay: 2800
  });
  ScrollReveal().reveal('#contact-me', {
    delay: 500
  });
  ScrollReveal().reveal('.contact-links', {
    delay: 500
  });
  ScrollReveal().reveal('#madeby', {
    delay: 500
  });
  $('#currentYear').text(setCurrentYear());
  handelbarsStatements();
  animationsStatements();
  setTimeout(function () {
    handelbarsSkills();
    animationsSkills();
  }, 3500);
  setTimeout(function () {
    handelbarsProjects();
    animationsProjects();
  }, 3500);
  $("#goSkills").click(function () {
    var aid = $(this).attr("href");
    $('html,body').animate({
      scrollTop: $(aid).offset().top
    }, 'slow');
  });
  $("#goProjects").click(function () {
    var aid = $(this).attr("href");
    $('html,body').animate({
      scrollTop: $(aid).offset().top
    }, 'slow');
  });
  $("#goToProjects").click(function () {
    var aid = $(this).attr("href");
    $('html,body').animate({
      scrollTop: $(aid).offset().top
    }, 'slow');
  });
  $("#goContacts").click(function () {
    var aid = $(this).attr("href");
    $('html,body').animate({
      scrollTop: $(aid).offset().top
    }, 'slow');
  }); // FUNZIONI UTILIZZATE

  function setCurrentYear() {
    // returns the current year
    return new Date().getFullYear();
  }

  function textTerminal(variable, name) {
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

  function handelbarsStatements() {
    // populates the statements html thanks to handlebars
    // array of statements
    var dataStatements = [{
      "id": "location",
      "input": "> Gianluigi.currentLocation",
      "response": "Palermo, IT"
    }, {
      "id": "des-location",
      "input": "> Gianluigi.desiredLocation",
      "response": "Milan, IT"
    }, {
      "id": "info",
      "input": "> Gianluigi.contactInfo",
      "response": "[\"<a href=\"mailto:gianluigi.vitale12@gmail.com\">gianluigi.vitale12@gmail.com</a>\", \"<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.linkedin.com/in/gianluigi-vitale615\">LinkedIn</a>\", \"<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/GianluigiVitale\">GitHub</a>\"]"
    }, {
      "id": "resume",
      "input": "> Gianluigi.resume",
      "response": "[\"<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"assets/cv-it.pdf\">cv-IT.pdf</a>\", \"<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"assets/cv-en.pdf\">cv-EN.pdf</a>\"]"
    }, {
      "id": "interests",
      "input": "> Gianluigi.interests",
      "response": "[\"Coding\", \"Economics\", \"Reading\", \"Mechanics\"]"
    }, {
      "id": "education",
      "input": "> Gianluigi.education",
      "response": "[\"Boolean Careers\", \"Liceo Scientifico S.Cannizzaro\"]"
    }]; // handlebars template with data

    for (var key in dataStatements) {
      var statement = dataStatements[key];
      var dataStatement = {
        "id": statement.id,
        "input": statement.input,
        "response": statement.response
      };
      var htmlStatement = templateStatement(dataStatement);
      $('.statement-added').append(htmlStatement);
    }
  }

  function animationsStatements() {
    // display animation for the statements div
    ScrollReveal().reveal('.terminal', {
      delay: 3000
    });
    ScrollReveal().reveal('#location', {
      delay: 200
    });
    ScrollReveal().reveal('#des-location', {
      delay: 100
    });
    ScrollReveal().reveal('#info', {
      delay: 100
    });
    ScrollReveal().reveal('#resume', {
      delay: 100
    });
    ScrollReveal().reveal('#interests', {
      delay: 100
    });
    ScrollReveal().reveal('#education', {
      delay: 100
    });
    ScrollReveal().reveal('#statement-terminal', {
      delay: 100
    });
  }

  function handelbarsSkills() {
    // populates the skills html thanks to handlebars
    // array of skills
    var dataSkills = [{
      "id": "html",
      "pathSkill": "assets/skills/html.png",
      "altSkill": "html/css",
      "textSkill": "HTML5, CSS3"
    }, {
      "id": "js-jquery",
      "pathSkill": "assets/skills/js-jquery.png",
      "altSkill": "js/jquery",
      "textSkill": "JavaScript, jQuery"
    }, {
      "id": "vuejs",
      "pathSkill": "assets/skills/vuejs.png",
      "altSkill": "vuejs",
      "textSkill": "VueJS"
    }, {
      "id": "php",
      "pathSkill": "assets/skills/php.svg",
      "altSkill": "php",
      "textSkill": "PHP"
    }, {
      "id": "laravel",
      "pathSkill": "assets/skills/laravel.png",
      "altSkill": "laravel",
      "textSkill": "Laravel"
    }, {
      "id": "mysql",
      "pathSkill": "assets/skills/mysql.png",
      "altSkill": "mysql",
      "textSkill": "MySQL, SQL"
    }]; // handlebars template with data

    for (var key in dataSkills) {
      var skill = dataSkills[key];
      var dataSkill = {
        "id": skill.id,
        "pathSkill": skill.pathSkill,
        "altSkill": skill.altSkill,
        "textSkill": skill.textSkill
      };
      var htmlSkill = templateSkill(dataSkill);
      $('.skills-icon').append(htmlSkill);
    }
  }

  function animationsSkills() {
    // display animations for the skills div
    ScrollReveal().reveal('#title-project', {
      delay: 300
    });
    ScrollReveal().reveal('.skills', {
      delay: 300
    });
    ScrollReveal().reveal('.skills-icon', {
      delay: 300
    });
    ScrollReveal().reveal('#html', {
      delay: 400
    });
    ScrollReveal().reveal('#js-jquery', {
      delay: 500
    });
    ScrollReveal().reveal('#vuejs', {
      delay: 600
    });
    ScrollReveal().reveal('#php', {
      delay: 700
    });
    ScrollReveal().reveal('#laravel', {
      delay: 800
    });
    ScrollReveal().reveal('#mysql', {
      delay: 900
    });
  }

  function handelbarsProjects() {
    // populates the projects html thanks to handlebars
    // array of projects
    var dataProjects = [{
      "id": "boolbnb",
      "video": "assets/videos/1not-available.mp4",
      "title": "BoolBnB",
      "description": "Realization of a complex Web application inspired by Airbnb, formed by Backend (Multi-auth Users and Roles, Payment Provider Integration and Geolocation API) and responsive Frontend interface.",
      "skills": "<span class='project-skill'>HTML5</span><span class='project-skill'>SCSS</span><span class='project-skill'>JavaScript</span><span class='project-skill'>jQuery</span><span class='project-skill'>PHP</span><span class='project-skill'>Laravel</span><span class='project-skill'>MySQL</span>",
      "liveDisplay": "none",
      "linkLive": "https://github.com/GianluigiVitale/BoolBnB",
      "linkGitHub": "https://github.com/GianluigiVitale/BoolBnB"
    }, {
      "id": "boolzap",
      "video": "assets/videos/2boolzap.mp4",
      "title": "BoolZap",
      "description": "Project inspired by WhatsApp Web. You can send messages to different contacts and after one second he/she will reply with a random funny message. The site supports mobile, tablet, and desktop sizes.",
      "skills": "<span class='project-skill'>HTML5</span><span class='project-skill'>CSS3</span><span class='project-skill'>JavaScript</span><span class='project-skill'>jQuery</span><span class='project-skill'>Handlebars</span>",
      "liveDisplay": "flex",
      "linkLive": "https://gianluigivitale.github.io/js-html-css-boolzap/",
      "linkGitHub": "https://github.com/GianluigiVitale/js-html-css-boolzap"
    }, {
      "id": "teambit",
      "video": "assets/videos/3teambit.mp4",
      "title": "Teambit",
      "description": "Complete replica of the landing page of teambit.io. Everything has been replicated such as the hamburger menu as well as the window of the live chat. The site supports mobile, tablet, and desktop sizes.",
      "skills": "<span class='project-skill'>HTML5</span><span class='project-skill'>SCSS</span><span class='project-skill'>JavaScript</span><span class='project-skill'>jQuery</span>",
      "liveDisplay": "flex",
      "linkLive": "https://gianluigivitale.github.io/node-sass-teambit/",
      "linkGitHub": "https://github.com/GianluigiVitale/node-sass-teambit"
    }, {
      "id": "boolflix",
      "video": "assets/videos/4boolflix.mp4",
      "title": "BoolFlix",
      "description": "Website to get informations about films/tv Series. For example, search ‘Star Wars’ and you will get all the films/tv Series that include ‘Star Wars’ in the title. The site supports mobile, tablet, and desktop sizes.",
      "skills": "<span class='project-skill'>HTML5</span><span class='project-skill'>CSS3</span><span class='project-skill'>JavaScript</span><span class='project-skill'>jQuery</span><span class='project-skill'>Handlebars</span>",
      "liveDisplay": "flex",
      "linkLive": "https://gianluigivitale.github.io/ajax-ex-boolflix/",
      "linkGitHub": "https://github.com/GianluigiVitale/ajax-ex-boolflix"
    }, {
      "id": "challenges",
      "video": "assets/videos/5php-challenges.mp4",
      "title": "100+ PHP Solved challenges",
      "description": "This repository contains my solutions of PHP challenges I solved from the website <a class=\"link\" target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.codewars.com/\">codewars.com</a> <br> I solved 166 challenges including JavaScript, ranking me 94th percentile.",
      "skills": "<span class='project-skill'>PHP</span>",
      "liveDisplay": "none",
      "linkLive": "https://github.com/GianluigiVitale/PHP-Challenges",
      "linkGitHub": "https://github.com/GianluigiVitale/PHP-Challenges"
    }, {
      "id": "calendar",
      "video": "assets/videos/6calendar.mp4",
      "title": "Calendar with Holidays",
      "description": "Calendar of 2018 with the holidays. The days of the month are generated thanks to MomentJS and Handlebars and with an ajax request the holidays are added. The site supports mobile, tablet, and desktop sizes.",
      "skills": "<span class='project-skill'>HTML5</span><span class='project-skill'>CSS3</span><span class='project-skill'>JavaScript</span><span class='project-skill'>jQuery</span><span class='project-skill'>MomentJS</span><span class='project-skill'>Handlebars</span>",
      "liveDisplay": "flex",
      "linkLive": "https://gianluigivitale.github.io/ajax-ex-calendar/",
      "linkGitHub": "https://github.com/GianluigiVitale/ajax-ex-calendar"
    }, {
      "id": "albums",
      "video": "assets/videos/7chartbool.mp4",
      "title": "ChartBool",
      "description": "Dashboard of a company's Key Performance Indicator. The data are taken from an API whereas the charts are made with ChartJS. It is possible to add a sale by selecting the salesman, the month and the amount.",
      "skills": "<span class='project-skill'>HTML5</span><span class='project-skill'>CSS3</span><span class='project-skill'>JavaScript</span><span class='project-skill'>jQuery</span><span class='project-skill'>Handlebars</span>",
      "liveDisplay": "none",
      "linkLive": "https://github.com/GianluigiVitale/rest-chartbool",
      "linkGitHub": "https://github.com/GianluigiVitale/rest-chartbool"
    }, {
      "id": "minefield",
      "video": "assets/videos/8dischi.mp4",
      "title": "Albums",
      "description": "Website to show the infos of different albums taken from an API. It is possible to filter the songs by genre. The site supports mobile, tablet, and desktop sizes.",
      "skills": "<span class='project-skill'>HTML5</span><span class='project-skill'>SCSS</span><span class='project-skill'>JavaScript</span><span class='project-skill'>jQuery</span><span class='project-skill'>Handlebars</span><span class='project-skill'>PHP</span>",
      "liveDisplay": "none",
      "linkLive": "https://github.com/GianluigiVitale/php-ajax-dischi",
      "linkGitHub": "https://github.com/GianluigiVitale/php-ajax-dischi"
    }, {
      "id": "digital",
      "video": "assets/videos/9campominato.mp4",
      "title": "Minefield",
      "description": "Game to test your luck! <br> The computer generates 16 random numbers from 1 to 100. The user enters one number at a time between 1 to 100. If the number is present in the list of generated numbers, the game ends, otherwise the game continues by asking the user for another number. The game ends when the player enters a \"forbidden\" number or reaches the maximum possible numbers of numbers allowed. At the end of the match the software communicates the score, i.e. the number of times that the user has entered an allowed number. The user can also select the difficulty that determines the maximum number.",
      "skills": "<span class='project-skill'>JavaScript</span><span class='project-skill'>jQuery</span>",
      "liveDisplay": "flex",
      "linkLive": "https://gianluigivitale.github.io/js-campominato/",
      "linkGitHub": "https://github.com/GianluigiVitale/js-campominato"
    }, {
      "video": "assets/videos/10digitalocean.mp4",
      "title": "Digital Ocean",
      "description": "Replica of the landing page of DigitalOcean, made with Bootstrap. The site supports mobile, tablet, and desktop sizes.",
      "skills": "<span class='project-skill'>HTML5</span><span class='project-skill'>CSS3</span>",
      "liveDisplay": "flex",
      "linkLive": "https://gianluigivitale.github.io/html-css-digitalocean/",
      "linkGitHub": "https://github.com/GianluigiVitale/html-css-digitalocean"
    }]; // handlebars template with data

    for (var i = 0; i < dataProjects.length; i++) {
      var project = dataProjects[i];
      var dataSkill = {
        "id": project.id,
        "video": project.video,
        "title": project.title,
        "description": project.description,
        "skills": project.skills,
        "liveDisplay": project.liveDisplay,
        "linkLive": project.linkLive,
        "linkGitHub": project.linkGitHub
      };
      var htmlProject = templateProject(dataSkill);
      $('.project-container').append(htmlProject);
    }
  }

  function animationsProjects() {
    // display animations for the projects div
    ScrollReveal().reveal('#boolbnb', {
      delay: 300
    });
    ScrollReveal().reveal('#boolzap', {
      delay: 300
    });
    ScrollReveal().reveal('#teambit', {
      delay: 300
    });
    ScrollReveal().reveal('#boolflix', {
      delay: 300
    });
    ScrollReveal().reveal('#challenges', {
      delay: 300
    });
    ScrollReveal().reveal('#calendar', {
      delay: 300
    });
    ScrollReveal().reveal('#chartbool', {
      delay: 300
    });
    ScrollReveal().reveal('#albums', {
      delay: 300
    });
    ScrollReveal().reveal('#minefield', {
      delay: 300
    });
    ScrollReveal().reveal('#digital', {
      delay: 300
    });
  }
});

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/js/main.js ./src/css/style.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\Users\Gianluigi\Desktop\BooleanLezioniEdEsercizi\portfolio\portfolio\src\js\main.js */"./src/js/main.js");
module.exports = __webpack_require__(/*! D:\Users\Gianluigi\Desktop\BooleanLezioniEdEsercizi\portfolio\portfolio\src\css\style.scss */"./src/css/style.scss");


/***/ })

/******/ });