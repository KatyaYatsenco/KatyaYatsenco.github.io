import {setContent} from '../loadComponents/setContent';
import {structureGenerationProjects} from '../loadComponents/structureGenerationProjects';

export function setDesignContent(JSONObject, projectsCount) {

    const categoryDesign = document.getElementById('categoryDesign');

    structureGenerationProjects(categoryDesign, projectsCount);

    const projectsNode = categoryDesign.querySelectorAll('.project');

    setContent(JSONObject, projectsNode);
}
