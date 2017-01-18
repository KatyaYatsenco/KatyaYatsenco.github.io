var projects = document.querySelector('.projects'),
    svgContainer = document.querySelector('.svgContainer'),
    derevo = document.getElementById('derevo'), // used in another file
    galleryMenuCategories = document.querySelector('.galleryMenuCategories'),
    titleGalleryDivision = document.querySelectorAll('.titleGalleryDivision'),
    mainContent = document.querySelector('.mainContent'),
    mainContentChildren = mainContent.children,

    parallax = document.querySelectorAll('.parallax'),

    logo = document.querySelector('.logo_name'),
    navigationLinks = document.querySelectorAll('.navLinks'),
    navMenuImg1 = document.getElementById('menu_img1'),
    navMenuImg2 = document.getElementById('menu_img2'),
    navMenuImg3 = document.getElementById('menu_img3'),
    linkGalleryCategory = document.querySelectorAll('titleGalleryCategory'),

    navBar = document.querySelector('#navList');


/* Categories pages and contact and about me pages */
categoryDesign = document.getElementById('categoryDesign'),
    categoryPainting = document.getElementById('categoryPainting'),
    categoryGraphic = document.getElementById('categoryGraphic'),
    categoryDigitalArt = document.getElementById('categoryDigitalArt'),
    categoryOthers = document.getElementById('categoryOthers'),
    category3d = document.getElementById('category3d'),
    categoryAboutMe = document.getElementById('aboutMeInfo'),
    categoryContacts = document.getElementById('contactsInfo'),

    /* Array categories page */
    categoriesPage = [categoryPainting, categoryDesign, categoryGraphic, categoryDigitalArt, categoryOthers, category3d, categoryAboutMe, categoryContacts],

    /* Determine history state */
    state = history.state;

//Check current pathName
// setInterval(function () {
//     if (window.location.pathname !== currentPath) {
//         currentPath = window.location.pathname.substr(1);
//         watchPathChanges(function () {
//             var deleteSlash = currentPath;
//             return currentPath;
//
//         });
//     }
//
// }, 10);

/* I check if mainContent children have class 'visible'  - I remove class 'visible'. */
function hideMainContentChildren() {
    for (var i = 0; i < mainContentChildren.length; i++) {
        if (mainContentChildren[i].classList.contains('visible')) {
            mainContentChildren[i].classList.remove('visible');
        }
    }
}

/* Change our States */
if (state === null && window.location.pathname === '/') {
    history.pushState('home', null, '/');
    hideMainContentChildren();
}

/* Listener to the click somewhere on body */
document.querySelector('body').addEventListener('click', function (event) {
    var target = event.target,
        data = event.target.id;

    if (data === 'home' || data === 'home_page') {
        history.pushState('home', null, '/');
        // hideMainContentChildren();
    }
    else if (data === 'aboutMe') {
        history.pushState(data, null, data);
    }
    else if (data === 'contacts') {
        history.pushState(data, null, data);
    }
    else if (data === 'design') {
        history.pushState(data, null, data);
    }
    else if (data === 'painting') {
        history.pushState(data, null, data);
    }
    else if (data === 'graphic') {
        history.pushState(data, null, data);
    }
    else if (data === 'digitalArt') {
        history.pushState(data, null, data);
    }
    else if (data === 'others') {
        history.pushState(data, null, data);
    }
    else if (data === '_3d') {
        history.pushState(data, null, '3d');
    }
});

/* History navigation 'go()' and 'back()' */
window.onpopstate = function (event) {

    console.log(event.state);
};
// window.history.go();
// window.history.back();

function changeBackgroundIntoParallax(url) {
    parallax.forEach(function (elem) {
        elem.style.backgroundImage = url;
    })
}

var body = document.getElementsByTagName('body')[0];

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


