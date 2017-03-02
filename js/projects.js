var projectNavigation = {

    open: function (cols, projectCol, projects, project) {
        onceCol(cols, projectCol);

        findImgs(projects, 'smallImg', hideElement);

        findImgs(project, 'bigImg', showElement);
    },

    close: function (cols, projectCol, projects, project) {

        var img = project.children[0].firstChild;
        img.style.width = '100%';

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
        closeButtonPrevImg = prevImg.querySelector('.closeButton'),
        projectId = project.id,
        projectCol = project.parentNode,
        projects = projectCol.parentNode,
        data = window.location.pathname,
        img,
        targetOpenButton,

        cols = projects.querySelectorAll('.projectsCol');


    if (targetElement.classList.contains('openButton')) {
        img = targetImg.firstChild;
        targetOpenButton = targetImg.querySelector('.openButton');

        img.style.filter = '';
        img.style.width = '97%';

        projectNavigation.open(cols, projectCol, projects, project);

        showElement(targetImg);
        targetOpenButton.style.display = 'none';
        hideElement(targetOpenButton);

        history.pushState('project' + projectId, null, '#' + projectId); // Add window location hash with number this project

        var closeButtons = project.getElementsByClassName('closeButton');
        for (var i = 0; i < closeButtons.length; i++) {
            var button = closeButtons[i];
            // button.style.display = '';
            showElement(button);
        }

    } else if (targetElement.classList.contains('closeButton')) {

        projectNavigation.close(cols, projectCol, projects, project, targetImg);
        history.replaceState(data.slice(1), null, data);

        hideElement(closeButtonPrevImg);
    }

    // if (projectCol.style.width === '98%') {
    //     closeButton(project, showElement);
    // } else if (projectCol.style.width === '30%') {
    //     if (targetImg.classList.contains('.littleImg')) {
    //         closeButton(project, hideElement);
    //     }
    // }
});


mainContent.addEventListener('mouseover', function (event) {
    var element = event.target.parentNode;
    if (element.classList.contains('prevImg') && element.firstChild.offsetWidth === 300) {
        var img = element.firstChild;
        img.style.filter = 'blur(2px)';
        var openButton = element.querySelector('.openButton');
        openButton.style.display = 'block';
        showElement(openButton);
    }
});


mainContent.addEventListener('mouseout', function (event) {
    var element = event.target.parentNode;
    var img = element.firstChild;

    if (element.classList.contains('prevImg')) {
        var openButton = element.querySelector('.openButton');
        img.style.filter = '';
        openButton.style.display = 'none';

        hideElement(openButton);

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

