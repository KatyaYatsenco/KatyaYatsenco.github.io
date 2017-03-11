import {closeNavBarMenu} from '../animation/animationNavBar';
import {paramToSwitchPageContents} from './paramToSwitchPageContents';
import {showElement} from '../main';


window.onload = function () {
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

        const closeButtons = project.getElementsByClassName('closeButton');
        for (let i = 0; i < closeButtons.length; i++) {
            const button = closeButtons[i];
            showElement(button);
        }
        const img = targetImg.firstChild;

        img.style.width = '97%';
    }

};


