/* Categories pages and contact and about me pages */


var stateConfig = {
    'design': {
        color: 'white',
        index: 1,
        animation: 'designBg 0.2s',
        bg: 'url(../image/gallery_background_design.png)'
    },
    'painting': {
        color: 'white',
        index: 0,
        animation: 'paintingBg 0.2s',
        bg: 'url(../image/gallery_background_painting.png)'
    },
    'graphic': {
        color: 'white',
        index: 2,
        animation: 'graphicBg 0.2s',
        bg: 'url(../image/gallery_background_graphic.png)'
    },
    'digitalArt': {
        color: 'white',
        index: 3,
        animation: 'digitalArtBg 0.2s',
        bg: 'url(../image/gallery_background_digital_art.png)'
    },
    'others': {
        color: 'white',
        index: 4,
        animation: 'othersBg 0.2s',
        bg: 'url(../image/gallery_background_others.png)'
    },
    '_3d': {
        color: 'black',
        index: 5,
        animation: '_3dBg 0.2s',
        bg: 'url(../image/gallery_background_3d.png)'
    },
    'aboutMe': {
        color: 'white',
        index: 6,
        animation: 'aboutMeBg 0.2s',
        bg: 'url(../image/gallery_background_about_me.png)'
    },
    'contacts': {
        color: 'white',
        index: 7,
        animation: 'contactsBg 0.2s',
        bg: 'url(../image/gallery_background_contacts.png)'
    }

};

function State() {

    var categoryDesign = document.getElementById('categoryDesign'),
        categoryPainting = document.getElementById('categoryPainting'),
        categoryGraphic = document.getElementById('categoryGraphic'),
        categoryDigitalArt = document.getElementById('categoryDigitalArt'),
        categoryOthers = document.getElementById('categoryOthers'),
        category3d = document.getElementById('category3d'),
        categoryAboutMe = document.getElementById('aboutMeInfo'),
        categoryContacts = document.getElementById('contactsInfo');

    /* Determine history state */
    this.state = history.state;

    /* Array categories page */
    var categoriesPage = [categoryPainting, categoryDesign, categoryGraphic, categoryDigitalArt, categoryOthers, category3d, categoryAboutMe, categoryContacts];

    /**
     * Function paramToSwitchCategoriesContent
     * @param {string} textColor //change text color on target page
     * @param {number} categoriesPageIndex //index list category pages
     * @param {string} animationName // css animation appearance body background to target page
     * @param {string} bodyBgImg // after animation add necessary body background to target page
     */
    function paramToSwitchCategoriesContent(textColor, categoriesPageIndex, animationName, bodyBgImg) {

        changeTextColor(textColor);
        categoriesPage[categoriesPageIndex].classList.add('visible');
        body.style.animation = animationName;
        body.style.backgroundImage = bodyBgImg;

    }

    /**
     * Function paramToSwitchOtherContent
     * @param {string} textColor //change text color on target page
     * @param {number} categoriesPageIndex //index list content pages
     * @param {string} animationName // css animation appearance body background to target page
     * @param {string} bodyBgImg // after animation add necessary body background to target page
     */
    function paramToSwitchOtherContent(textColor, categoriesPageIndex, animationName, bodyBgImg) {

        changeTextColor(textColor);
        hideMainContentChildren();
        categoriesPage[categoriesPageIndex].classList.add('visible');
        body.style.animation = animationName;
        body.style.backgroundImage = bodyBgImg;

    }

    this.parameterSwitchPageContents = function (currentPath) {
        switch (currentPath) {

            case '/':
                changeTextColor('white');
                openMainCategories();
                hideMainContentChildren();
                body.style.backgroundImage = 'url(../image/background_main_page.png)';
                break;

            case '/design':
                paramToSwitchCategoriesContent(stateConfig.design.color, stateConfig.design.index, stateConfig.design.animation, stateConfig.design.bg);
                break;

            case '/painting':
                paramToSwitchCategoriesContent(stateConfig.painting.color, stateConfig.painting.index, stateConfig.painting.animation, stateConfig.painting.bg);
                break;

            case '/graphic':
                paramToSwitchCategoriesContent(stateConfig.graphic.color, stateConfig.graphic.index, stateConfig.graphic.animation, stateConfig.graphic.bg);
                break;

            case  '/digitalArt':
                paramToSwitchCategoriesContent(stateConfig.digitalArt.color, stateConfig.digitalArt.index, stateConfig.digitalArt.animation, stateConfig.digitalArt.bg);
                break;

            case  '/others':
                paramToSwitchCategoriesContent(stateConfig.others.color, stateConfig.others.index, stateConfig.others.animation, stateConfig.others.bg);
                break;

            case  '/3d':
                paramToSwitchCategoriesContent(stateConfig._3d.color, stateConfig._3d.index, stateConfig._3d.animation, stateConfig._3d.bg);
                break;

            case  '/aboutMe':
                paramToSwitchOtherContent(stateConfig.aboutMe.color, stateConfig.aboutMe.index, stateConfig.aboutMe.animation, stateConfig.aboutMe.bg);
                break;

            case  '/contacts':
                paramToSwitchOtherContent(stateConfig.contacts.color, stateConfig.contacts.index, stateConfig.contacts.animation, stateConfig.contacts.bg);
                break;
        }
    }

}
var checkStates = new State();


/* Change our States */
if (checkStates.state === null && window.location.pathname === '/') {
    history.pushState('home', null, '/');
    hideMainContentChildren();
}

/* Listener to the click somewhere on body */
document.querySelector('body').addEventListener('click', function (event) {

    var target = event.target,
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

/*
 on popstate
 navigation go() and back()
 */


var body = document.body;

var eventCheckStateChanges = function (type) {
    var orig = history[type];
    return function () {
        var rv = orig.apply(this, arguments);
        var event = new Event(type);
        event.arguments = arguments;
        window.dispatchEvent(event);
        return rv;
    };
};

history.pushState = eventCheckStateChanges('pushState');

history.replaceState = eventCheckStateChanges('replaceState');


window.addEventListener('pushState', function (e) {
    var currentPath = window.location.pathname;

    closeNavBarMenu();

    checkStates.parameterSwitchPageContents(currentPath);

    if (currentPath !== '/') {
        hideMainCategories();
    }
});


window.addEventListener('replaceState', function (e) {
    var currentPath = window.location.pathname;
    closeNavBarMenu();
    checkStates.parameterSwitchPageContents(currentPath);
});


window.onload = function () {
    var currentPath = window.location.pathname;

    closeNavBarMenu();
    checkStates.parameterSwitchPageContents(currentPath);

    if (window.location.hash !== '') {
        var hash = window.location.hash.slice(1),
            project = document.getElementById(hash), //project equal to hash
            targetImg = project.querySelector('.prevImg'),
            targetCol = project.parentNode,
            projects = targetCol.parentNode,
            cols = projects.querySelectorAll('.projectsCol');

        projectNavigation.open(cols, targetCol, projects, project, targetImg);
        showElement(targetImg);

        var closeButtons = project.getElementsByClassName('closeButton');
        for (var i = 0; i < closeButtons.length; i++) {
            var button = closeButtons[i];
            showElement(button);
        }
        var img = targetImg.firstChild;

        img.style.width = '97%';
    }
};

