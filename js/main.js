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
var galleryMenuLinks = document.querySelectorAll('.linkGallerySubcategory');
var svgDerevo = document.querySelector('#derevo');
var mainContent = document.querySelector('.position_center_flex');
var containerContents = document.querySelector('.mainContent');
var projects = document.querySelector('.projects');
var galleryMenuCategories = document.querySelector('.galleryMenuCategories');
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
                svgDerevo.style.display = 'none';
                galleryMenuCategories.style.display = 'none';
                projects.style.display = 'flex';
            }
            else {
                item.style.display = 'none';
            }
        });
    });
}


// Open project
var project = document.querySelectorAll('.project');
var projectsCols = document.querySelectorAll('.projectsCol');
var bigImgElements = document.getElementsByClassName('bigImg');


// function openProject
project.forEach(function (elem) {
    elem.addEventListener('click', function () {
        var target = this;    // save target project
        var parentTargetNode = target.parentNode;
        projectsCols.forEach(function (elem) {
            if (parentTargetNode !== elem) {
                elem.style.display = 'none';
            }
            else {
                elem.style.width = '100%';
            }
        });
        project.forEach(function (elem) {
            if (target !== elem) {
                elem.style.display = 'none';
            }

        });
        target.getElementsByClassName('littleImg')[0].style.display = 'none';  // hide little target img
        for (var l = 0; l < bigImgElements.length; l++) {
            var bigImg = bigImgElements[l];
            if (bigImg.parentNode == target) {
                bigImg.style.display = 'flex';
            }
        }

    });
});
for (var l = 0; l < bigImgElements.length; l++) {
    var bigImg = bigImgElements[l];
    bigImg.addEventListener('click', function () { //Close Big Picture
        console.log('click');

        projectsCols.forEach(function (projCol) {
            // console.log(projectsCols);
            // projCol.style.width = '30%';
            // projCol.style.display = 'flex';
        });
        for (var b = 0; b < bigImgElements.length; b++) {
            var bigImgs = bigImgElements[b];
            bigImgs.style.display = 'none';
        }
        project.forEach(function (proj) {
            // proj.style.display = 'flex';
            // console.log(proj);
        });
    });

}
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


//Main animation when window onload
var derevo = document.querySelector('#derevo');
var str0 = derevo.querySelectorAll('.str0');
var str1 = derevo.querySelectorAll('.str1');

function changeColor(color) {
    str0.forEach(function (str) {
        str.style.fill = color;
    });
    str1.forEach(function (str) {
        str.style.stroke = color;
    });
}
var body = document.querySelector("body");


var epilepsy = setInterval(function () {
    changeColor(getRandomColor());
    bodyBlendMode();
}, 100);

//Twinkle background and tree
setTimeout(function () {
    bodyBlendMode();
    body.style.backgroundColor = 'none';
    body.style.backgroundBlendMode = 'normal';
    document.querySelector('.bigContainerForSvg').style.overflow = 'auto';
    clearInterval(epilepsy);
    changeColor('#fff');
}, 4000);


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var blendModes = [
    "normal",
    "multiply",
    "screen",
    "overlay",
    "darken",
    "lighten",
    "color-dodge",
    "color-burn",
    "hard-light",
    "soft-light",
    "difference",
    "exclusion",
    "hue",
    "saturation",
    "color",
    "luminosity"
];

function bodyBlendMode() {
    mode = blendModes[Math.floor(Math.random() * blendModes.length)];
    body.style.backgroundBlendMode = mode;
    body.style.backgroundColor = getRandomColor();
}


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

