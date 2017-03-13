/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mainComponent__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["a"] = setContent;


function setContent(JSONObject, projects) {

    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
        if (!project.children.length) {

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mainComponent__["b" /* injectImages */])(JSONObject.projects[i], project);
        }
    }
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loadComponents_mainComponent__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__design_setDesignContent__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["b"] = hideMainContentChildren;
/* harmony export (immutable) */ __webpack_exports__["e"] = hideElement;
/* harmony export (immutable) */ __webpack_exports__["d"] = showElement;
/* harmony export (immutable) */ __webpack_exports__["c"] = hideMainCategories;
/* harmony export (immutable) */ __webpack_exports__["a"] = openMainCategories;





// import {
//     logo,
//     navigationLinks,
//     linkGalleryCategory,
//     navMenuImg1,
//     navMenuImg2,
//     navMenuImg3
// } from './animation/animationNavBar';


const projects = document.querySelector('.projects'),
      svgContainer = document.querySelector('.svgContainer'),
      derevo = document.getElementById('derevo'),
      // used in another file
galleryMenuCategories = document.querySelector('.galleryMenuCategories'),
      titleGalleryDivision = document.querySelectorAll('.titleGalleryDivision'),
      mainContent = document.querySelector('.mainContent'),
      mainContentChildren = mainContent.children;

function hideMainContentChildren() {
    for (let i = 0; i < mainContentChildren.length; i++) {
        if (mainContentChildren[i].classList.contains('visible')) {
            mainContentChildren[i].classList.remove('visible');
        }
    }
}

function hideElement(element) {
    if (element.classList.contains('visible')) {
        element.classList.remove('visible');
    } else {
        element.classList.add('hide');
    }
}

function showElement(element) {
    if (element.classList.contains('hide')) {
        element.classList.remove('hide');
    } else {
        element.classList.add('visible');
    }
}

function hideMainCategories() {

    if (svgContainer.classList.contains('visible') || galleryMenuCategories.classList.contains('visible')) {
        svgContainer.classList.remove('visible');
        galleryMenuCategories.classList.remove('visible');
    }
}

function openMainCategories() {
    document.body.style.backgroundImage = 'url(../image/background_main_page.png)';
    if (svgContainer.classList.contains('hide') || galleryMenuCategories.classList.contains('hide')) {
        svgContainer.classList.remove('hide');
        galleryMenuCategories.classList.remove('hide');
        svgContainer.classList.add('visible');
        galleryMenuCategories.classList.add('visible');
    } else {
        svgContainer.classList.add('visible');
        galleryMenuCategories.classList.add('visible');
    }
}

// On css animation
// const svgContainer = document.querySelector('.svgContainer');
svgContainer.style.overflow = 'hidden';
const navigation = document.querySelector('.navigation');
navigation.style.animation = 'showNavBarMenu 4.5s';
const logoName = document.querySelector('.logo_name');
// logoName.style.animation = 'appearanceLogo 3s';
const gallerySubcategoryDesign = document.querySelector('#design');
gallerySubcategoryDesign.style.animation = 'moveDesignLink 4.1s';
const gallerySubcategoryPainting = document.querySelector('#painting');
gallerySubcategoryPainting.style.animation = 'movePaintingLink 3.3s';
const gallerySubcategoryGraphic = document.querySelector('#graphic');
gallerySubcategoryGraphic.style.animation = 'moveGraphicLink 4.4s';
const gallerySubcategoryDigitalArt = document.querySelector('#digitalArt');
gallerySubcategoryDigitalArt.style.animation = 'moveDigitalArtLink 4.2s';
const gallerySubcategoryOthers = document.querySelector('#others');
gallerySubcategoryOthers.style.animation = 'moveOthersLink 5s';
const gallerySubcategory3d = document.querySelector('#_3d');
gallerySubcategory3d.style.animation = 'move3dLink 4.7s';
// const derevo = document.querySelector('#derevo');
derevo.style.animation = 'derevoZoom 2s';

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = closeNavBarMenu;
/* harmony export (immutable) */ __webpack_exports__["a"] = changeTextColor;
const menuIcon = document.getElementById('menuIcon'),
      logo = document.querySelector('.logo_name'),
      navigationLinks = document.querySelectorAll('.navLinks'),
      navMenuImg1 = document.getElementById('menu_img1'),
      navMenuImg2 = document.getElementById('menu_img2'),
      navMenuImg3 = document.getElementById('menu_img3'),
      linkGalleryCategory = document.querySelectorAll('titleGalleryCategory'),
      navBar = document.querySelector('#navList');
