var categoryPainting = document.getElementById('categoryPainting'),
    projects = categoryPainting.querySelectorAll('.project'); //List projects digitalArt category

if (window.location.pathname === '/painting') {
    parseData(loadContent, "json_files/painting.json");
}

function loadContent(JSONObject) {
    // debugger
    projects.forEach(function (parent) {
        injectImages(JSONObject, parent);
    });
}
