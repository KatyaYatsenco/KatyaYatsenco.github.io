menuIcon = document.getElementById('menuIcon'),
    navBar = document.querySelector('#navList'),
    menuImg1 = document.getElementById('menu_img1'),
    menuImg2 = document.getElementById('menu_img2'),
    menuImg3 = document.getElementById('menu_img3');

//Navigation menu
menuIcon.addEventListener('click', function () {
    var style = window.getComputedStyle(navBar);
    if (style.visibility === 'hidden') {
        navBar.style.visibility = 'visible';
        menuImg1.style.animation = 'rotateImg1 0.5s';
        menuImg1.style.transform = 'rotate(40deg)';
        menuImg1.style.marginTop = '17px';
        menuImg2.style.display = 'none';
        menuImg3.style.animation = 'rotateImg3 0.5s';
        menuImg3.style.transform = 'rotate(-40deg)';
        menuImg3.style.marginTop = '-10px';
    }
    else {
        navBar.style.visibility = 'hidden';
        menuImg1.style.animation = 'none';
        menuImg1.style.transform = 'rotate(0deg)';
        menuImg1.style.marginTop = '0';
        menuImg2.style.display = 'flex';
        menuImg3.style.cssText = 'animation:none';
        menuImg3.style.transform = 'rotate(0deg)';
        menuImg3.style.marginTop = '0';
    }
});