/* unused harmony export navBar */

/* unused harmony export linkGalleryCategory */

/* unused harmony export navMenuImg3 */

/* unused harmony export navMenuImg2 */

/* unused harmony export navMenuImg1 */

/* unused harmony export navigationLinks */

/* unused harmony export logo */

/* unused harmony export menuIcon */


//Navigation menu
menuIcon.addEventListener('click', function () {
    const style = window.getComputedStyle(navBar);
    if (style.visibility === 'hidden') {
        navBar.style.visibility = 'visible';
        navMenuImg1.style.animation = 'rotateImg1 0.3s';
        navMenuImg1.style.transform = 'rotate(40deg)';
        navMenuImg1.style.marginTop = '17px';
        navMenuImg2.style.display = 'none';
        navMenuImg3.style.animation = 'rotateImg3 0.3s';
        navMenuImg3.style.transform = 'rotate(-40deg)';
        navMenuImg3.style.marginTop = '-10px';
    } else {
        navBar.style.visibility = 'hidden';
        navMenuImg1.style.animation = 'backRotateImg1 0.3s';
        navMenuImg1.style.transform = 'rotate(0deg)';
        navMenuImg1.style.marginTop = '0';
        const showImg2 = delay(show, 200);
        showImg2(navMenuImg2);

        navMenuImg3.style.animation = 'backRotateImg3 0.3s';
        navMenuImg3.style.transform = 'rotate(0deg)';
        navMenuImg3.style.marginTop = '0';
    }
});

function show(navMenuImg2) {
    navMenuImg2.style.display = 'flex';
}
function delay(show, ms) {

    return function () {
        const savedThis = this;
        const savedArgs = arguments;

        setTimeout(function () {
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

const titleGalleryDivision = document.querySelectorAll('.titleGalleryDivision');

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
    } else if (color === 'black') {
        navMenuImg1.style.backgroundImage = 'url(../image/menu_img_black.png)';
        navMenuImg2.style.backgroundImage = 'url(../image/menu_img_black.png)';
        navMenuImg3.style.backgroundImage = 'url(../image/menu_img_black.png)';
    }
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addImg__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buttons__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setContent__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = injectImages;
/* harmony export (immutable) */ __webpack_exports__["a"] = parseData;






function injectImages(project, parent) {
    //Rename function

    const id = project['id'];
    const smallImg = project['small'];
    const bigImgs = project['big'];
    // console.log(project.length)

    parent.setAttribute('id', id);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__addImg__["a" /* addImg */])('smallImg', smallImg, parent);

    bigImgs.forEach(function (bigImg) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__addImg__["a" /* addImg */])('bigImg', bigImg, parent);
    });
}

