import {bodyBlendMode} from './blendMode';
import {changeTextColor} from '../navBar/animationNavBar';
import {body, changeDerevoColor} from './derevoColor';
import {epilepsy} from './epilepsy';


export function stopEpilepsy(time) {
    setTimeout(function () {

        clearInterval(epilepsy);

        bodyBlendMode();
        body.style.backgroundColor = 'black';
        body.style.backgroundBlendMode = 'normal';
        document.querySelector('.svgContainer').style.overflow = 'auto';
        // changeTextColor('#fff');
        changeDerevoColor('#fff');
    }, time);
}
