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

	//Open target gallery Category
	var projects = document.querySelector('.projects'),
	    svgContainer = document.querySelector('.svgContainer'),
	    derevo = document.getElementById('derevo'),
	    galleryMenuCategories = document.querySelector('.galleryMenuCategories'),
	    titleGalleryDivision = document.getElementById('titleGalleryDivision'),
	// Determine history state
	    state = history.state;


	function watchPathChanges(callback) {

	}
	var currentPath = window.location.pathname.substr(1),
	    categoryDesign = document.getElementById('categoryDesign'),
	    categoryPainting = document.getElementById('categoryPainting'),
	    categoryGraphic = document.getElementById('categoryGraphic'),
	    categoryDigitalArt = document.getElementById('categoryDigitalArt'),
	    categoryOthers = document.getElementById('categoryOthers'),
	    category_3d = document.getElementById('category_3d'),
	    categoryAboutMe = document.getElementById('aboutMeInfo'),
	    categoryContacts = document.getElementById('contactsInfo'),

	    categoriesPage = [categoryPainting, categoryDesign, categoryGraphic, categoryDigitalArt, categoryOthers, category_3d, categoryAboutMe, categoryContacts],
	    categoriesPathName = ['aboutMe', 'contacts', 'design', 'painting', 'graphic', 'digitalArt', 'others', '_3d', ''];


	//Check current pathName
	// setInterval(function () {
	//     if (window.location.pathname !== currentPath) {
	//         currentPath = window.location.pathname.substr(1);
	//         watchPathChanges(function () {
	//             var deleteSlash = currentPath;
	//             return currentPath;
	//
	//         });
	//     }
	//
	// }, 10);

	currentPath.addEventListener('change', function () {
	    if (window.location.pathname !== currentPath) {
	        currentPath = window.location.pathname;
	        watchPathChanges(function () {
	            var deleteSlash = currentPath.substr(1);
	            return currentPath;

	        });
	    }
	    console.log(currentPath);
	});

	switchCategoryPages();


	function hideMainCategories() {
	    svgContainer.classList.add('hide');
	    galleryMenuCategories.classList.add('hide');
	}
	function openMainCategories() {
	    svgContainer.classList.add('visible');
	    galleryMenuCategories.classList.add('visible');
	}

	function switchCategoryPages() {
	        categoriesPathName.forEach(function (elem) {
	            switch (currentPath) {
	                case 'design':
	                    // if(elem)
	                    categoriesPage[1].classList.add('visible');
	                    hideMainCategories();
	                    break;
	                case '' :
	                    openMainCategories();
	                    break;

	            }

	        });

	}

	// On window location I get pathName which correspondence with needed data.

	// All functions which start to work when the window on load.
	    window.onload = function () {
	        if (state === null && currentPath === '') {
	            history.pushState('home', null, '/');
	        }


	//Listener to the click somewhere on body
	        document.querySelector('body').addEventListener('click', function (event) {
	            var target = event.target,
	                data = event.target.id;

	            // var categoriesId = ['aboutMe', 'contacts', 'design', 'painting', 'graphic', 'digitalArt', 'others', '_3d'];
	            categoriesPathName.forEach(function (elem) {
	                var categoriesPathName = elem;
	                switch (data) {
	                    case categoriesPathName:
	                        history.pushState(data, null, data);
	                        var targetPage = document.getElementById(categoriesPathName);
	                        targetPage.classList.add('visible');
	                        break;
	                    case 'home':
	                    case  'home_page':
	                        history.pushState('home', null, '/');
	                        break;
	                }
	            });


	        });


	    };

	window.onpopstate = (function () {
	    if (this.currentPath === state) {
	        console.log('bo ');
	        // history changed because of pushState/replaceState
	    } else {
	        console.log('do ');

	        // history changed because of a page load
	    }
	}());

	// Open target category
	// function openCategory(target) {
	//     closeAll();
	//     var textTitleCategory = target.innerHTML;
	//     titleGalleryDivision.style.display = 'flex';
	//     projects.style.display = 'flex';
	//     titleGalleryDivision.innerHTML = textTitleCategory;
	//     hideInfoHomePage();
	// }
	//
	// // Close target category
	// function closeCategory() {
	//     titleGalleryDivision.style.display = 'none';
	//     projects.style.display = 'none';
	// }
	//
	// // Open title page
	// function goHome(target) {
	//     closeAll();
	//     svgContainer.style.display = 'block';
	//     galleryMenuCategories.style.display = 'block';
	//     closeCategory();
	// }
	//
	// // Hide information from the home page
	// function hideInfoHomePage() {
	//     svgContainer.style.display = 'none';
	//     galleryMenuCategories.style.display = 'none';
	// }
	//
	// // Open page about me
	// var aboutMeInfo = document.getElementById('aboutMeInfo');
	//
	// function openAboutMe() {
	//     closeAll();
	//     hideInfoHomePage();
	//     aboutMeInfo.style.display = 'flex';
	// }
	//
	// // Close information about me
	// function closeAboutMe() {
	//     aboutMeInfo.style.display = 'none';
	// }
	//
	// // Open contacts
	// var contactsInfo = document.getElementById('contactsInfo');
	//
	// function openContacts() {
	//     closeAll();
	//     contactsInfo.style.display = 'flex';
	//     hideInfoHomePage();
	// }
	//
	// // Close contacts
	// function closeContacts() {
	//     contactsInfo.style.display = 'none';
	// }
	//
	// // Close all
	// function closeAll() {
	//     closeContacts();
	//     closeAboutMe();
	//     closeCategory();
	//     hideInfoHomePage();
	//     // console.log('close opened division');
	// }
	// Open project
	// var projectsCols = document.querySelectorAll('.projectsCol');
	// var bigImgElements = document.querySelectorAll('.bigImg');

	//Function open project
	// // function openProject
	// project.forEach(function (elem) {
	//     elem.addEventListener('click', function () {
	//         // debugger;
	//
	//         var target = this;    // save target project
	//         var parentTargetNode = target.parentNode;
	//         projectsCols.forEach(function (elem) {
	//             if (parentTargetNode !== elem) {
	//                 elem.style.display = 'none';
	//             }
	//             else {
	//                 elem.style.width = '100%';
	//             }
	//         });
	//         project.forEach(function (elem) {
	//             if (target !== elem) {
	//                 elem.style.display = 'none';
	//             }
	//         });
	//         target.getElementsByClassName('littleImg')[0].style.display = 'none';  // hide little target img
	//
	//         bigImgElements.forEach(function (elem) {
	//
	//             if (elem.parentNode == target) {
	//                 elem.style.display = 'flex';
	//             }
	//             else {
	//                 elem.style.display = 'none';
	//             }
	//         })
	//
	//     });
	// });
	// bigImgElements.forEach(function (elem) {
	//
	//     elem.addEventListener('click', function () { //Close Big Picture
	//         var bigImgsTargetProject = this.parentNode.querySelectorAll('.bigImg');
	//
	//         console.log('click');
	//         bigImgsTargetProject.forEach(function (elem) {
	//             console.log(elem);
	//             elem.style.display = 'none';                  // !!!!problem
	//             console.log(elem.style.display);  // none
	//
	//         });
	//
	//         projectsCols.forEach(function (projCol) {
	//             // console.log(projectsCols);
	//             // projCol.style.width = '30%';
	//             // projCol.style.display = 'flex';
	//         });
	//
	//         project.forEach(function (proj) {
	//             // proj.style.display = 'flex';
	//             // console.log(proj);
	//         });
	//     });
	// });


	// ==============
	//
	// openProject(); old version

	//Gallery Menu
	// var galleryMenuCategories = document.getElementsByClassName('menuCategories');
	// var galleryMenuPageBackground = document.getElementsByClassName('main_background')[0];
	// // debugger;
	//
	// var category;
	// for (var i = 0; i < galleryMenuCategories.length; i++) {
	//     category = galleryMenuCategories[i];
	//     var categoryMouseover = category.addEventListener('mouseover', function categoryInFocus() {
	//         var findLindCurrentCategory = this.getElementsByTagName('a')[0];
	//         findLindCurrentCategory.style.display = 'block';
	//         if(findLindCurrentCategory.id === 'section3D') {
	//             galleryMenuPageBackground.style.backgroundImage = 'url("../image/gallery_background_3d.png")';
	//         }
	//         else if(findLindCurrentCategory.id === 'sectionPainting') {
	//             galleryMenuPageBackground.style.backgroundImage = 'url("../image/gallery_background_painting.png")';
	//         }
	//         else {
	//             galleryMenuPageBackground.style.backgroundImage = 'url("../image/main_background.jpg")';
	//
	//         }
	//
	//     });
	//     var categoryMouseoout = category.addEventListener('mouseout', function categoryInFocus() {
	//         var findLindCurrentCategory = this.getElementsByTagName('a')[0];
	//         findLindCurrentCategory.style.display = 'none';
	//         if(findLindCurrentCategory.id === 'section3D') {
	//             galleryMenuPageBackground.style.backgroundImage = 'url("../image/main_background.jpg")';
	//
	//         }
	//         else if(findLindCurrentCategory.id === 'sectionPainting') {
	//             galleryMenuPageBackground.style.backgroundImage = 'url("../image/main_background.jpg")';
	//
	//         }
	//     })
	// }



/***/ }
/******/ ]);