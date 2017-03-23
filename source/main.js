'use strict';
import './animation/index';
import  './loadComponents/mainComponent';
import './design/setDesignContent';



const projects = document.querySelector('.projects'),
    svgContainer = document.querySelector('.svgContainer'),
    derevo = document.getElementById('derevo'), // used in another file
    galleryMenuCategories = document.querySelector('.galleryMenuCategories'),
    titleGalleryDivision = document.querySelectorAll('.titleGalleryDivision'),
    mainContent = document.querySelector('.mainContent'),
    mainContentChildren = mainContent.children;


export function hideMainContentChildren() {
    for (let i = 0; i < mainContentChildren.length; i++) {
        if (mainContentChildren[i].classList.contains('visible')) {
            mainContentChildren[i].classList.remove('visible');
        }
    }
}


export function hideElement(element) {
    if (element.classList.contains('visible')) {
        element.classList.remove('visible');
    }
    else {
        element.classList.add('hide');

    }
}


export function showElement(element) {
    if (element.classList.contains('hide')) {
        element.classList.remove('hide');
    }
    else {
        element.classList.add('visible');
    }
}

export function hideMainCategories() {

    if (svgContainer.classList.contains('visible') || galleryMenuCategories.classList.contains('visible')) {
        svgContainer.classList.remove('visible');
        galleryMenuCategories.classList.remove('visible');
    }
}


export function openMainCategories() {
    document.body.style.backgroundImage = 'url(../image/background_main_page.png)';
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
// const svgContainer = document.querySelector('.svgContainer');
// svgContainer.style.overflow = 'hidden';
const navigation = document.querySelector('.navigation');
// navigation.style.animation = 'showNavBarMenu 4.5s';
const logoName = document.querySelector('.logo_name');
// logoName.style.animation = 'appearanceLogo 3s';
// const gallerySubcategoryDesign = document.querySelector('#design');
// gallerySubcategoryDesign.style.animation = 'moveDesignLink 4.1s';
// const gallerySubcategoryPainting = document.querySelector('#painting');
// gallerySubcategoryPainting.style.animation = 'movePaintingLink 3.3s';
// const gallerySubcategoryGraphic = document.querySelector('#graphic');
// gallerySubcategoryGraphic.style.animation = 'moveGraphicLink 4.4s';
// const gallerySubcategoryDigitalArt = document.querySelector('#digitalArt');
// gallerySubcategoryDigitalArt.style.animation = 'moveDigitalArtLink 4.2s';
// const gallerySubcategoryOthers = document.querySelector('#others');
// gallerySubcategoryOthers.style.animation = 'moveOthersLink 5s';
// const gallerySubcategory3d = document.querySelector('#_3d');
// gallerySubcategory3d.style.animation = 'move3dLink 4.7s';
// const derevo = document.querySelector('#derevo');
// derevo.style.animation = 'derevoZoom 2s';








