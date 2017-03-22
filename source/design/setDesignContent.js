import {setContent} from '../loadComponents/setContent';


export function setDesignContent(JSONObject) {

    const categoryDesign = document.getElementById('categoryDesign'),
        projectsNode = categoryDesign.querySelectorAll('.project');

    setContent(JSONObject, projectsNode);
}