function parseData(loadProjects, path) {
    let JSONObject;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            JSONObject = JSON.parse(xhr.responseText);

            loadProjects(JSONObject);
            // console.log(JSONObject.projects.length)
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paramToSwitchCategoryContents__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stateConfig__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loadComponents_mainComponent__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animation_animationNavBar__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__design_setDesignContent__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__painting_setPaintingContent__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graphic_setGraphicContent__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__digitalArt_setDigitalArtContent__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__others_setOthersContent__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__3d_set3dContent__ = __webpack_require__(14);
/* harmony export (immutable) */ __webpack_exports__["a"] = paramToSwitchPageContents;














const body = document.body;

function paramToSwitchPageContents(currentPath) {
    switch (currentPath) {

        case '/':
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__animation_animationNavBar__["a" /* changeTextColor */])('white');
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__main__["a" /* openMainCategories */])();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__main__["b" /* hideMainContentChildren */])();
            body.style.backgroundImage = 'url(../image/backgrounds/main_page.png)';
            break;

        case '/design':
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__main__["c" /* hideMainCategories */])();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__loadComponents_mainComponent__["a" /* parseData */])(__WEBPACK_IMPORTED_MODULE_5__design_setDesignContent__["a" /* setDesignContent */], "json_files/design.json");
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__paramToSwitchCategoryContents__["a" /* paramToSwitchCategoryContents */])(__WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].design.color, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].design.index, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].design.animation, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].design.bg);
            break;

        case '/painting':
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__main__["c" /* hideMainCategories */])();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__paramToSwitchCategoryContents__["a" /* paramToSwitchCategoryContents */])(__WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].painting.color, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].painting.index, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].painting.animation, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].painting.bg);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__loadComponents_mainComponent__["a" /* parseData */])(__WEBPACK_IMPORTED_MODULE_6__painting_setPaintingContent__["a" /* setPaintingContent */], "json_files/painting.json");
            break;

        case '/graphic':
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__main__["c" /* hideMainCategories */])();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__paramToSwitchCategoryContents__["a" /* paramToSwitchCategoryContents */])(__WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].graphic.color, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].graphic.index, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].graphic.animation, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].graphic.bg);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__loadComponents_mainComponent__["a" /* parseData */])(__WEBPACK_IMPORTED_MODULE_7__graphic_setGraphicContent__["a" /* setGraphicContent */], "json_files/graphic.json");
            break;

        case '/digitalArt':
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__main__["c" /* hideMainCategories */])();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__paramToSwitchCategoryContents__["a" /* paramToSwitchCategoryContents */])(__WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].digitalArt.color, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].digitalArt.index, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].digitalArt.animation, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].digitalArt.bg);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__loadComponents_mainComponent__["a" /* parseData */])(__WEBPACK_IMPORTED_MODULE_8__digitalArt_setDigitalArtContent__["a" /* setDigitalArtContent */], "json_files/digital_art.json");
            break;

        case '/others':
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__main__["c" /* hideMainCategories */])();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__paramToSwitchCategoryContents__["a" /* paramToSwitchCategoryContents */])(__WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].others.color, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].others.index, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].others.animation, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].others.bg);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__loadComponents_mainComponent__["a" /* parseData */])(__WEBPACK_IMPORTED_MODULE_9__others_setOthersContent__["a" /* setOthersContent */], "json_files/others.json");
            break;

        case '/3d':
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__main__["c" /* hideMainCategories */])();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__paramToSwitchCategoryContents__["a" /* paramToSwitchCategoryContents */])(__WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */]._3d.color, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */]._3d.index, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */]._3d.animation, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */]._3d.bg);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__loadComponents_mainComponent__["a" /* parseData */])(__WEBPACK_IMPORTED_MODULE_10__3d_set3dContent__["a" /* set3dContent */], "json_files/3d.json");
            break;

        case '/aboutMe':
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__main__["c" /* hideMainCategories */])();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__paramToSwitchCategoryContents__["b" /* paramToSwitchOtherContent */])(__WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].aboutMe.color, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].aboutMe.index, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].aboutMe.animation, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].aboutMe.bg);
            break;

        case '/contacts':
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__main__["c" /* hideMainCategories */])();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__paramToSwitchCategoryContents__["b" /* paramToSwitchOtherContent */])(__WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].contacts.color, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].contacts.index, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].contacts.animation, __WEBPACK_IMPORTED_MODULE_2__stateConfig__["a" /* stateConfig */].contacts.bg);
            break;
    }
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loadComponents_setContent__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = setDesignContent;


function setDesignContent(JSONObject) {

    const categoryDesign = document.getElementById('categoryDesign'),
          projectsNode = categoryDesign.querySelectorAll('.project');

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__loadComponents_setContent__["a" /* setContent */])(JSONObject, projectsNode);
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buttons__ = __webpack_require__(7);
/* harmony export (immutable) */ __webpack_exports__["a"] = addImg;


