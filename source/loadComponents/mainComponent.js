import './addImg';
import './buttons';
import './setContent';

import {addImg} from './addImg';


export function injectImages(project, parent) { //Rename function

    const id = project['id'];
    const smallImg = project['small'];
    const bigImgs = project['big'];
    // console.log(project.length)

    parent.setAttribute('id', id);

    addImg('smallImg', smallImg, parent);

    bigImgs.forEach(function (bigImg) {
        addImg('bigImg', bigImg, parent);
    })
}

export function parseData(loadProjects, path) {
    let JSONObject;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            JSONObject = JSON.parse(xhr.responseText);

            loadProjects(JSONObject);
            console.log(JSONObject.projects.length)
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}
