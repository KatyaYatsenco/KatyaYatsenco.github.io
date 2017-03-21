import {changeDerevoColor} from './derevoColor';
import {bodyBlendMode} from './blendMode';
import {getRandomColor} from './randomColors';


export const epilepsy = setInterval(() => {

    changeDerevoColor(getRandomColor());
    bodyBlendMode();

}, 100);