function changeTextColor(color) {
    logo.style.color = color;
    titleGalleryDivision.forEach(function (elem) {
        elem.style.color = color;
    });
    navigationLinks.forEach(function (elem) {
        elem.style.color = color;
    });
    linkGalleryCategory.forEach(function (elem) {
        elem.style.color = color;
    });
    // if(color === 'grey') {
    //     navMenuImg1.style.backgroundImage = 'url(../image/menu_img_grey.png)';
    //     navMenuImg2.style.backgroundImage = 'url(../image/menu_img_grey.png)';
    //     navMenuImg3.style.backgroundImage = 'url(../image/menu_img_grey.png)';
    // }
    if (color === 'white') {
        navMenuImg1.style.backgroundImage = 'url(../image/menu_img_white.png)';
        navMenuImg2.style.backgroundImage = 'url(../image/menu_img_white.png)';
        navMenuImg3.style.backgroundImage = 'url(../image/menu_img_white.png)';
    }
    else if (color === 'black') {
        navMenuImg1.style.backgroundImage = 'url(../image/menu_img_black.png)';
        navMenuImg2.style.backgroundImage = 'url(../image/menu_img_black.png)';
        navMenuImg3.style.backgroundImage = 'url(../image/menu_img_black.png)';
    }
}

function parameterSwitchPageContents(currentPath) {

    if (currentPath === '/') {
        changeTextColor('white');
        openMainCategories();
        hideMainContentChildren();
        changeBackgroundIntoParallax('url(../image/background_main_page.png)');
    }
    else if (currentPath === '/design') {
        changeTextColor('white');
        categoriesPage[1].classList.add('visible');
        changeBackgroundIntoParallax('url(../image/gallery_background_design.png)');
    }
    else if (currentPath === '/painting') {
        changeTextColor('white');
        categoriesPage[0].classList.add('visible');
        changeBackgroundIntoParallax('url(../image/gallery_background_painting.png)');
    }
    else if (currentPath === '/graphic') {
        changeTextColor('white');
        categoriesPage[2].classList.add('visible');
        changeBackgroundIntoParallax('url(../image/gallery_background_graphic.png)');
    }
    else if (currentPath === '/digitalArt') {
        changeTextColor('white');
        categoriesPage[3].classList.add('visible');
        changeBackgroundIntoParallax('url(../image/gallery_background_digital_art.png)');
    }
    else if (currentPath === '/others') {
        changeTextColor('white');
        categoriesPage[4].classList.add('visible');
        changeBackgroundIntoParallax('url(../image/gallery_background_others.png)');
    }
    else if (currentPath === '/3d') {
        changeTextColor('black');
        categoriesPage[5].classList.add('visible');
        changeBackgroundIntoParallax('url(../image/gallery_background_3d.png)');
    }
    else if (currentPath === '/aboutMe') {
        changeTextColor('white');
        hideMainContentChildren();
        categoriesPage[6].classList.add('visible');
        changeBackgroundIntoParallax('url(../image/gallery_background_about_me.png)');

    }
    else if (currentPath === '/contacts') {
        changeTextColor('white');
        hideMainContentChildren();
        categoriesPage[7].classList.add('visible');
        changeBackgroundIntoParallax('url(../image/gallery_background_contacts.png)');
    }
}

window.addEventListener('pushState', function (e) {
    var currentPath = window.location.pathname;
    if (navBar.style.visibility === 'visible') { //Close nav bar menu if it is open, when you switch pages
        menuIcon.click();
    }
    parameterSwitchPageContents(currentPath);
    if (currentPath !== '/') {
        hideMainCategories();
    }
});

window.addEventListener('replaceState', function (e) {
    var currentPath = window.location.pathname;
    if (navBar.style.visibility === 'visible') { //Close nav bar menu if it is open, when you switch pages
        menuIcon.click();
    }
    parameterSwitchPageContents(currentPath);
});

