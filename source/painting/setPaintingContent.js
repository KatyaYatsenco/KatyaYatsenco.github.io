import {setContent} from '../loadComponents/setContent';
import {structureGenerationProjects} from '../loadComponents/structureGenerationProjects';


import './index.scss';

export function setPaintingContent(JSONObject, projectsCount) {

    const categoryPainting = document.getElementById('categoryPainting');

    structureGenerationProjects(categoryPainting, projectsCount);

    const projectsNode = categoryPainting.querySelectorAll('.project');

    setContent(JSONObject, projectsNode);

}
