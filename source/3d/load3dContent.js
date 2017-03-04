
function setContent3d(JSONObject) {

    var category3d = document.getElementById('category3d'),
        projects = category3d.querySelectorAll('.project');

    for (var i = 0; i < projects.length; i++) {
        var project = projects[i];
        if (!project.children.length) {

            injectImages(JSONObject.projects[i], project);
        }


    }
}
