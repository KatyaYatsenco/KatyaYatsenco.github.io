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

//Gallery Menu
var galleryMenuCategories = document.getElementsByClassName('menuCategories');
var galleryMenuPageBackground = document.getElementsByClassName('main_background')[0];
// debugger;

var category;
for (var i = 0; i < galleryMenuCategories.length; i++) {
    category = galleryMenuCategories[i];
    var categoryMouseover = category.addEventListener('mouseover', function categoryInFocus() {
        var findLindCurrentCategory = this.getElementsByTagName('a')[0];
        findLindCurrentCategory.style.display = 'block';
        if(findLindCurrentCategory.id === 'section3D') {
            galleryMenuPageBackground.style.backgroundImage = 'url("../image/gallery_background_3d.png")';
        }
        else {
            galleryMenuPageBackground.style.backgroundImage = 'url("../image/main_background.jpg")';
        }

    });
    var categoryMouseoout = category.addEventListener('mouseout', function categoryInFocus() {
        var findLindCurrentCategory = this.getElementsByTagName('a')[0];
        findLindCurrentCategory.style.display = 'none';
        if(findLindCurrentCategory.id === 'section3D') {
            galleryMenuPageBackground.style.backgroundImage = 'url("../image/main_background.jpg")';
        }
    })
}





