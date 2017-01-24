/**
 * ProjectNavigation // open and close target project
 * @constructor
 */
function ProjectNavigation() {

    var onceCol = function (cols, targetCol) {
        cols.prototype = Object.create(Array.prototype);
        cols.forEach(function (elem) {
            if (targetCol === elem) {
                elem.style.width = '98%';
            }
            else {
                elem.style.width = 0;
                elem.style.margin = 0;
            }
        });
    };

    // Function open and hide project
    function findImgs(collectionProjectsTargetCategory, typeImg, operation) {

        var desiredTypeImgs = collectionProjectsTargetCategory.getElementsByClassName(typeImg); //Collection

        desiredTypeImgs.prototype = Object.create(Array.prototype); //Add Array prototype

        for (var k = 0; k < desiredTypeImgs.length; k++) {
            var desireTypeImg = desiredTypeImgs[k];
            operation(desireTypeImg);
        }
    }

    this.openTargetProject = function (cols, targetCol, projects, project) {

        onceCol(cols, targetCol);

        findImgs(projects, 'littleImg', hideElement);

        findImgs(project, 'bigImg', showElement);
    };

    this.closeTargetProject = function (cols, targetCol, projects, project) {

        cols.forEach(function (elem) {
            elem.style.width = '30%';
            elem.style.margin = '20px 16px';
        });

        findImgs(projects, 'littleImg', showElement);

        findImgs(project, 'bigImg', hideElement);
    }

}

var projectNavigation = new ProjectNavigation();


//Listen when you click on prev little img to increase size prev img and than replace prev img to the big imgs
mainContent.addEventListener('click', function (event) {

    var targetElement = event.target,
        targetImg = event.target.parentNode, //have class 'littleImg' or 'bigImg'
        project = targetImg.parentNode,
        projectId = project.id,
        projectCol = project.parentNode,
        projects = projectCol.parentNode,
        data = window.location.pathname,

        cols = projects.querySelectorAll('.projectsCol');


    //if you click on little img - you open bigImgs this project
    if (targetImg.classList.contains('littleImg')) {

        projectNavigation.openTargetProject(cols, projectCol, projects, project);

        history.pushState('project' + projectId, null, '#' + projectId); // Add window location hash with number this project

    }

    else if (targetImg.classList.contains('bigImg')) {

        projectNavigation.closeTargetProject(cols, projectCol, projects, project);

        history.replaceState(data.slice(1), null, data);

    }
});
