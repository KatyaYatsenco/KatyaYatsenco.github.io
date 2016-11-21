// var openMenuBar = document.querySelector('#menuImg');
// var navBar = document.querySelector('#navList');
//
//     openMenuBar.addEventListener('click', function() {
//         var style = window.getComputedStyle(navBar);
//         // console.log(style.visibility);
//         if (style.visibility === 'hidden') {
//             navBar.style.visibility = 'visible';
//             openMenuBar.src = '../image/close_menu.png';
//         }else {
//             navBar.style.visibility = 'hidden';
//             openMenuBar.src = '../image/menu.png';
//         }
//
//
//     });



var menuImg = document.getElementById('menu_img_box');
var navBar = document.querySelector('#navList');
var menuImg1 = document.getElementById('menu_img1');
var menuImg2 = document.getElementById('menu_img2');
var menuImg3 = document.getElementById('menu_img3');


menuImg.addEventListener('click', function () {
   var style = window.getComputedStyle(navBar);
    if(style.visibility === 'hidden') {
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
