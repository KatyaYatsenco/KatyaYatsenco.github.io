

function parseData(loadProjects) {
    var JSONObject;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            JSONObject = JSON.parse(xmlhttp.responseText);
            var self = this;

            loadProjects.call(self, JSONObject);
        }
    };
    xmlhttp.open("GET", "json_files/digital_art.json", true);
    xmlhttp.send();
}

parseData(  loadContent);

var _categoryDigitalArt = document.getElementById('categoryDigitalArt'), //To this category I want to add project imgs
    _projects = categoryDigitalArt.querySelectorAll('.project'); //List projects

function loadContent(JSONObject) {
    _projects.forEach(function (parent) {
        injectImages(JSONObject, parent);
    });
}

var index = 0;

function injectImages(JSONObject, parent) { //Rename function

    var project = JSONObject.projects[index++];
    var id = project['id'];
    var smallImg = project['small'];
    var bigImgs = project['big'];

    parent.setAttribute('id', id);

    _addImg('smallImg', smallImg, parent);

    bigImgs.forEach(function (bigImg) {
        _addImg('bigImg', bigImg, parent);
    })

}

function _addImg(className, elementValue, parent) { // Function create img covers

    var img = document.createElement('IMG');
    img.setAttribute('src', elementValue);

    var containerForImg = document.createElement('A');
    if(className === 'smallImg') {
        containerForImg.classList.add('prevImg');
    }
    containerForImg.classList.add(className);

    containerForImg.appendChild(img);

    parent.appendChild(containerForImg);

    addCloseButton(parent);

}

function addCloseButton(project) {

    var children = project.childNodes;
    var imgs = [];
    for (var l = 0; l < project.childNodes.length; l++) {
        var child = project.childNodes[l];
        if (child.nodeType == 1) {
            imgs.push(child)
        }
    }
    var button = document.createElement('input');
    button.classList.add('closeButton');
    button.setAttribute('type', 'button');
    button.setAttribute('value', 'x');
    for (var i = 0; i < imgs.length; i++) {

        imgs[i].append(button);
    }
}
