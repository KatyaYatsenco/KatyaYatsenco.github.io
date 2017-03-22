import {closeNavBarMenu} from '../animation/navBar/animationNavBar';
import {paramToSwitchPageContents} from './paramToSwitchPageContents';
import {showElement} from '../main';
import {projectNavigation} from '../projects';

import {parametersToParseData} from './parametersToParseData';

// import {epilepsy} from '../animation/onLoadPage/epilepsy';
import {stopEpilepsy} from '../animation/onLoadPage/stopEpilepsy'


window.onload = function () {

    // epilepsy;
    stopEpilepsy(3500);
    const currentPath = window.location.pathname;
    closeNavBarMenu();

    parametersToParseData(currentPath, 'small');


    if (location.hash === '') {
        paramToSwitchPageContents(currentPath);
    }

    else if (location.hash !== '') {
        paramToSwitchPageContents(currentPath);
        stopEpilepsy(0);

        const hash = window.location.hash.slice(3);
        const allProjects = document.querySelector('.' + 'projects'),
            project = allProjects.getElementsByClassName('project'),
            targetProject = project.item(hash - 1);

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
};



