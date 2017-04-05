import {showElement, hideElement} from '../main';

import {parametersToParseData} from '../states/parametersToParseData';

import './index.scss';
import './project.scss';
import './projects.scss';

export const projectNavigation = {
    open(cols, projectCol, projects, project) {

        // console.log('open')
        // const img = project.querySelector('.prevImg');
        // console.log(img)
        // animateImg(img, 'small');


        oneCol(cols, projectCol);
        //    setTimeout(()=>{
        findImgs(projects, 'prevImg', hideElement);

        findImgs(project, 'bigImg', showElement);
        // },2000)

    },

    close(cols, projectCol, projects, project) {

        const img = project.querySelector('.bigImg')
        // animateImg(img, 'big');

        threeCol(cols);

        findImgs(projects, 'prevImg', showElement);

        findImgs(project, 'bigImg', hideElement);
    }
};

const mainContent = document.querySelector('.mainContent');

mainContent.addEventListener('click', function (event) {
    const targetElement = event.target,
        targetImg = targetElement.parentNode; //have class 'smallImg' or 'bigImg'


    if (targetImg.classList.contains('prevImg')) {
        const project = targetImg.parentNode,
            projectId = project.id,
            prevImg = project.querySelector('.prevImg'),
            projectCol = project.parentNode,
            projects = projectCol.parentNode,
            cols = projects.querySelectorAll('.projectsCol');
// debugger
        const projectParameters = {
            cols: cols,
            projectCol: projectCol,
            projects: projects
        };

        parametersToParseData(location.pathname, 'big', projectParameters);


        location.hash = projectId; // Add window location hash with number this project

    } else if (targetImg.classList.contains('bigImg')) {
        const project = targetImg.parentNode,
            prevImg = project.querySelector('.prevImg'),
            projectCol = project.parentNode,
            projects = projectCol.parentNode,
            cols = projects.querySelectorAll('.projectsCol'),
            data = window.location.pathname;

        projectNavigation.close(cols, projectCol, projects, project, targetImg);
        history.replaceState(data.slice(1), null, data);
    }
});


function oneCol(cols, projectCol) {
    cols.prototype = Object.create(Array.prototype);
    cols.forEach(function (elem) {
        if (projectCol === elem) {
            elem.style.width = '98%';

            const prevImgs = elem.querySelectorAll('.prevImg');
            for (let i = 0; i < prevImgs.length; i++) {
                if (!prevImgs[i].classList.contains('hide')) {
                    prevImgs[i].classList.add('hide');
                }
            }
        }
        else {
            elem.style.width = 0;
            elem.style.margin = 0;
        }
    });
}

function threeCol(cols) {
    cols.forEach(function (elem) {
        elem.style.width = '30%';
        elem.style.margin = '20px 16px';
    });
}

function findImgs(categoryProjects, typeImg, operation) {

    const desiredTypeImgs = categoryProjects.querySelectorAll('.' + typeImg);

    for (let i = 0; i < desiredTypeImgs.length; i++) {
        const desireTypeImg = desiredTypeImgs[i];
        operation(desireTypeImg);
    }

}

function animateImg(img, imgType) {
    if (imgType === 'small') {
        if (img.classList.contains('smallWidth')) {
            img.classList.remove('.smallWidth');
        }
        img.classList.add('fullWidth');

    }
    else if (imgType === 'big') {
        if (img.classList.contains('fullWidth')) {
            img.classList.remove('.fullWidth');
        }
        img.classList.add('smallWidth');
    }
}

