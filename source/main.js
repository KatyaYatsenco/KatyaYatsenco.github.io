'use strict';
import './animation/index';
import  './loadComponents/mainComponent';
import './design/setDesignContent';

import './navigation/navBar.scss';
import './navigation/header.scss';

import './contacts/index.scss';
import './aboutMe/index.scss';

import './derevo/index.scss';

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










