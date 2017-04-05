import {setContent} from '../loadComponents/setContent';
import {structureGenerationProjects} from '../loadComponents/structureGenerationProjects';

import './index.scss';

export function set3dContent(JSONObject, projectsCount) {

    const category3d = document.getElementById('category3d');

    structureGenerationProjects(category3d, projectsCount);

    const projectsNode = category3d.querySelectorAll('.project');

    setContent(JSONObject, projectsNode);
}
