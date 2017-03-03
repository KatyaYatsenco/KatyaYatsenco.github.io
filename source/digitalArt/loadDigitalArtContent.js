// require('../loadComponents/mainComponent');
// require('../loadComponents/addImg');
// require('../loadComponents/buttons');

var categoryDigitalArt = document.getElementById('categoryDigitalArt'),
    projects = categoryDigitalArt.querySelectorAll('.project'); //List projects digitalArt category

if(window.location.pathname === '/digitalArt'){
    parseData(loadContent, "json_files/digital_art.json");
}

function loadContent(JSONObject) {
    projects.forEach(function (parent) {
        injectImages(JSONObject, parent);
    });
}



