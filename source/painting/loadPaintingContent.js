function loadContentPainting(JSONObject) {

    var categoryPainting = document.getElementById('categoryPainting'),
        projects = categoryPainting.querySelectorAll('.project');

    for (var i = 0; i < projects.length; i++) {
        var project = projects[i];
        if (!project.children.length) {

            injectImages(JSONObject.projects[i], project);
        }
    }
}
