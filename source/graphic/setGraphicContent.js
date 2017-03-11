import {setContent} from '../loadComponents/setContent';


export function setGraphicContent(JSONObject) {

    const categoryGraphic = document.getElementById('categoryGraphic'),
        projectsNode = categoryGraphic.querySelectorAll('.project');

    setContent(JSONObject, projectsNode);

}
