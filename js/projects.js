var projectNavigation = {

    open: function (cols, projectCol, projects, project, targetImg) {
        onceCol(cols, projectCol);
        findImgs(projects, 'smallImg', hideElement);

        // showElement(targetImg);

        findImgs(project, 'bigImg', showElement);
    },

    close: function (cols, projectCol, projects, project) {
        threeCol(cols);
        findImgs(projects, 'smallImg', showElement);
        findImgs(project, 'bigImg', hideElement);
    }
};

mainContent.addEventListener('click', function (event) {
    var targetElement = event.target,
        targetImg = targetElement.parentNode, //have class 'smallImg' or 'bigImg'
        project = targetImg.parentNode,
        prevImg = project.querySelector('.prevImg'),
        projectId = project.id,
        projectCol = project.parentNode,
        projects = projectCol.parentNode,
        data = window.location.pathname,

        cols = projects.querySelectorAll('.projectsCol');
    console.log(event.target)

    if (targetImg.classList.contains('prevImg')) {
        projectNavigation.open(cols, projectCol, projects, project);
        showElement(targetImg);
        history.pushState('project' + projectId, null, '#' + projectId); // Add window location hash with number this project
    } else if (event.target.classList.contains('closeButton')) {
        projectNavigation.close(cols, projectCol, projects, project, targetImg);
        history.replaceState(data.slice(1), null, data);

        var closeButtonPrevImg = targetImg.querySelector('.closeButton');
        console.log('click button');
        hideElement(prevImg);
    }

    if (projectCol.style.width === '98%') {
        closeButton(project, showElement);
    } else if (projectCol.style.width === '30%') {
        if(targetImg.classList.contains('.littleImg')) {
            closeButton(project, hideElement);
        }
    }
});


function onceCol(cols, projectCol) {
    cols.prototype = Object.create(Array.prototype);
    cols.forEach(function (elem) {
        if (projectCol === elem) {
            elem.style.width = '98%';
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

    var desiredTypeImgs = collectionProjectsTargetCategory.getElementsByClassName(typeImg); //Collection
    desiredTypeImgs.prototype = Object.create(Array.prototype); //Add Array prototype

    for (var k = 0; k < desiredTypeImgs.length; k++) {
        var desireTypeImg = desiredTypeImgs[k];
        operation(desireTypeImg);
    }
}

function closeButton(project, activity) {
    var buttons = project.querySelectorAll('.closeButton');
    buttons.forEach(function (elem) {
        activity(elem);
    })
}

