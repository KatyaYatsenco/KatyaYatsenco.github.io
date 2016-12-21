//Open target gallery Category
var projects = document.querySelector('.projects'),
    svgContainer = document.querySelector('.svgContainer'),
    galleryMenuCategories = document.querySelector('.galleryMenuCategories');


function getThisState() {
    var pathName = window.location.pathname;
    var deleteSlash = pathName.substr(1);
    return deleteSlash;
}
var getState = getThisState();

window.onload = function () {
    if (history.state === null && getState === '') {
        history.pushState('home', null, '/');
    }




    document.querySelector('body').addEventListener('click', function (event) {
        var target = event.target; // save target category value to variable target.
        console.log(target);
        var data = event.target.id;
        // url = data + ".html";

        switch (target.className) {
            case 'linkGalleryCategory':
                openCategory(target);
                history.pushState(data, null, data);
                break;

            case 'logo_name':
                history.pushState('home', null, '/');
                break;

            case 'home':
                console.log('you clicked home');
                // history.pushState('home', null, '/');
                break;
        }

        function openCategory(target) {
            var titleGalleryDivision = document.getElementById('titleGalleryDivision');

            var titleCategory = target.innerHTML;
            titleGalleryDivision.innerHTML = titleCategory;
            target.setAttribute('class', 'styleTitleGallery');

            svgContainer.style.display = 'none';

            galleryMenuCategories.style.display = 'none';

            projects.style.display = 'flex';
        }

        //Determine history state
        function historyState() {
            // console.log(history.state);
            var state = history.state;
            if (state === null) {
                // todo create state object manually if it's not defined in history based on current page url
                function getThisState() {
                    var pathName = window.location.pathname;
                    var deleteSlash = pathName.substr(1);
                    return deleteSlash;
                }


                history.replaceState(getState, null, getState);

            }
            return state;
        }

        var CategoryStates = ['design', 'painting', 'graphic', 'digitalArt', 'others', '_3d'];

        CategoryStates.forEach(function (value) {
            // if (history.state === value) {
            // var targetCategory = document.getElementById(value);
            //     openCategory(targetCategory);
            // }
        });


    });


};


// // Navigation Links About Me
// var navigationLinksAboutMe = document.querySelector('#aboutMe');
// var aboutMeInfo = document.querySelector('.aboutMeInfo');
// navigationLinksAboutMe.addEventListener('click', function () {
//     mainContent.style.display = 'none';
//     if (!newDiv) {
//         var newDiv = document.createElement('div');
//         newDiv.setAttribute('id', 'titleAboutMe');
//         aboutMeInfo.style.display = 'flex';
//     }
// });


// //Navigation Links Contacts
// var navigationLinksContactsInfo = document.querySelector('#contacts');
// var contactsInfo = document.querySelector('.contactsInfo');
// navigationLinksContactsInfo.addEventListener('click', function () {
//     mainContent.style.display = 'none';
//     if (!newDiv) {
//         var newDiv = document.createElement('div');
//         newDiv.setAttribute('id', 'titleAboutMe');
//         contactsInfo.style.display = 'flex';
//     }
// });


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

