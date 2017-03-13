import {hideMainContentChildren} from '../main';
import {categoriesPage} from './categories';

import{changeTextColor} from '../animation/animationNavBar';


const body = document.body;

export function paramToSwitchCategoryContents(textColor, categoriesPageIndex, animationName, bodyBgImg) {

    changeTextColor(textColor);
    categoriesPage[categoriesPageIndex].classList.add('visible');
    body.style.animation = animationName;
    body.style.backgroundImage = bodyBgImg;
}

export function paramToSwitchOtherContent(textColor, categoriesPageIndex, animationName, bodyBgImg) {

    changeTextColor(textColor);
    hideMainContentChildren();
    categoriesPage[categoriesPageIndex].classList.add('visible');
    body.style.animation = animationName;
    body.style.backgroundImage = bodyBgImg;
}
