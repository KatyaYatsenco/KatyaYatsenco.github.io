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

parseData(loadContent);

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
    if (className === 'smallImg') {
        containerForImg.classList.add('prevImg');
    }
    containerForImg.classList.add(className);

    containerForImg.appendChild(img);

    parent.appendChild(containerForImg);

    addCloseButton(parent);
    addOpenButton(parent);
}

function addCloseButton(project) {

    var children = project.childNodes;
    for (var indexChildren = 0; indexChildren < children.length; indexChildren++) {
        var imgs = [];
        var child = children[indexChildren];
        if (child.nodeType == 1) {
                imgs.push(child)
        }
    }
    var button = document.createElement('div');
    button.classList.add('closeButton');
    for (var indexImgs = 0; indexImgs < imgs.length; indexImgs++) {
        imgs[indexImgs].append(button);
    }
}

function addOpenButton(project) {

    var children = project.childNodes;
    for (var index = 0; index < children.length; index++) {
        var imgs = [];
        var child = children[index];
        if (child.nodeType == 1) {
            if (child.classList.contains('prevImg')) {
                imgs.push(child)
            }

        }
    }
    var button = document.createElement('div');
    button.classList.add('openButton');

    for (var i = 0; i < imgs.length; i++) {
        var img = imgs[i];
        img.appendChild(button);

    }
}


