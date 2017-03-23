import {hideMainContentChildren} from '../main';
import {closeNavBarMenu} from '../animation/navBar/animationNavBar';
import {paramToSwitchPageContents} from './paramToSwitchPageContents';

import {projectNavigation} from '../projects';


import {epilepsy} from '../animation/onLoadPage/epilepsy';
import {stopEpilepsy} from '../animation/onLoadPage/stopEpilepsy';

import {runMainPageAnimation} from '../animation/onLoadPage/mainPage'
import {stopMainPageAnimation} from '../animation/onLoadPage/mainPage'

if (history.state === null && window.location.pathname === '/') {
    history.pushState('home', null, '/');
    hideMainContentChildren();
    epilepsy;
    runMainPageAnimation();
}


document.querySelector('body').addEventListener('click', function (event) {

    const target = event.target,
        data = event.target.id;

    switch (data) {
        case 'home':
        case 'home_page':
            history.pushState('home', null, '/');
            stopMainPageAnimation();
            break;

        case 'aboutMe':
        case 'contacts':
        case 'design':
        case 'painting':
        case 'graphic':
        case 'digitalArt':
        case 'others':
            history.pushState(data, null, data);
            break;

        case '_3d':
            history.pushState(data, null, '3d');
            break;
    }
});


const eventCheckStateChanges = function (type) {
    const orig = history[type];
    return function () {
        const rv = orig.apply(this, arguments);
        const event = new Event(type);
        event.arguments = arguments;
        window.dispatchEvent(event);
        return rv;
    };
};

window.onpopstate = function (event) {
    const currentPath = window.location.pathname;
    closeNavBarMenu();

    paramToSwitchPageContents(currentPath);

};

history.pushState = eventCheckStateChanges('pushState');

window.addEventListener('pushState', function (e) {
    const currentPath = window.location.pathname;
    closeNavBarMenu();
    paramToSwitchPageContents(currentPath);

});



