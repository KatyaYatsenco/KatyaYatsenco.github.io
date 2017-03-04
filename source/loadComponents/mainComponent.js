function injectImages(project, parent) { //Rename function

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

function parseData(loadProjects, path) {
    var JSONObject;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            JSONObject = JSON.parse(xhr.responseText);

            loadProjects(JSONObject);
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}
