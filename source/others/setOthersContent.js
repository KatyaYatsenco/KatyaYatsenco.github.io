import {setContent} from '../loadComponents/setContent';
import {structureGenerationProjects} from '../loadComponents/structureGenerationProjects';

import './index.scss';

export function setOthersContent(JSONObject,projectsCount) {

    const categoryOthers = document.getElementById('categoryOthers');
    structureGenerationProjects(categoryOthers, projectsCount);

    const projectsNode = categoryOthers.querySelectorAll('.project');

    setContent(JSONObject, projectsNode);

}
