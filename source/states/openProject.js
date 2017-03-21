import {closeNavBarMenu} from '../animation/navBar/animationNavBar';
import {paramToSwitchPageContents} from './paramToSwitchPageContents';
import {showElement} from '../main';
import {projectNavigation} from '../projects';

import {setDesignContent} from '../design/setDesignContent';
import {parseData} from '../loadComponents/mainComponent';

import {epilepsy} from '../animation/onLoadPage/epilepsy';
import {stopEpilepsy} from '../animation/onLoadPage/stopEpilepsy'


window.onload = function () {

    // epilepsy;
    stopEpilepsy(2000);
    const currentPath = window.location.pathname;
    closeNavBarMenu();

    parseData('small', setDesignContent, "json_files/design.json");

    if (location.hash === '') {
        paramToSwitchPageContents(currentPath);
    }

    else if (location.hash !== '') {
        paramToSwitchPageContents(currentPath);

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
            targetProjects: projects
        };
        parseData('big', setDesignContent, "json_files/design.json", projectParameters);
    }
};

