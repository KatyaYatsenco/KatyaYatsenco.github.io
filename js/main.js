//Open target gallery Category
var projects = document.querySelector('.projects'),
    svgContainer = document.querySelector('.svgContainer'),
    derevo = document.getElementById('derevo'),
    galleryMenuCategories = document.querySelector('.galleryMenuCategories'),
    titleGalleryDivision = document.getElementById('titleGalleryDivision'),
// Determine history state
    state = history.state;


function watchPathChanges(callback) {

}
var currentPath = window.location.pathname;

setInterval(function () {
    if (window.location.pathname !== currentPath) {
        currentPath = window.location.pathname;
        watchPathChanges(function () {
            var deleteSlash = currentPath.substr(1);
            return currentPath;

        });
    }
},10);


// On window location I get pathName which correspondence with needed data.


// All functions which start to work when the window on load.
window.onload = function () {

    if (state === null && currentPath === '') {
        history.pushState('home', null, '/');
    }


//Listener to the click somewhere on body
    document.querySelector('body').addEventListener('click', function (event) {
        var target = event.target, // save target category value to variable target.
            data = event.target.id;
        // url = data + ".html";

        //Determine history state, when you open page first time
        function historyState() {
            switch (state) {
                case null:
                    history.pushState(currentPath, null, currentPath);
                    break;

                case 'design':
                case 'painting':
                case 'graphic':
                case 'digitalArt':
                case 'others':
                case '_3d':
                    openCategory(target);
                    break;
                case 'aboutMe':
                    openAboutMe();
                    break;
                case 'contacts':
                    openContacts();
                    break;
                default:
                    // console.log("on this click I don't have activity.(switch(state))");
                    break;
            }

            return state;
        }

        historyState();

        // switch (target.className) {
        //
        //     case 'linkGalleryCategory':
        //         openCategory(target);
        //         history.pushState(data, null, data);
        //         break;
        //
        //     case 'logo_name':
        //         history.pushState('home', null, '/');
        //         goHome(target);
        //         break;
        //     default:
        //         // console.log("on this click I don't have activity.(switch(target.className))");
        //         break;
        // }
        //Nav bar menu
        switch (target.id) {

            case 'home':
                history.replaceState('home', null, '/');
                goHome(target);
                break;

            case 'aboutMe':
                openAboutMe();
                history.pushState(data, null, data);
                break;

            case 'contacts':
                openContacts();
                history.pushState(data, null, data);
                console.log('you clicked me');
                console.log(target.id);
                break;
            default:
                // console.log("on this click I don't have activity.(switch(target.id))");
                break;
        }

    });

};

// Open target category
function openCategory(target) {
    closeAll();
    var textTitleCategory = target.innerHTML;
    titleGalleryDivision.style.display = 'flex';
    projects.style.display = 'flex';
    titleGalleryDivision.innerHTML = textTitleCategory;
    hideInfoHomePage();
}

// Close target category
function closeCategory() {
    titleGalleryDivision.style.display = 'none';
    projects.style.display = 'none';
}

// Open title page
function goHome(target) {
    closeAll();
    svgContainer.style.display = 'block';
    galleryMenuCategories.style.display = 'block';
    closeCategory();
}

// Hide information from the home page
function hideInfoHomePage() {
    svgContainer.style.display = 'none';
    galleryMenuCategories.style.display = 'none';
}

// Open page about me
var aboutMeInfo = document.getElementById('aboutMeInfo');

function openAboutMe() {
    closeAll();
    hideInfoHomePage();
    aboutMeInfo.style.display = 'flex';
}

// Close information about me
function closeAboutMe() {
    aboutMeInfo.style.display = 'none';
}

// Open contacts
var contactsInfo = document.getElementById('contactsInfo');

function openContacts() {
    closeAll();
    contactsInfo.style.display = 'flex';
    hideInfoHomePage();
}

// Close contacts
function closeContacts() {
    contactsInfo.style.display = 'none';
}

// Close all
function closeAll() {
    closeContacts();
    closeAboutMe();
    closeCategory();
    hideInfoHomePage();
    // console.log('close opened division');
}
// Open project
// var projectsCols = document.querySelectorAll('.projectsCol');
// var bigImgElements = document.querySelectorAll('.bigImg');

//Function open project
// // function openProject
// project.forEach(function (elem) {
//     elem.addEventListener('click', function () {
//         // debugger;
//
//         var target = this;    // save target project
//         var parentTargetNode = target.parentNode;
//         projectsCols.forEach(function (elem) {
//             if (parentTargetNode !== elem) {
//                 elem.style.display = 'none';
//             }
//             else {
//                 elem.style.width = '100%';
//             }
//         });
//         project.forEach(function (elem) {
//             if (target !== elem) {
//                 elem.style.display = 'none';
//             }
//         });
//         target.getElementsByClassName('littleImg')[0].style.display = 'none';  // hide little target img
//
//         bigImgElements.forEach(function (elem) {
//
//             if (elem.parentNode == target) {
//                 elem.style.display = 'flex';
//             }
//             else {
//                 elem.style.display = 'none';
//             }
//         })
//
//     });
// });
// bigImgElements.forEach(function (elem) {
//
//     elem.addEventListener('click', function () { //Close Big Picture
//         var bigImgsTargetProject = this.parentNode.querySelectorAll('.bigImg');
//
//         console.log('click');
//         bigImgsTargetProject.forEach(function (elem) {
//             console.log(elem);
//             elem.style.display = 'none';                  // !!!!problem
//             console.log(elem.style.display);  // none
//
//         });
//
//         projectsCols.forEach(function (projCol) {
//             // console.log(projectsCols);
//             // projCol.style.width = '30%';
//             // projCol.style.display = 'flex';
//         });
//
//         project.forEach(function (proj) {
//             // proj.style.display = 'flex';
//             // console.log(proj);
//         });
//     });
// });


// ==============
//
// openProject(); old version

//Gallery Menu
// var galleryMenuCategories = document.getElementsByClassName('menuCategories');
// var galleryMenuPageBackground = document.getElementsByClassName('main_background')[0];
// // debugger;
//
// var category;
// for (var i = 0; i < galleryMenuCategories.length; i++) {
//     category = galleryMenuCategories[i];
//     var categoryMouseover = category.addEventListener('mouseover', function categoryInFocus() {
//         var findLindCurrentCategory = this.getElementsByTagName('a')[0];
//         findLindCurrentCategory.style.display = 'block';
//         if(findLindCurrentCategory.id === 'section3D') {
//             galleryMenuPageBackground.style.backgroundImage = 'url("../image/gallery_background_3d.png")';
//         }
//         else if(findLindCurrentCategory.id === 'sectionPainting') {
//             galleryMenuPageBackground.style.backgroundImage = 'url("../image/gallery_background_painting.png")';
//         }
//         else {
//             galleryMenuPageBackground.style.backgroundImage = 'url("../image/main_background.jpg")';
//
//         }
//
//     });
//     var categoryMouseoout = category.addEventListener('mouseout', function categoryInFocus() {
//         var findLindCurrentCategory = this.getElementsByTagName('a')[0];
//         findLindCurrentCategory.style.display = 'none';
//         if(findLindCurrentCategory.id === 'section3D') {
//             galleryMenuPageBackground.style.backgroundImage = 'url("../image/main_background.jpg")';
//
//         }
//         else if(findLindCurrentCategory.id === 'sectionPainting') {
//             galleryMenuPageBackground.style.backgroundImage = 'url("../image/main_background.jpg")';
//
//         }
//     })
// }

