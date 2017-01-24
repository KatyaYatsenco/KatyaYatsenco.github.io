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
/***/ function(module, exports) {

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
	//--------------------------------------------
	// var url = 'json_files/graphic_gallery.json';
	// function loadJSON(path, success, error)
	// {
	//     var xhr = new XMLHttpRequest();
	//     xhr.onreadystatechange = function()
	//     {
	//         if (xhr.readyState === XMLHttpRequest.DONE) {
	//             if (xhr.status === 200) {
	//                 if (success)
	//                     success(JSON.parse(xhr.responseText));
	//             } else {
	//                 if (error)
	//                     error(xhr);
	//             }
	//         }
	//     };
	//     xhr.open("GET", path, true);
	//     xhr.send();
	// }

	// loadJSON(url,
	//     function(data) {
	// // console.log(data)
	// },
	//     function(xhr) { console.error(xhr); }
	// );

	//--------------------------------------------


	function loadJSON1()
	{
	    var xmlhttp = new XMLHttpRequest();
	    xmlhttp.onreadystatechange=function()
	    {
	        if (xmlhttp.readyState==4 && xmlhttp.status==200)
	        {
	            var JSONObject = JSON.parse(xmlhttp.responseText);

	            for(var i =0; i<JSONObject.projects.length; i++) {
	                var name = JSONObject.projects[i].name;
	                var id = JSONObject.projects[i].id;
	                console.log('name: ' + name + ', id: ' + id);
	            }
	        }
	    };
	    xmlhttp.open("GET","json_files/graphic_gallery.json",true);
	    xmlhttp.send();
	}
	loadJSON1();


/***/ }
/******/ ]);