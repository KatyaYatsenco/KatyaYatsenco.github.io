import {closeNavBarMenu} from '../animation/navBar/animationNavBar';
import {paramToSwitchPageContents} from './paramToSwitchPageContents';
import {showElement} from '../main';
import {projectNavigation} from '../projects/projects';

import {changeTextColor} from '../animation/navBar/animationNavBar';
import {parametersToParseData} from './parametersToParseData';

import {stopEpilepsy} from '../animation/onLoadPage/stopEpilepsy'



window.onload = function () {
    stopEpilepsy(3500);
    closeNavBarMenu();

    parametersToParseData(window.location.pathname, 'small');

    if (location.hash === '') {
        paramToSwitchPageContents(window.location.pathname);
    }

    else if (location.hash !== '') {
        paramToSwitchPageContents(window.location.pathname);

        stopEpilepsy(0);
        const projectNumber = window.location.hash.slice(3);

        switch (window.location.pathname) {

            case "/design":
                const categoryDesign = document.getElementById('categoryDesign');
                const designProjects = categoryDesign.querySelector('.projects');
                openProjectByHash(projectNumber, designProjects);
                changeTextColor('black');
                break;

            case "/3d":
                const category3d = document.getElementById('category3d');
                const _3dProjects = category3d.querySelector('.projects');
                try {
                    openProjectByHash(projectNumber, _3dProjects);
                }
                catch(error) {
                    console.log(error)
                }
                changeTextColor('white');
                break;

            case "/digitalArt":
                const categoryDigitalArt = document.getElementById('categoryDigitalArt');
                const digitalArtProjects = categoryDigitalArt.querySelector('.projects');
                openProjectByHash(projectNumber, digitalArtProjects);
                changeTextColor('white');
                break;

            case "/painting":
                const categoryPainting = document.getElementById('categoryPainting');
                const paintingProjects = categoryPainting.querySelector('.projects');
                openProjectByHash(projectNumber, paintingProjects);
                changeTextColor('white');
                break;

            case "/others":
                const categoryOthers = document.getElementById('categoryOthers');
                const othersProjects = categoryOthers.querySelector('.projects');
                openProjectByHash(projectNumber, othersProjects);
                changeTextColor('white');
                break;

            case "/graphic":
                const categoryGraphic = document.getElementById('categoryGraphic');
                const graphicProjects = categoryGraphic.querySelector('.projects');
                openProjectByHash(projectNumber, graphicProjects);
                changeTextColor('white');
                break;
        }

    }
};


function openProjectByHash(projectNumber, allProjects) {
    const project = allProjects.getElementsByClassName('project'),
        targetProject = project.item(projectNumber - 1);

    const projectCol = targetProject.parentNode,
        projects = projectCol.parentNode,
        cols = projects.querySelectorAll('.projectsCol');

    const projectParameters = {
        cols: cols,
        projectCol: projectCol,
        projects: projects
    };

    parametersToParseData(location.pathname, 'big', projectParameters)
}