function addImg(className, elementValue, parent) {
    // Function create img covers

    const img = document.createElement('IMG');

    img.setAttribute('src', elementValue);

    const containerForImg = document.createElement('DIV');

    switch (className) {
        case 'smallImg':
            containerForImg.classList.add('prevImg');
            break;
        case 'bigImg':
            containerForImg.classList.add('bigImg');
            break;
    }

    // containerForImg.classList.add(className);

    containerForImg.appendChild(img);

    parent.appendChild(containerForImg);
    //
    // addCloseButton(parent);
    // addOpenButton(parent);
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export addCloseButton */
/* unused harmony export addOpenButton */

function addCloseButton(project) {

    const children = project.childNodes;
    const imgs = [];

    for (let indexChildren = 0; indexChildren < children.length; indexChildren++) {
        const child = children[indexChildren];
        if (child.nodeType == 1) {
            imgs.push(child);
        }
    }
    const button = document.createElement('div');
    button.classList.add('closeButton');
    for (let indexImgs = 0; indexImgs < imgs.length; indexImgs++) {
        imgs[indexImgs].append(button);
    }
}

function addOpenButton(project) {

    const children = project.childNodes;
    const imgs = [];

    for (let index = 0; index < children.length; index++) {
        const imgs = [];
        const child = children[index];
        if (child.nodeType == 1) {
            if (child.classList.contains('prevImg')) {
                imgs.push(child);
            }
        }
    }
    const button = document.createElement('div');
    button.classList.add('openButton');

    for (let i = 0; i < imgs.length; i++) {
        const img = imgs[i];
        img.appendChild(button);
    }
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export categoryDesign */
/* unused harmony export categoryPainting */
/* unused harmony export categoryGraphic */
/* unused harmony export categoryDigitalArt */
/* unused harmony export categoryOthers */
/* unused harmony export category3d */
/* unused harmony export categoryAboutMe */
/* unused harmony export categoryContacts */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return categoriesPage; });
const categoryDesign = document.getElementById('categoryDesign'),
      categoryPainting = document.getElementById('categoryPainting'),
      categoryGraphic = document.getElementById('categoryGraphic'),
      categoryDigitalArt = document.getElementById('categoryDigitalArt'),
      categoryOthers = document.getElementById('categoryOthers'),
      category3d = document.getElementById('category3d'),
      categoryAboutMe = document.getElementById('aboutMeInfo'),
      categoryContacts = document.getElementById('contactsInfo');

const categoriesPage = [categoryPainting, categoryDesign, categoryGraphic, categoryDigitalArt, categoryOthers, category3d, categoryAboutMe, categoryContacts];



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__categories__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animation_animationNavBar__ = __webpack_require__(2);
/* harmony export (immutable) */ __webpack_exports__["a"] = paramToSwitchCategoryContents;
/* harmony export (immutable) */ __webpack_exports__["b"] = paramToSwitchOtherContent;





const body = document.body;

function paramToSwitchCategoryContents(textColor, categoriesPageIndex, animationName, bodyBgImg) {

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animation_animationNavBar__["a" /* changeTextColor */])(textColor);
    __WEBPACK_IMPORTED_MODULE_1__categories__["a" /* categoriesPage */][categoriesPageIndex].classList.add('visible');
    body.style.animation = animationName;
    body.style.backgroundImage = bodyBgImg;
}

function paramToSwitchOtherContent(textColor, categoriesPageIndex, animationName, bodyBgImg) {

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animation_animationNavBar__["a" /* changeTextColor */])(textColor);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__main__["b" /* hideMainContentChildren */])();
    __WEBPACK_IMPORTED_MODULE_1__categories__["a" /* categoriesPage */][categoriesPageIndex].classList.add('visible');
    body.style.animation = animationName;
    body.style.backgroundImage = bodyBgImg;
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const stateConfig = {
    'design': {
        color: 'black',
        index: 1,
        animation: 'designBg 0.2s',
        bg: 'url(../image/backgrounds/gallery_design.jpg)'
    },
    'painting': {
        color: 'white',
        index: 0,
        animation: 'paintingBg 0.2s',
        bg: 'url(../image/backgrounds/gallery_painting.png)'
    },
    'graphic': {
        color: 'white',
        index: 2,
        animation: 'graphicBg 0.2s',
        bg: 'url(../image/backgrounds/gallery_graphic.png)'
    },
    'digitalArt': {
        color: 'white',
        index: 3,
        animation: 'digitalArtBg 0.2s',
        bg: 'url(../image/backgrounds/gallery_digital_art.png)'
    },
    'others': {
        color: 'white',
        index: 4,
        animation: 'othersBg 0.2s',
        bg: 'url(../image/backgrounds/gallery_others.png)'
    },
    '_3d': {
        color: 'black',
        index: 5,
        animation: '_3dBg 0.2s',
        bg: 'url(../image/backgrounds/gallery_3d.png)'
    },
    'aboutMe': {
        color: 'white',
        index: 6,
        animation: 'aboutMeBg 0.2s',
        bg: 'url(../image/backgrounds/about_me.png)'
    },
    'contacts': {
        color: 'white',
        index: 7,
        animation: 'contactsBg 0.2s',
        bg: 'url(../image/backgrounds/contacts.png)'
    }

};
/* harmony export (immutable) */ __webpack_exports__["a"] = stateConfig;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animationNavBar__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animationOnLoadPage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animationOnLoadPage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__animationOnLoadPage__);



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(1);


