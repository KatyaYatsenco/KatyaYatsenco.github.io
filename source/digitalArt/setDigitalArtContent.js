import {setContent} from '../loadComponents/setContent';


export function setDigitalArtContent(JSONObject) {

    const categoryDigitalArt = document.getElementById('categoryDigitalArt'),
        projectsNode = categoryDigitalArt.querySelectorAll('.project');

    setContent(JSONObject, projectsNode);

}


