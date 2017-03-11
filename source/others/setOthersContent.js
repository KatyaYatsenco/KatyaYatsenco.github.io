import {setContent} from '../loadComponents/setContent';


export function setOthersContent(JSONObject) {

    const categoryOthers = document.getElementById('categoryOthers'),
        projectsNode = categoryOthers.querySelectorAll('.project');

    setContent(JSONObject, projectsNode);

}