const projectNavigation = {
    open(cols, projectCol, projects, project) {
        const body = document.body;

        onceCol(cols, projectCol);
        console.log(window.scrollTop);

        findImgs(projects, 'prevImg', __WEBPACK_IMPORTED_MODULE_0__main__["e" /* hideElement */]);

        findImgs(project, 'bigImg', __WEBPACK_IMPORTED_MODULE_0__main__["d" /* showElement */]);
    },

    close(cols, projectCol, projects, project) {

        const img = project.children[0].firstChild;
        // img.style.width = '100%';

        threeCol(cols);

        findImgs(projects, 'prevImg', __WEBPACK_IMPORTED_MODULE_0__main__["d" /* showElement */]);

        findImgs(project, 'bigImg', __WEBPACK_IMPORTED_MODULE_0__main__["e" /* hideElement */]);
    }
};
/* unused harmony export projectNavigation */


const mainContent = document.querySelector('.mainContent');

mainContent.addEventListener('click', function (event) {
    const targetElement = event.target,
          targetImg = targetElement.parentNode,
          //have class 'smallImg' or 'bigImg'
    project = targetImg.parentNode,
          prevImg = project.querySelector('.prevImg'),

    // closeButtonPrevImg = prevImg.querySelector('.closeButton'),
    projectId = project.id,
          projectCol = project.parentNode,
          projects = projectCol.parentNode,
          data = window.location.pathname,
          cols = projects.querySelectorAll('.projectsCol');

    if (targetImg.classList.contains('prevImg')) {
        const img = targetImg.firstChild;

        projectNavigation.open(cols, projectCol, projects, project);

        const targetPrevImg = project.children[0];
        // showElement(targetPrevImg);

        // targetOpenButton.style.display = 'none';
        // hideElement(targetOpenButton);

        history.pushState('project' + projectId, null, '#' + projectId); // Add window location hash with number this project

        const closeButtons = project.getElementsByClassName('closeButton');
        for (let i = 0; i < closeButtons.length; i++) {
            const button = closeButtons[i];
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__main__["d" /* showElement */])(button);
        }
    } else if (targetImg.classList.contains('bigImg')) {

        projectNavigation.close(cols, projectCol, projects, project, targetImg);
        history.replaceState(data.slice(1), null, data);

        // hideElement(closeButtonPrevImg);
    }
});

mainContent.addEventListener('mouseover', function (event) {
    const element = event.target.parentNode;

    if (element.classList.contains('prevImg')) {
        const img = element.firstChild;
        // img.style.opacity = '1';
        element.style.border = '2px solid black';

        // console.log('prev Img')
        // element.style.cursor = "url(../image/open.png),auto";

        // const openButton = element.querySelector('.openButton');
        // openButton.style.display = 'block';
        // showElement(openButton);
    } else if (element.classList.contains('bigImg')) {
        const img = element.firstChild;
        // console.log('big Img')
        element.style.border = '2px solid black';

        // element.style.cursor = "url(../image/close.png),auto";
    }
});

mainContent.addEventListener('mouseout', function (event) {
    const element = event.target.parentNode;
    const img = element.firstChild;

    if (element.classList.contains('prevImg')) {
        // img.style.opacity = '0.6';
        element.style.border = '2px solid white';
        // element.style.cursor = "auto";
    } else if (element.classList.contains('bigImg')) {
        // console.log('move out big Img');
        // img.style.filter = '';
        // element.style.cursor = "auto";
        element.style.border = '2px solid white';
    }
});

