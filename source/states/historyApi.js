import {hideMainContentChildren} from '../main';
import {closeNavBarMenu} from '../animation/animationNavBar';
import {paramToSwitchPageContents} from './paramToSwitchPageContents';


if (history.state === null && window.location.pathname === '/') {
    history.pushState('home', null, '/');
    hideMainContentChildren();
}

document.querySelector('body').addEventListener('click', function (event) {

    const target = event.target,
        data = event.target.id;

    switch (data) {
        case 'home':
        case 'home_page':
            history.pushState('home', null, '/');
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

history.replaceState = eventCheckStateChanges('replaceState');


window.addEventListener('pushState', function (e) {
    const currentPath = window.location.pathname;
    closeNavBarMenu();
    paramToSwitchPageContents(currentPath);

});


window.addEventListener('replaceState', function (e) {
    const currentPath = window.location.pathname;
    closeNavBarMenu();
    paramToSwitchPageContents(currentPath);
});
