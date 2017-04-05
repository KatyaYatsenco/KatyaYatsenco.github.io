import {setContent} from '../loadComponents/setContent';
import {structureGenerationProjects} from '../loadComponents/structureGenerationProjects';

import './index.scss';

export function setDigitalArtContent(JSONObject, projectsCount) {

    const categoryDigitalArt = document.getElementById('categoryDigitalArt');

    structureGenerationProjects(categoryDigitalArt, projectsCount);

    const projectsNode = categoryDigitalArt.querySelectorAll('.project');

    setContent(JSONObject, projectsNode);

}


