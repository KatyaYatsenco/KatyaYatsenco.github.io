//Open target gallery Category
var projects = document.querySelector('.projects'),
    svgContainer = document.querySelector('.svgContainer'),
    derevo = document.getElementById('derevo'),
    galleryMenuCategories = document.querySelector('.galleryMenuCategories'),
    titleGalleryDivision = document.getElementById('titleGalleryDivision'),
    mainContent = document.querySelector('.mainContent'),
    mainContentChildren = mainContent.children,

// Determine history state
    state = history.state;


function watchPathChanges(callback) {

}
var categoryDesign = document.getElementById('categoryDesign'),
    categoryPainting = document.getElementById('categoryPainting'),
    categoryGraphic = document.getElementById('categoryGraphic'),
    categoryDigitalArt = document.getElementById('categoryDigitalArt'),
    categoryOthers = document.getElementById('categoryOthers'),
    category3d = document.getElementById('category3d'),
    categoryAboutMe = document.getElementById('aboutMeInfo'),
    categoryContacts = document.getElementById('contactsInfo'),
    categoriesPage = [categoryPainting, categoryDesign, categoryGraphic, categoryDigitalArt, categoryOthers, category3d, categoryAboutMe, categoryContacts];


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


// switchCategoryPages();
function checkClassVisible() {
    // I check if mainContent children have class 'visible'  - I remove class 'visible'.
    for (var i = 0; i < mainContentChildren.length; i++) {
        if (mainContentChildren[i].classList.contains('visible')) {
            mainContentChildren[i].classList.remove('visible');
        }
    }
}

// Change our States
if (state === null && currentPath === '/') {
    history.pushState('home', null, '/');
}

//Listener to the click somewhere on body
document.querySelector('body').addEventListener('click', function (event) {
    var target = event.target,
        data = event.target.id;

    if (data === 'home' || data === 'home_page') {
        history.pushState('home', null, '/');
        checkClassVisible();
    }
    else if (data === 'aboutMe') {
        history.pushState(data, null, data);
    }
    else if (data === 'contacts') {
        history.pushState(data, null, data);
    }
    else if (data === 'design') {
        history.pushState(data, null, data);
    }
    else if (data === 'painting') {
        history.pushState(data, null, data);
    }
    else if (data === 'graphic') {
        history.pushState(data, null, data);
    }
    else if (data === 'digitalArt') {
        history.pushState(data, null, data);
    }
    else if (data === 'others') {
        history.pushState(data, null, data);
    }
    else if (data === '_3d') {
        history.pushState(data, null, data);
    }
});

window.onpopstate = function (event) {
    console.log(event.state);
};


//-------------------
var _wr = function (type) {
    var orig = history[type];
    return function () {
        var rv = orig.apply(this, arguments);
        var e = new Event(type);
        e.arguments = arguments;
        window.dispatchEvent(e);
        return rv;
    };
};
history.pushState = _wr('pushState'), history.replaceState = _wr('replaceState');

// Use it like this:
window.addEventListener('pushState', function (e) {
    var currentPath = window.location.pathname;
    if (currentPath === '/') {
        openMainCategories();
    }
    else if(currentPath === '/design') {
        checkClassVisible();
        hideMainCategories();
        categoriesPage[1].classList.add('visible');
    }
    else if(currentPath === '/painting') {
        checkClassVisible();
        hideMainCategories();
        categoriesPage[0].classList.add('visible');
    }
    else if(currentPath === '/graphic') {
        checkClassVisible();
        hideMainCategories();
        categoriesPage[2].classList.add('visible');
    }
    else if(currentPath === '/digitalArt') {
        checkClassVisible();
        hideMainCategories();
        categoriesPage[3].classList.add('visible');
    }
    else if(currentPath === '/others') {
        checkClassVisible();
        hideMainCategories();
        categoriesPage[4].classList.add('visible');
    }
    else if(currentPath === '/3d') {
        checkClassVisible();
        hideMainCategories();
        categoriesPage[5].classList.add('visible');
    }
    else if(currentPath === '/aboutMe') {
        checkClassVisible();
        hideMainCategories();
        categoriesPage[6].classList.add('visible');
    }
    else if(currentPath === '/contacts') {
        checkClassVisible();
        hideMainCategories();
        categoriesPage[7].classList.add('visible');
    }
});

window.onload = function () {
    var currentPath = window.location.pathname;

    if (currentPath === '/') {
        openMainCategories();
    }
    else if(currentPath === '/design') {
        checkClassVisible();
        hideMainCategories();
        categoriesPage[1].classList.add('visible');
    }
    else if(currentPath === '/painting') {
        checkClassVisible();
        hideMainCategories();
        categoriesPage[0].classList.add('visible');
    }
    else if(currentPath === '/graphic') {
        checkClassVisible();
        hideMainCategories();
        categoriesPage[2].classList.add('visible');
    }
    else if(currentPath === '/digitalArt') {
        checkClassVisible();
        hideMainCategories();
        categoriesPage[3].classList.add('visible');
    }
    else if(currentPath === '/others') {
        checkClassVisible();
        hideMainCategories();
        categoriesPage[4].classList.add('visible');
    }
    else if(currentPath === '/3d') {
        checkClassVisible();
        hideMainCategories();
        categoriesPage[5].classList.add('visible');
    }
    else if(currentPath === '/aboutMe') {
        checkClassVisible();
        hideMainCategories();
        categoriesPage[6].classList.add('visible');
    }
    else if(currentPath === '/contacts') {
        checkClassVisible();
        hideMainCategories();
        categoriesPage[7].classList.add('visible');
    }
};

//-------------------
var categoriesPathName;

function hideMainCategories() {
    svgContainer.classList.add('hide');
    galleryMenuCategories.classList.add('hide');
}
function openMainCategories() {
    svgContainer.classList.remove('hide');
    galleryMenuCategories.classList.remove('hide');
}

// function switchCategoryPages() {
//     categoriesPathName.forEach(function (elem) {
//         switch (currentPath) {
//             case 'design':
//                 // if(elem)
//                 categoriesPage[1].classList.add('visible');
//                 hideMainCategories();
//                 break;
//             case '' :
//                 openMainCategories();
//                 break;
//
//         }
//
//     });
//
// }

// On window location I get pathName which correspondence with needed data.

// All functions which start to work when the window on load.


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

