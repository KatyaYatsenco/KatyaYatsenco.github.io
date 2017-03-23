import {setContent} from '../loadComponents/setContent';

export function set3dContent(JSONObject) {

    const category3d = document.getElementById('category3d'),
        projectsNode = category3d.querySelectorAll('.project');

    setContent(JSONObject, projectsNode);
}
