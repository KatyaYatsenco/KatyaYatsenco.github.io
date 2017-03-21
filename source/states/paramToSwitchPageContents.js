import {openMainCategories, hideMainContentChildren, hideMainCategories} from '../main';
import {paramToSwitchCategoryContents, paramToSwitchOtherContent} from './paramToSwitchCategoryContents';
import {stateConfig} from './stateConfig';
import {parseData} from '../loadComponents/mainComponent';


import{changeTextColor} from '../animation/navBar/animationNavBar';

import {setDesignContent} from '../design/setDesignContent';
import {setPaintingContent} from '../painting/setPaintingContent';
import {setGraphicContent} from '../graphic/setGraphicContent';
import {setDigitalArtContent} from '../digitalArt/setDigitalArtContent';
import {setOthersContent} from '../others/setOthersContent';
import {set3dContent} from '../3d/set3dContent';


const body = document.body;

export function paramToSwitchPageContents(currentPath) {
    switch (currentPath) {

        case '/':
            changeTextColor('white');
            openMainCategories();
            hideMainContentChildren();
            body.style.backgroundImage = 'url(../image/backgrounds/main_page.png)';
            break;

        case '/design':
            hideMainCategories();
            parseData('small', setDesignContent, "json_files/design.json");
            paramToSwitchCategoryContents(stateConfig.design.color, stateConfig.design.index, stateConfig.design.animation, stateConfig.design.bg);
            break;

        case '/painting':
            hideMainCategories();
            paramToSwitchCategoryContents(stateConfig.painting.color, stateConfig.painting.index, stateConfig.painting.animation, stateConfig.painting.bg);
            parseData(setPaintingContent, "json_files/painting.json");
            break;

        case '/graphic':
            hideMainCategories();
            paramToSwitchCategoryContents(stateConfig.graphic.color, stateConfig.graphic.index, stateConfig.graphic.animation, stateConfig.graphic.bg);
            parseData(setGraphicContent, "json_files/graphic.json");
            break;

        case  '/digitalArt':
            hideMainCategories();
            paramToSwitchCategoryContents(stateConfig.digitalArt.color, stateConfig.digitalArt.index, stateConfig.digitalArt.animation, stateConfig.digitalArt.bg);
            parseData(setDigitalArtContent, "json_files/digital_art.json");
            break;

        case  '/others':
            hideMainCategories();
            paramToSwitchCategoryContents(stateConfig.others.color, stateConfig.others.index, stateConfig.others.animation, stateConfig.others.bg);
            parseData(setOthersContent, "json_files/others.json");
            break;

        case  '/3d':
            hideMainCategories();
            paramToSwitchCategoryContents(stateConfig._3d.color, stateConfig._3d.index, stateConfig._3d.animation, stateConfig._3d.bg);
            parseData(set3dContent, "json_files/3d.json");
            break;

        case  '/aboutMe':
            hideMainCategories();
            paramToSwitchOtherContent(stateConfig.aboutMe.color, stateConfig.aboutMe.index, stateConfig.aboutMe.animation, stateConfig.aboutMe.bg);
            break;

        case  '/contacts':
            hideMainCategories();
            paramToSwitchOtherContent(stateConfig.contacts.color, stateConfig.contacts.index, stateConfig.contacts.animation, stateConfig.contacts.bg);
            break;
    }
}
