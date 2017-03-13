import {showElement, hideElement} from './main';


export const projectNavigation = {
    open(cols, projectCol, projects, project) {

        onceCol(cols, projectCol);

        findImgs(projects, 'prevImg', hideElement);

        findImgs(project, 'bigImg', showElement);
    },

    close(cols, projectCol, projects, project) {

        const img = project.children[0].firstChild;

        threeCol(cols);

        findImgs(projects, 'prevImg', showElement);

        findImgs(project, 'bigImg', hideElement);
    }
};

const mainContent = document.querySelector('.mainContent');

mainContent.addEventListener('click', function (event) {
    const targetElement = event.target,
        targetImg = targetElement.parentNode, //have class 'smallImg' or 'bigImg'
        project = targetImg.parentNode,
        prevImg = project.querySelector('.prevImg'),
        projectId = project.id,
        projectCol = project.parentNode,
        projects = projectCol.parentNode,
        data = window.location.pathname,

        cols = projects.querySelectorAll('.projectsCol');


    if (targetImg.classList.contains('prevImg')) {
        const img = targetImg.firstChild;

        projectNavigation.open(cols, projectCol, projects, project);

        history.pushState('project' + projectId, null, '#' + projectId); // Add window location hash with number this project

        const closeButtons = project.getElementsByClassName('closeButton');
        for (let i = 0; i < closeButtons.length; i++) {
            const button = closeButtons[i];
            showElement(button);
        }

    } else if (targetImg.classList.contains('bigImg')) {

        projectNavigation.close(cols, projectCol, projects, project, targetImg);
        history.replaceState(data.slice(1), null, data);
    }
});


mainContent.addEventListener('mouseover', function (event) {
    const element = event.target.parentNode;

    if (element.classList.contains('prevImg')) {
        const img = element.firstChild;
        element.style.border = '2px solid black';
    }
    else if (element.classList.contains('bigImg')) {
        const img = element.firstChild;
        element.style.border = '2px solid black';
    }
});

mainContent.addEventListener('mouseout', function (event) {
    const element = event.target.parentNode;
    const img = element.firstChild;

    if (element.classList.contains('prevImg')) {
        element.style.border = '2px solid white';
    }
    else if (element.classList.contains('bigImg')) {
        element.style.border = '2px solid white';
    }
});


function onceCol(cols, projectCol) {
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

function findImgs(collectionProjectsTargetCategory, typeImg, operation) {

    const desiredTypeImgs = collectionProjectsTargetCategory.getElementsByClassName(typeImg); //Collection
    desiredTypeImgs.prototype = Object.create(Array.prototype); //Add Array prototype

    for (let i = 0; i < desiredTypeImgs.length; i++) {
        const desireTypeImg = desiredTypeImgs[i];
        operation(desireTypeImg);
    }
}


function closeButton(project, activity) {
    const buttons = project.querySelectorAll('.closeButton');
    buttons.forEach(function (elem) {
        activity(elem);
    })
}

