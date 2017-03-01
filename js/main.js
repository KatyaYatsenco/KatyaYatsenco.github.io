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
