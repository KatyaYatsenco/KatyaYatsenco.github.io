import './addImg';
import './buttons';
import './setContent';

import {addImg} from './addImg';

import {projectNavigation} from '../projects/projects';

export function injectImages(project, parent) { //Rename function

    const id = project['id'];
    const smallImg = project['small'];
    const bigImgs = project['big'];

    parent.setAttribute('id', id);

    addImg('smallImg', smallImg, parent);

    if (bigImgs) {
        bigImgs.forEach(function (bigImg) {
            addImg('bigImg', bigImg, parent);
        })

    }

}


export function parseData(imgSize, loadData, path, projectParameters) {
    let JSONObject;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            JSONObject = JSON.parse(xhr.responseText);

            if (imgSize === 'small') {

                const jsonObject = JSON.parse(xhr.responseText).projects;
                const smallImgs = [];
                getData(jsonObject, 'small', smallImgs);
                loadData(smallImgs);
            }

            else if (imgSize === 'big') {
                const jsonObject = JSON.parse(xhr.responseText).projects;

                const projectId = window.location.hash.substr(1);
                const bigImgs = [];

                getData(jsonObject, 'big', bigImgs, projectId);

                bigImgs.forEach(obj => {

                        if (obj.id === projectId) {

                            loadData(obj);

                            const parent = document.getElementById(window.location.hash.substr(1));
                            const bigImgs = obj.big;

                            bigImgs.forEach(function (bigImg) {
                                addImg('bigImg', bigImg, parent);
                            });

                            projectNavigation.open(projectParameters.cols, projectParameters.projectCol, projectParameters.projects, parent);

                        }
                    }
                )
            }

        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}


function getData(jsonObject, element, addTo) {
    for (let i = 0; i < jsonObject.length; i++) {
        let obj = {};
        obj['id'] = jsonObject[i].id;

        if (element === 'small') {
            obj['small'] = jsonObject[i].small;
        }
        else if (element === 'big') {
            obj['big'] = jsonObject[i].big;
        }
        addTo[i] = obj;
    }
}
