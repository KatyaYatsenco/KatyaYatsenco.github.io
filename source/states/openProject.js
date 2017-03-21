import {closeNavBarMenu} from '../animation/navBar/animationNavBar';
import {paramToSwitchPageContents} from './paramToSwitchPageContents';
import {showElement} from '../main';
import {projectNavigation} from '../projects';

import {epilepsy} from '../animation/onLoadPage/epilepsy';
import {stopEpilepsy} from '../animation/onLoadPage/stopEpilepsy'



window.onload = function () {
    epilepsy;
    stopEpilepsy(2000);
    const currentPath = window.location.pathname;
    closeNavBarMenu();
    paramToSwitchPageContents(currentPath);

    if (window.location.hash !== '') {
        const hash = window.location.hash.slice(1),
            project = document.getElementById(hash), //project equal to hash
            targetImg = project.querySelector('.prevImg'),
            targetCol = project.parentNode,
            projects = targetCol.parentNode,
            cols = projects.querySelectorAll('.projectsCol');
        console.log(targetImg);

        projectNavigation.open(cols, targetCol, projects, project, targetImg);
        showElement(targetImg);

        const img = targetImg.firstChild;

        img.style.width = '97%';
    }

};


