import {setContent} from '../loadComponents/setContent';

export function setPaintingContent(JSONObject) {

    const categoryPainting = document.getElementById('categoryPainting'),
        projectsNode = categoryPainting.querySelectorAll('.project');

    setContent(JSONObject, projectsNode);

}