window.onload = function () {
    var currentPath = window.location.pathname;
    if (navBar.style.visibility === 'visible') { //Close nav bar menu if it is open, when you switch pages
        menuIcon.click();
    }
    parameterSwitchPageContents(currentPath);

    if (window.location.hash !== '') {
        var hash = window.location.hash.slice(1),
            project = document.getElementById(hash), //project equal to hash
            colThisProject = project.parentNode,
            thisProjects = colThisProject.parentNode,
            cols = thisProjects.querySelectorAll('.projectsCol');

        cols.prototype = Object.create(Array.prototype);
        cols.forEach(function (elem) {
            if (colThisProject === elem) {
                elem.style.width = '98%';
            }
            else {
                elem.style.width = 0;
            }
        });

        findImgs(thisProjects, 'littleImg', hideElement);

        findImgs(project, 'bigImg', showElement);
        console.log(project);
    }
};

//-------------------
//Functions open and hide main gallery categories menu
function hideMainCategories() {

    if (svgContainer.classList.contains('visible') || galleryMenuCategories.classList.contains('visible')) {
        svgContainer.classList.remove('visible');
        galleryMenuCategories.classList.remove('visible');
    }
}

function openMainCategories() {
    body.style.backgroundImage = 'url(../image/background_main_page.png)';
    if (svgContainer.classList.contains('hide') || galleryMenuCategories.classList.contains('hide')) {
        svgContainer.classList.remove('hide');
        galleryMenuCategories.classList.remove('hide');
        svgContainer.classList.add('visible');
        galleryMenuCategories.classList.add('visible');
    }
    else {
        svgContainer.classList.add('visible');
        galleryMenuCategories.classList.add('visible');
    }
}

// Function open and hide project
function findImgs(collectionProjectsTargetCategory, typeImg, operation) {
    var desiredTypeImgs = collectionProjectsTargetCategory.getElementsByClassName(typeImg); //Collection

    desiredTypeImgs.prototype = Object.create(Array.prototype); //Add Array prototype

    for (var k = 0; k < desiredTypeImgs.length; k++) {
        var desireTypeImg = desiredTypeImgs[k];
        operation(desireTypeImg);
    }
}

function hideElement(element) {
    if (element.classList.contains('visible')) {
        element.classList.remove('visible');
    }
    else {
        element.classList.add('hide');
    }
}

function showElement(element) {
    if (element.classList.contains('hide')) {
        element.classList.remove('hide');
    }
    else {
        element.classList.add('visible');
    }
}

//Listen when you click on prev little img to increase size prev img and than replace prev img to the big imgs
mainContent.addEventListener('click', function (event) {

    var targetElement = event.target,
        targetImg = event.target.parentNode, //have class 'littleImg' or 'bigImg'
        thisProject = targetImg.parentNode,
        thisProjectId = thisProject.id,
        thisProjectCol = thisProject.parentNode,
        collectionThisProjectChildren = thisProject.children,
        thisProjects = thisProjectCol.parentNode,
        data = window.location.pathname,

        thisProjectsListCols = thisProjects.querySelectorAll('.projectsCol');


    //if you click on little img - you open bigImgs this project
    if (targetImg.classList.contains('littleImg')) {

        collectionThisProjectChildren.prototype = Object.create(Array.prototype);
        // Replace 3 col to 1
        thisProjectsListCols.forEach(function (elem) {
            if (thisProjectCol === elem) {
                elem.style.width = '98%';
            }
            else {
                elem.style.width = 0;
            }
        });

        findImgs(thisProjects, 'littleImg', hideElement);

        findImgs(thisProject, 'bigImg', showElement);

        history.pushState('project' + thisProjectId, null, '#' + thisProjectId); // Add window location hash with number this project

    }

    else if (targetImg.classList.contains('bigImg') || targetImg.classList.contains('titleGalleryDivision')) {

        //Replace 1 col to 3
        thisProjectsListCols.forEach(function (elem) {
            elem.style.width = '30%';
        });

        findImgs(thisProjects, 'littleImg', showElement);

        findImgs(thisProject, 'bigImg', hideElement);

        history.replaceState(data.slice(1), null, data);

    }


});





