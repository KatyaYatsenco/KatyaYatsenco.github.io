
function parseData(loadProjects, path) {
    var JSONObject;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            JSONObject = JSON.parse(xmlhttp.responseText);
            var self = this;

            loadProjects.call(self, JSONObject);
        }
    };
    xmlhttp.open("GET", path, true);
    xmlhttp.send();
}

var index = 0;
function injectImages(JSONObject, parent) { //Rename function

    var project = JSONObject.projects[index++];
    console.log(project)
    var id = project['id'];
    var smallImg = project['small'];
    var bigImgs = project['big'];

    parent.setAttribute('id', id);

    addImg('smallImg', smallImg, parent);

    bigImgs.forEach(function (bigImg) {
        addImg('bigImg', bigImg, parent);
    })
}

