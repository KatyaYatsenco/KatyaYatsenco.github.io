// require('../loadComponents/mainComponent');
// require('../loadComponents/addImg');
// require('../loadComponents/buttons');


function loadContentDigitalArt(JSONObject) {

    var categoryDigitalArt = document.getElementById('categoryDigitalArt'),
        projectsNode = categoryDigitalArt.querySelectorAll('.project');

    for (var i = 0; i < projectsNode.length; i++) {
        var projectNode = projectsNode[i];
        if (!projectNode.children.length) {

            injectImages(JSONObject.projects[i], projectNode);
        }
    }
}


