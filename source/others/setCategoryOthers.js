
function setContentOthers(JSONObject) {

    var categoryOthers = document.getElementById('categoryOthers'),
        projects = categoryOthers.querySelectorAll('.project');

    for (var i = 0; i < projects.length; i++) {
        var project = projects[i];
        if (!project.children.length) {

            injectImages(JSONObject.projects[i], project);
        }


    }
}
