//Navigation menu
var menuImg = document.getElementById('menu_img_box');
var navBar = document.querySelector('#navList');
var menuImg1 = document.getElementById('menu_img1');
var menuImg2 = document.getElementById('menu_img2');
var menuImg3 = document.getElementById('menu_img3');

menuImg.addEventListener('click', function () {
    var style = window.getComputedStyle(navBar);
    if (style.visibility === 'hidden') {
        navBar.style.visibility = 'visible';
        menuImg1.classList.add('rotate_img1');
        menuImg2.classList.add('visibility_hidden');
        menuImg3.classList.add('rotate_img3');
    }
    else {
        navBar.style.visibility = 'hidden';
        menuImg1.classList.remove('rotate_img1');
        menuImg2.classList.remove('visibility_hidden');
        menuImg3.classList.remove('rotate_img3');
    }
});

// open target category
var galleryMenuLinks = document.querySelectorAll('.link');
var svgSliceOfWood = document.querySelector('#svgSliceOfWood');
var mainContent = document.querySelector('.position_center_flex');
var containerContents = document.querySelector('.container_contents');
var projects = document.querySelector('.projects');
var arr = [];
for (var i = 0; i < galleryMenuLinks.length; i++) {
    var link = galleryMenuLinks[i];

    arr.push(link);
    link.addEventListener('click', function () {
        var target = this;
        if (!newDiv) {
            var newDiv = document.createElement('div');
        }
        newDiv.setAttribute('id', 'titleGalleryDivision');
        containerContents.insertBefore(newDiv, projects);
        target.setAttribute('class', 'positionStatic');

        arr.forEach(function (item) {
            if (item === target) {
                newDiv.appendChild(target);
                target.setAttribute('class', 'styleTitleGallery');
                svgSliceOfWood.style.display = 'none';
                projects.style.display = 'flex';
            }
            else {
                item.style.display = 'none';
            }
        });
    });
}


// Open project
var projectsImg = document.querySelectorAll('.project_img');
// function openProject() {
var arrProjectsImg = [];
for (var k = 0; k < projectsImg.length; k++) {
    var projectImg = projectsImg[k];
    arrProjectsImg.push(projectImg);
}

arrProjectsImg.forEach(function (item) {
    console.log(item);
    item.addEventListener('click', function () {
        var target = this;
        var targetChild = target.childNodes[3];
        if (item === target) {
            targetChild.style.width = '900px';
        }
        else {
            item.style.display = 'none';
            // console.log(item);
        }
    });
});

// Navigation Links About Me
var navigationLinksAboutMe = document.querySelector('#navigationLinkAboutMe');
var aboutMeInfo = document.querySelector('.aboutMeInfo');
navigationLinksAboutMe.addEventListener('click', function () {
    mainContent.style.display = 'none';
    if (!newDiv) {
        var newDiv = document.createElement('div');
        newDiv.setAttribute('id', 'titleAboutMe');
        aboutMeInfo.style.display = 'flex';
    }
});


//Navigation Links Contacts
var navigationLinksContactsInfo = document.querySelector('#navigationLinkContacts');
var contactsInfo = document.querySelector('.contactsInfo');
navigationLinksContactsInfo.addEventListener('click', function () {
    mainContent.style.display = 'none';
    if (!newDiv) {
        var newDiv = document.createElement('div');
        newDiv.setAttribute('id', 'titleAboutMe');
        contactsInfo.style.display = 'flex';
    }
});

// }
//
// openProject();

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





