import {hideMainContentChildren} from '../main';
import {categoriesPage} from './categories';

import{changeTextColor} from '../animation/navBar/animationNavBar';


const body = document.body;

export function paramToSwitchCategoryContents(textColor, categoriesPageIndex, bodyBgImg) {

    changeTextColor(textColor);
    categoriesPage[categoriesPageIndex].classList.add('visible');
    body.style.backgroundImage = bodyBgImg;
    const logoName = document.querySelector('.logo_name'),
        menuIcon = document.getElementById('menu_img_box');
    logoName.style.animation = 'none';
    menuIcon.style.animation = 'none';
}

export function paramToSwitchOtherContent(textColor, categoriesPageIndex, bodyBgImg) {

    changeTextColor(textColor);
    hideMainContentChildren();
    categoriesPage[categoriesPageIndex].classList.add('visible');
    body.style.backgroundImage = bodyBgImg;

    const logoName = document.querySelector('.logo_name'),
        menuIcon = document.getElementById('menu_img_box');
    logoName.style.animation = 'none';
    menuIcon.style.animation = 'none';
}