function onceCol(cols, projectCol) {
    cols.prototype = Object.create(Array.prototype);
    cols.forEach(function (elem) {
        if (projectCol === elem) {
            elem.style.width = '98%';

            const prevImgs = elem.querySelectorAll('.prevImg');
            for (let i = 0; i < prevImgs.length; i++) {
                if (!prevImgs[i].classList.contains('hide')) {
                    prevImgs[i].classList.add('hide');
                }
            }
        } else {
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

    const desiredTypeImgs = collectionProjectsTargetCategory.getElementsByClassName(typeImg); //Collection
    desiredTypeImgs.prototype = Object.create(Array.prototype); //Add Array prototype

    for (let i = 0; i < desiredTypeImgs.length; i++) {
        const desireTypeImg = desiredTypeImgs[i];
        operation(desireTypeImg);
    }
}

function closeButton(project, activity) {
    const buttons = project.querySelectorAll('.closeButton');
    buttons.forEach(function (elem) {
        activity(elem);
    });
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__categories__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__historyApi__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__openProject__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paramToSwitchCategoryContents__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__paramToSwitchPageContents__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stateConfig__ = __webpack_require__(10);







/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loadComponents_setContent__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = set3dContent;


function set3dContent(JSONObject) {

    const category3d = document.getElementById('category3d'),
          projectsNode = category3d.querySelectorAll('.project');

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__loadComponents_setContent__["a" /* setContent */])(JSONObject, projectsNode);
}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

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


console.log('bo');

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loadComponents_setContent__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = setDigitalArtContent;


function setDigitalArtContent(JSONObject) {

    const categoryDigitalArt = document.getElementById('categoryDigitalArt'),
          projectsNode = categoryDigitalArt.querySelectorAll('.project');

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__loadComponents_setContent__["a" /* setContent */])(JSONObject, projectsNode);
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loadComponents_setContent__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = setGraphicContent;


function setGraphicContent(JSONObject) {

    const categoryGraphic = document.getElementById('categoryGraphic'),
          projectsNode = categoryGraphic.querySelectorAll('.project');

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__loadComponents_setContent__["a" /* setContent */])(JSONObject, projectsNode);
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loadComponents_setContent__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = setOthersContent;


function setOthersContent(JSONObject) {

    const categoryOthers = document.getElementById('categoryOthers'),
          projectsNode = categoryOthers.querySelectorAll('.project');

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__loadComponents_setContent__["a" /* setContent */])(JSONObject, projectsNode);
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loadComponents_setContent__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = setPaintingContent;


function setPaintingContent(JSONObject) {

    const categoryPainting = document.getElementById('categoryPainting'),
          projectsNode = categoryPainting.querySelectorAll('.project');

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__loadComponents_setContent__["a" /* setContent */])(JSONObject, projectsNode);
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation_animationNavBar__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paramToSwitchPageContents__ = __webpack_require__(4);




if (history.state === null && window.location.pathname === '/') {
    history.pushState('home', null, '/');
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__main__["b" /* hideMainContentChildren */])();
}

document.querySelector('body').addEventListener('click', function (event) {

    const target = event.target,
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

const eventCheckStateChanges = function (type) {
    const orig = history[type];
    return function () {
        const rv = orig.apply(this, arguments);
        const event = new Event(type);
        event.arguments = arguments;
        window.dispatchEvent(event);
        return rv;
    };
};

window.onpopstate = function (event) {
    const currentPath = window.location.pathname;
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__animation_animationNavBar__["b" /* closeNavBarMenu */])();

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__paramToSwitchPageContents__["a" /* paramToSwitchPageContents */])(currentPath);
};

history.pushState = eventCheckStateChanges('pushState');

history.replaceState = eventCheckStateChanges('replaceState');

window.addEventListener('pushState', function (e) {
    const currentPath = window.location.pathname;
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__animation_animationNavBar__["b" /* closeNavBarMenu */])();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__paramToSwitchPageContents__["a" /* paramToSwitchPageContents */])(currentPath);
});

window.addEventListener('replaceState', function (e) {
    const currentPath = window.location.pathname;
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__animation_animationNavBar__["b" /* closeNavBarMenu */])();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__paramToSwitchPageContents__["a" /* paramToSwitchPageContents */])(currentPath);
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animation_animationNavBar__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paramToSwitchPageContents__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main__ = __webpack_require__(1);




window.onload = function () {
    const currentPath = window.location.pathname;
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__animation_animationNavBar__["b" /* closeNavBarMenu */])();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__paramToSwitchPageContents__["a" /* paramToSwitchPageContents */])(currentPath);

    if (window.location.hash !== '') {
        const hash = window.location.hash.slice(1),
              project = document.getElementById(hash),
              //project equal to hash
        targetImg = project.querySelector('.prevImg'),
              targetCol = project.parentNode,
              projects = targetCol.parentNode,
              cols = projects.querySelectorAll('.projectsCol');
        console.log(targetImg);

        projectNavigation.open(cols, targetCol, projects, project, targetImg);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__main__["d" /* showElement */])(targetImg);

        const closeButtons = project.getElementsByClassName('closeButton');
        for (let i = 0; i < closeButtons.length; i++) {
            const button = closeButtons[i];
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__main__["d" /* showElement */])(button);
        }
        const img = targetImg.firstChild;

        img.style.width = '97%';
    }
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__source_main__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__source_projects__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__source_animation_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__source_states_index__ = __webpack_require__(13);








/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map