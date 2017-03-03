/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	var projects = document.querySelector('.projects'),
	    svgContainer = document.querySelector('.svgContainer'),
	    derevo = document.getElementById('derevo'), // used in another file
	    galleryMenuCategories = document.querySelector('.galleryMenuCategories'),
	    titleGalleryDivision = document.querySelectorAll('.titleGalleryDivision'),
	    mainContent = document.querySelector('.mainContent'),
	    mainContentChildren = mainContent.children;


	/* I check if mainContent children have class 'visible'  - I remove class 'visible'. */
	function hideMainContentChildren() {
	    for (var i = 0; i < mainContentChildren.length; i++) {
	        if (mainContentChildren[i].classList.contains('visible')) {
	            mainContentChildren[i].classList.remove('visible');
	        }
	    }
	}

	function changeTextColor(color) {
	    logo.style.color = color;
	    titleGalleryDivision.forEach(function (elem) {
	        elem.style.color = color;
	    });
	    navigationLinks.forEach(function (elem) {
	        elem.style.color = color;
	    });
	    linkGalleryCategory.forEach(function (elem) {
	        elem.style.color = color;
	    });

	    if (color === 'white') {
	        navMenuImg1.style.backgroundImage = 'url(../image/menu_img_white.png)';
	        navMenuImg2.style.backgroundImage = 'url(../image/menu_img_white.png)';
	        navMenuImg3.style.backgroundImage = 'url(../image/menu_img_white.png)';
	    }
	    else if (color === 'black') {
	        navMenuImg1.style.backgroundImage = 'url(../image/menu_img_black.png)';
	        navMenuImg2.style.backgroundImage = 'url(../image/menu_img_black.png)';
	        navMenuImg3.style.backgroundImage = 'url(../image/menu_img_black.png)';
	    }
	}


	function hideElement(element) {
	    if (element.classList.contains('visible')) {
	        element.classList.remove('visible');
	    }
	    else {
	        element.classList.add('hide');

	    }
	}


	function showElement(element) {
	    if (element.classList.contains('hide')) {
	        element.classList.remove('hide');

	    }
	    else {
	        element.classList.add('visible');

	    }
	}

	//Functions open and hide main gallery categories menu
	function hideMainCategories() {

	    if (svgContainer.classList.contains('visible') || galleryMenuCategories.classList.contains('visible')) {
	        svgContainer.classList.remove('visible');
	        galleryMenuCategories.classList.remove('visible');
	    }
	}


	function openMainCategories() {
	    body.style.backgroundImage = 'url(../image/background_main_page.png)';
	    if (svgContainer.classList.contains('hide') || galleryMenuCategories.classList.contains('hide')) {
	        svgContainer.classList.remove('hide');
	        galleryMenuCategories.classList.remove('hide');
	        svgContainer.classList.add('visible');
	        galleryMenuCategories.classList.add('visible');
	    }
	    else {
	        svgContainer.classList.add('visible');
	        galleryMenuCategories.classList.add('visible');
	    }
	}


	// On css animation
	// var svgContainer = document.querySelector('.svgContainer');
	svgContainer.style.overflow = 'hidden';
	var navigation = document.querySelector('.navigation');
	navigation.style.animation = 'showNavBarMenu 4.5s';
	var logoName = document.querySelector('.logo_name');
	logoName.style.animation = 'appearanceLogo 3s';
	var gallerySubcategoryDesign = document.querySelector('#design');
	gallerySubcategoryDesign.style.animation = 'moveDesignLink 4.1s';
	var gallerySubcategoryPainting = document.querySelector('#painting');
	gallerySubcategoryPainting.style.animation = 'movePaintingLink 3.3s';
	var gallerySubcategoryGraphic = document.querySelector('#graphic');
	gallerySubcategoryGraphic.style.animation = 'moveGraphicLink 4.4s';
	var gallerySubcategoryDigitalArt = document.querySelector('#digitalArt');
	gallerySubcategoryDigitalArt.style.animation = 'moveDigitalArtLink 4.2s';
	var gallerySubcategoryOthers = document.querySelector('#others');
	gallerySubcategoryOthers.style.animation = 'moveOthersLink 5s';
	var gallerySubcategory3d = document.querySelector('#_3d');
	gallerySubcategory3d.style.animation = 'move3dLink 4.7s';
	// var derevo = document.querySelector('#derevo');
	derevo.style.animation = 'derevoZoom 2s';




	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"source/loadComponents/mainComponent.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"source/loadComponents/addImgs.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"source/loadComponents/buttons.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"source/js/digitalArt/loadDigitalArtContent.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(1)()
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"source/js/states.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"source/js/projects.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"source/js/animation/animationNavBar.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./animation/animationNavBar": 2,
		"./animation/animationNavBar.js": 2,
		"./animation/animationOnLoadPage": 3,
		"./animation/animationOnLoadPage.js": 3,
		"./digitalArt/loadDigitalArtContent": 4,
		"./digitalArt/loadDigitalArtContent.js": 4,
		"./loadComponents/addImg": 5,
		"./loadComponents/addImg.js": 5,
		"./loadComponents/buttons": 6,
		"./loadComponents/buttons.js": 6,
		"./loadComponents/mainComponent": 7,
		"./loadComponents/mainComponent.js": 7,
		"./painting/loadPaintingContent": 8,
		"./painting/loadPaintingContent.js": 8,
		"./projects": 9,
		"./projects.js": 9,
		"./states": 10,
		"./states.js": 10
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports) {

	var menuIcon = document.getElementById('menuIcon'),
	    logo = document.querySelector('.logo_name'),
	    navigationLinks = document.querySelectorAll('.navLinks'),
	    navMenuImg1 = document.getElementById('menu_img1'),
	    navMenuImg2 = document.getElementById('menu_img2'),
	    navMenuImg3 = document.getElementById('menu_img3'),
	    linkGalleryCategory = document.querySelectorAll('titleGalleryCategory'),



	    navBar = document.querySelector('#navList');

	//Navigation menu
	menuIcon.addEventListener('click', function () {
	    var style = window.getComputedStyle(navBar);
	    if (style.visibility === 'hidden') {
	        navBar.style.visibility = 'visible';
	        navMenuImg1.style.animation = 'rotateImg1 0.3s';
	        navMenuImg1.style.transform = 'rotate(40deg)';
	        navMenuImg1.style.marginTop = '17px';
	        navMenuImg2.style.display = 'none';
	        navMenuImg3.style.animation = 'rotateImg3 0.3s';
	        navMenuImg3.style.transform = 'rotate(-40deg)';
	        navMenuImg3.style.marginTop = '-10px';
	    }
	    else {
	        navBar.style.visibility = 'hidden';
	        navMenuImg1.style.animation = 'backRotateImg1 0.3s';
	        navMenuImg1.style.transform = 'rotate(0deg)';
	        navMenuImg1.style.marginTop = '0';
	        var showImg2 = delay(show,200);
	        showImg2(navMenuImg2);
	        function show(navMenuImg2) {
	            navMenuImg2.style.display = 'flex';
	        }
	        navMenuImg3.style.animation = 'backRotateImg3 0.3s';
	        navMenuImg3.style.transform = 'rotate(0deg)';
	        navMenuImg3.style.marginTop = '0';
	    }
	});


	function delay(show, ms) {

	    return function() {
	        var savedThis = this;
	        var savedArgs = arguments;

	        setTimeout(function() {
	            show.apply(savedThis, savedArgs);
	        }, ms);
	    };

	}

	/**
	 * Function closeNavBarMenu, when navBar open and pages switch
	 */
	function closeNavBarMenu() {
	    if (navBar.style.visibility === 'visible') {
	        menuIcon.click();
	    }
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	// function OnLoadAnimation() {
	//
	//     var str0 = derevo.querySelectorAll('.str0'),
	//         str1 = derevo.querySelectorAll('.str1'),
	//         body = document.body;
	//     //
	//     // function changeColor(color) {
	//     //     str0.forEach(function (str) {
	//     //         str.style.fill = color;
	//     //     });
	//     //     str1.forEach(function (str) {
	//     //         str.style.stroke = color;
	//     //     });
	//     // }
	//
	//     function getRandomColor() {
	//         var letters = '0123456789ABCDEF';
	//         var color = '#';
	//         for (var i = 0; i < 6; i++) {
	//             color += letters[Math.floor(Math.random() * 16)];
	//         }
	//         return color;
	//     }
	//
	//     var blendModes = [
	//         "normal",
	//         "multiply",
	//         "screen",
	//         "overlay",
	//         "darken",
	//         "lighten",
	//         "color-dodge",
	//         "color-burn",
	//         "hard-light",
	//         "soft-light",
	//         "difference",
	//         "exclusion",
	//         "hue",
	//         "saturation",
	//         "color",
	//         "luminosity"
	//     ];
	//
	//     function bodyBlendMode() {
	//         var mode = blendModes[Math.floor(Math.random() * blendModes.length)];
	//         body.style.backgroundBlendMode = mode;
	//         body.style.backgroundColor = getRandomColor();
	//     }
	//
	//     var self = this;
	//     //
	//     // this.epilepsy = epilepsy;
	//
	//     self.epilepsy = function (time) {
	//         setInterval(function () {
	//             changeColor(getRandomColor());
	//             bodyBlendMode();
	//         }, time);
	//     };
	//
	// //Twinkle background and tree
	//     this.stopEpilepsyAnimation = function (time) {
	//         setTimeout(function () {
	//
	//             clearInterval(self.epilepsy);
	//
	//             bodyBlendMode();
	//             body.style.backgroundColor = 'black';
	//             body.style.backgroundBlendMode = 'normal';
	//             document.querySelector('.svgContainer').style.overflow = 'auto';
	//
	//             changeColor('#fff');
	//
	//
	//         }, time);
	//     }
	//
	// }
	// var onLoadAnimation = new OnLoadAnimation();

	// onLoadAnimation.epilepsy(100);

	// onLoadAnimation.stopEpilepsyAnimation(1000);





	console.log('bo')


/***/ },
/* 4 */
/***/ function(module, exports) {

	var categoryDigitalArt = document.getElementById('categoryDigitalArt'), //To this category I want to add project imgs
	    projects = categoryDigitalArt.querySelectorAll('.project'); //List projects

	parseData(loadContent, "json_files/digital_art.json");

	function loadContent(JSONObject) {
	    projects.forEach(function (parent) {
	        injectImages(JSONObject, parent);
	    });
	}








/***/ },
/* 5 */
/***/ function(module, exports) {

	function addImg(className, elementValue, parent) { // Function create img covers

	    var img = document.createElement('IMG');
	    img.setAttribute('src', elementValue);

	    var containerForImg = document.createElement('A');
	    if (className === 'smallImg') {
	        containerForImg.classList.add('prevImg');
	    }
	    containerForImg.classList.add(className);

	    containerForImg.appendChild(img);

	    parent.appendChild(containerForImg);

	    addCloseButton(parent);
	    addOpenButton(parent);
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	
	function addCloseButton(project) {

	    var children = project.childNodes;
	    for (var indexChildren = 0; indexChildren < children.length; indexChildren++) {
	        var imgs = [];
	        var child = children[indexChildren];
	        if (child.nodeType == 1) {
	            imgs.push(child)
	        }
	    }
	    var button = document.createElement('div');
	    button.classList.add('closeButton');
	    for (var indexImgs = 0; indexImgs < imgs.length; indexImgs++) {
	        imgs[indexImgs].append(button);
	    }
	}

	function addOpenButton(project) {

	    var children = project.childNodes;
	    for (var index = 0; index < children.length; index++) {
	        var imgs = [];
	        var child = children[index];
	        if (child.nodeType == 1) {
	            if (child.classList.contains('prevImg')) {
	                imgs.push(child)
	            }
	        }
	    }
	    var button = document.createElement('div');
	    button.classList.add('openButton');

	    for (var i = 0; i < imgs.length; i++) {
	        var img = imgs[i];
	        img.appendChild(button);
	    }
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	function parseData(loadProjects, path) {
	    var JSONObject;
	    var xmlhttp = new XMLHttpRequest();
	    xmlhttp.onreadystatechange = function () {
	        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	            JSONObject = JSON.parse(xmlhttp.responseText);
	            var self = this;

	            loadProjects.call(self, JSONObject);
	        }
	    };
	    xmlhttp.open("GET", path, true);
	    xmlhttp.send();
	}

	var index = 0;
	function injectImages(JSONObject, parent) { //Rename function

	    var project = JSONObject.projects[index++];
	    var id = project['id'];
	    var smallImg = project['small'];
	    var bigImgs = project['big'];

	    parent.setAttribute('id', id);

	    addImg('smallImg', smallImg, parent);

	    bigImgs.forEach(function (bigImg) {
	        addImg('bigImg', bigImg, parent);
	    })

	}


/***/ },
/* 8 */
/***/ function(module, exports) {

	

/***/ },
/* 9 */
/***/ function(module, exports) {

	var projectNavigation = {

	    open: function (cols, projectCol, projects, project) {

	        onceCol(cols, projectCol);

	        findImgs(projects, 'smallImg', hideElement);

	        findImgs(project, 'bigImg', showElement);
	    },

	    close: function (cols, projectCol, projects, project) {

	        var img = project.children[0].firstChild;
	        img.style.width = '100%';

	        threeCol(cols);

	        findImgs(projects, 'smallImg', showElement);

	        findImgs(project, 'bigImg', hideElement);
	    }
	};

	mainContent.addEventListener('click', function (event) {
	    var targetElement = event.target,
	        targetImg = targetElement.parentNode, //have class 'smallImg' or 'bigImg'
	        project = targetImg.parentNode,
	        prevImg = project.querySelector('.prevImg'),
	        closeButtonPrevImg = prevImg.querySelector('.closeButton'),
	        projectId = project.id,
	        projectCol = project.parentNode,
	        projects = projectCol.parentNode,
	        data = window.location.pathname,
	        img,
	        targetOpenButton,

	        cols = projects.querySelectorAll('.projectsCol');


	    if (targetElement.classList.contains('openButton')) {
	        img = targetImg.firstChild;
	        targetOpenButton = targetImg.querySelector('.openButton');

	        img.style.filter = '';

	        img.style.width = '97%';

	        projectNavigation.open(cols, projectCol, projects, project);

	        var targetPrevImg = project.children[0];
	        showElement(targetPrevImg);

	        targetOpenButton.style.display = 'none';
	        hideElement(targetOpenButton);

	        history.pushState('project' + projectId, null, '#' + projectId); // Add window location hash with number this project

	        var closeButtons = project.getElementsByClassName('closeButton');
	        for (var i = 0; i < closeButtons.length; i++) {
	            var button = closeButtons[i];
	            showElement(button);
	        }

	    } else if (targetElement.classList.contains('closeButton')) {

	        projectNavigation.close(cols, projectCol, projects, project, targetImg);
	        history.replaceState(data.slice(1), null, data);

	        hideElement(closeButtonPrevImg);
	    }
	});


	mainContent.addEventListener('mouseover', function (event) {
	    var element = event.target.parentNode;
	    if (element.classList.contains('prevImg') && element.firstChild.offsetWidth === 300) {
	        var img = element.firstChild;
	        img.style.filter = 'blur(2px)';
	        var openButton = element.querySelector('.openButton');
	        openButton.style.display = 'block';
	        showElement(openButton);
	    }
	});


	mainContent.addEventListener('mouseout', function (event) {
	    var element = event.target.parentNode;
	    var img = element.firstChild;

	    if (element.classList.contains('prevImg')) {
	        var openButton = element.querySelector('.openButton');
	        img.style.filter = '';
	        openButton.style.display = 'none';

	        hideElement(openButton);

	    }
	});


	function onceCol(cols, projectCol) {
	    cols.prototype = Object.create(Array.prototype);
	    cols.forEach(function (elem) {
	        if (projectCol === elem) {
	            elem.style.width = '98%';

	            var prevImgs = elem.querySelectorAll('.prevImg');
	            for(var i = 0; i<prevImgs.length; i++) {
	                if(!prevImgs[i].classList.contains('hide')){
	                    prevImgs[i].classList.add('hide');
	                }
	            }
	        }
	        else {
	            elem.style.width = 0;
	            elem.style.margin = 0;
	        }
	    });
	}

	function threeCol(cols) {
	    cols.forEach(function (elem) {
	        elem.style.width = '30%';
	        elem.style.margin = '20px 16px';
	    });
	}

	function findImgs(collectionProjectsTargetCategory, typeImg, operation) {

	    var desiredTypeImgs = collectionProjectsTargetCategory.getElementsByClassName(typeImg); //Collection
	    desiredTypeImgs.prototype = Object.create(Array.prototype); //Add Array prototype

	    for (var k = 0; k < desiredTypeImgs.length; k++) {
	        var desireTypeImg = desiredTypeImgs[k];
	        operation(desireTypeImg);
	    }
	}


	function closeButton(project, activity) {
	    var buttons = project.querySelectorAll('.closeButton');
	    buttons.forEach(function (elem) {
	        activity(elem);
	    })
	}



/***/ },
/* 10 */
/***/ function(module, exports) {

	/* Categories pages and contact and about me pages */


	var stateConfig = {
	    'design': {
	        color: 'white',
	        index: 1,
	        animation: 'designBg 0.2s',
	        bg: 'url(../image/gallery_background_design.png)'
	    },
	    'painting': {
	        color: 'white',
	        index: 0,
	        animation: 'paintingBg 0.2s',
	        bg: 'url(../image/gallery_background_painting.png)'
	    },
	    'graphic': {
	        color: 'white',
	        index: 2,
	        animation: 'graphicBg 0.2s',
	        bg: 'url(../image/gallery_background_graphic.png)'
	    },
	    'digitalArt': {
	        color: 'white',
	        index: 3,
	        animation: 'digitalArtBg 0.2s',
	        bg: 'url(../image/gallery_background_digital_art.png)'
	    },
	    'others': {
	        color: 'white',
	        index: 4,
	        animation: 'othersBg 0.2s',
	        bg: 'url(../image/gallery_background_others.png)'
	    },
	    '_3d': {
	        color: 'black',
	        index: 5,
	        animation: '_3dBg 0.2s',
	        bg: 'url(../image/gallery_background_3d.png)'
	    },
	    'aboutMe': {
	        color: 'white',
	        index: 6,
	        animation: 'aboutMeBg 0.2s',
	        bg: 'url(../image/gallery_background_about_me.png)'
	    },
	    'contacts': {
	        color: 'white',
	        index: 7,
	        animation: 'contactsBg 0.2s',
	        bg: 'url(../image/gallery_background_contacts.png)'
	    }

	};

	function State() {

	    var categoryDesign = document.getElementById('categoryDesign'),
	        categoryPainting = document.getElementById('categoryPainting'),
	        categoryGraphic = document.getElementById('categoryGraphic'),
	        categoryDigitalArt = document.getElementById('categoryDigitalArt'),
	        categoryOthers = document.getElementById('categoryOthers'),
	        category3d = document.getElementById('category3d'),
	        categoryAboutMe = document.getElementById('aboutMeInfo'),
	        categoryContacts = document.getElementById('contactsInfo');

	    /* Determine history state */
	    this.state = history.state;

	    /* Array categories page */
	    var categoriesPage = [categoryPainting, categoryDesign, categoryGraphic, categoryDigitalArt, categoryOthers, category3d, categoryAboutMe, categoryContacts];

	    /**
	     * Function paramToSwitchCategoriesContent
	     * @param {string} textColor //change text color on target page
	     * @param {number} categoriesPageIndex //index list category pages
	     * @param {string} animationName // css animation appearance body background to target page
	     * @param {string} bodyBgImg // after animation add necessary body background to target page
	     */
	    function paramToSwitchCategoriesContent(textColor, categoriesPageIndex, animationName, bodyBgImg) {

	        changeTextColor(textColor);
	        categoriesPage[categoriesPageIndex].classList.add('visible');
	        body.style.animation = animationName;
	        body.style.backgroundImage = bodyBgImg;

	    }

	    /**
	     * Function paramToSwitchOtherContent
	     * @param {string} textColor //change text color on target page
	     * @param {number} categoriesPageIndex //index list content pages
	     * @param {string} animationName // css animation appearance body background to target page
	     * @param {string} bodyBgImg // after animation add necessary body background to target page
	     */
	    function paramToSwitchOtherContent(textColor, categoriesPageIndex, animationName, bodyBgImg) {

	        changeTextColor(textColor);
	        hideMainContentChildren();
	        categoriesPage[categoriesPageIndex].classList.add('visible');
	        body.style.animation = animationName;
	        body.style.backgroundImage = bodyBgImg;

	    }

	    this.parameterSwitchPageContents = function (currentPath) {
	        switch (currentPath) {

	            case '/':
	                changeTextColor('white');
	                openMainCategories();
	                hideMainContentChildren();
	                body.style.backgroundImage = 'url(../image/background_main_page.png)';
	                break;

	            case '/design':
	                paramToSwitchCategoriesContent(stateConfig.design.color, stateConfig.design.index, stateConfig.design.animation, stateConfig.design.bg);
	                break;

	            case '/painting':
	                paramToSwitchCategoriesContent(stateConfig.painting.color, stateConfig.painting.index, stateConfig.painting.animation, stateConfig.painting.bg);
	                break;

	            case '/graphic':
	                paramToSwitchCategoriesContent(stateConfig.graphic.color, stateConfig.graphic.index, stateConfig.graphic.animation, stateConfig.graphic.bg);
	                break;

	            case  '/digitalArt':
	                paramToSwitchCategoriesContent(stateConfig.digitalArt.color, stateConfig.digitalArt.index, stateConfig.digitalArt.animation, stateConfig.digitalArt.bg);
	                break;

	            case  '/others':
	                paramToSwitchCategoriesContent(stateConfig.others.color, stateConfig.others.index, stateConfig.others.animation, stateConfig.others.bg);
	                break;

	            case  '/3d':
	                paramToSwitchCategoriesContent(stateConfig._3d.color, stateConfig._3d.index, stateConfig._3d.animation, stateConfig._3d.bg);
	                break;

	            case  '/aboutMe':
	                paramToSwitchOtherContent(stateConfig.aboutMe.color, stateConfig.aboutMe.index, stateConfig.aboutMe.animation, stateConfig.aboutMe.bg);
	                break;

	            case  '/contacts':
	                paramToSwitchOtherContent(stateConfig.contacts.color, stateConfig.contacts.index, stateConfig.contacts.animation, stateConfig.contacts.bg);
	                break;
	        }
	    }

	}
	var checkStates = new State();


	/* Change our States */
	if (checkStates.state === null && window.location.pathname === '/') {
	    history.pushState('home', null, '/');
	    hideMainContentChildren();
	}

	/* Listener to the click somewhere on body */
	document.querySelector('body').addEventListener('click', function (event) {

	    var target = event.target,
	        data = event.target.id;

	    switch (data) {
	        case 'home':
	        case 'home_page':
	            history.pushState('home', null, '/');
	            break;

	        case 'aboutMe':
	        case 'contacts':
	        case 'design':
	        case 'painting':
	        case 'graphic':
	        case 'digitalArt':
	        case 'others':
	            history.pushState(data, null, data);
	            break;

	        case '_3d':
	            history.pushState(data, null, '3d');
	            break;
	    }
	});

	/*
	 on popstate
	 navigation go() and back()
	 */


	var body = document.body;

	var eventCheckStateChanges = function (type) {
	    var orig = history[type];
	    return function () {
	        var rv = orig.apply(this, arguments);
	        var event = new Event(type);
	        event.arguments = arguments;
	        window.dispatchEvent(event);
	        return rv;
	    };
	};

	history.pushState = eventCheckStateChanges('pushState');

	history.replaceState = eventCheckStateChanges('replaceState');


	window.addEventListener('pushState', function (e) {
	    var currentPath = window.location.pathname;

	    closeNavBarMenu();

	    checkStates.parameterSwitchPageContents(currentPath);

	    if (currentPath !== '/') {
	        hideMainCategories();
	    }
	});


	window.addEventListener('replaceState', function (e) {
	    var currentPath = window.location.pathname;
	    closeNavBarMenu();
	    checkStates.parameterSwitchPageContents(currentPath);
	});


	window.onload = function () {
	    var currentPath = window.location.pathname;

	    closeNavBarMenu();
	    checkStates.parameterSwitchPageContents(currentPath);

	    if (window.location.hash !== '') {
	        var hash = window.location.hash.slice(1),
	            project = document.getElementById(hash), //project equal to hash
	            targetImg = project.querySelector('.prevImg'),
	            targetCol = project.parentNode,
	            projects = targetCol.parentNode,
	            cols = projects.querySelectorAll('.projectsCol');

	        projectNavigation.open(cols, targetCol, projects, project, targetImg);
	        showElement(targetImg);

	        var closeButtons = project.getElementsByClassName('closeButton');
	        for (var i = 0; i < closeButtons.length; i++) {
	            var button = closeButtons[i];
	            showElement(button);
	        }
	        var img = targetImg.firstChild;

	        img.style.width = '97%';
	    }
	};



/***/ }
/******/ ]);