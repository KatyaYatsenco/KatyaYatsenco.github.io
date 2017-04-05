import {setContent} from '../loadComponents/setContent';
import {structureGenerationProjects} from '../loadComponents/structureGenerationProjects';


import './index.scss';

export function setGraphicContent(JSONObject, projectsCount) {

    const categoryGraphic = document.getElementById('categoryGraphic');
    structureGenerationProjects(categoryGraphic, projectsCount);

    const projectsNode = categoryGraphic.querySelectorAll('.project');

    setContent(JSONObject, projectsNode);

}
