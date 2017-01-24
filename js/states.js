/* Categories pages and contact and about me pages */

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

        onLoadAnimation.stopEpilepsyAnimation(10); //on load animation
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

        onLoadAnimation.stopEpilepsyAnimation(10);  //on load animation
        changeTextColor(textColor);
        hideMainContentChildren();
        categoriesPage[categoriesPageIndex].classList.add('visible');
        body.style.animation = animationName;
        body.style.backgroundImage = bodyBgImg;

    }

    // var stateConfig =
    //     {
    //         'design': {
    //             color: 'white',
    //             index: 1,
    //             animation: 'designBg 2s',
    //             bg: 'url(../image/gallery_background_design.png)'
    //         }
    //     };


    this.parameterSwitchPageContents = function (currentPath) {
        switch (currentPath) {

            case '/':
                changeTextColor('white');
                openMainCategories();
                hideMainContentChildren();
                body.style.backgroundImage = 'url(../image/background_main_page.png)';
                break;

            case '/design':
                paramToSwitchCategoriesContent('white', 1, 'designBg 2s', 'url(../image/gallery_background_design.png)');
                break;

            case '/painting':
                paramToSwitchCategoriesContent('white', 0, 'paintingBg 2s', 'url(../image/gallery_background_painting.png)');
                break;

            case '/graphic':
                paramToSwitchCategoriesContent('white', 2, 'graphicBg 2s', 'url(../image/gallery_background_graphic.png)');
                break;

            case  '/digitalArt':
                paramToSwitchCategoriesContent('white', 3, 'digitalArtBg 2s', 'url(../image/gallery_background_digital_art.png)');
                break;

            case  '/others':
                paramToSwitchCategoriesContent('white', 4, 'othersBg 2s', 'url(../image/gallery_background_others.png)');
                break;

            case  '/3d':
                paramToSwitchCategoriesContent('black', 5, '_3dBg 2s', 'url(../image/gallery_background_3d.png)');
                break;

            case  '/aboutMe':
                paramToSwitchOtherContent('white', 6, 'aboutMeBg 2s', 'url(../image/gallery_background_about_me.png)');
                break;

            case  '/contacts':
                paramToSwitchOtherContent('white', 7, 'contactsBg 2s', 'url(../image/gallery_background_contacts.png)');
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
            targetCol = project.parentNode,
            projects = targetCol.parentNode,
            cols = projects.querySelectorAll('.projectsCol');

        projectNavigation.openTargetProject(cols, targetCol, projects, project);
    }
};

