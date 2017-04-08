import {bodyBlendMode} from './blendMode';
import {body, changeDerevoColor} from './derevoColor';
import {epilepsy} from './epilepsy';


export function stopEpilepsy(time) {
    setTimeout(function () {

        clearInterval(epilepsy);

        bodyBlendMode();
        body.style.backgroundColor = 'black';
        body.style.backgroundBlendMode = 'normal';
        changeDerevoColor('#fff');
    }, time);
}
