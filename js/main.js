var openMenuBar = document.querySelector('#menuImg');
var navBar = document.querySelector('#navList');

    openMenuBar.addEventListener('click', function() {
        var style = window.getComputedStyle(navBar);
        console.log(style.visibility);
        if (style.visibility === 'hidden') {
            navBar.style.visibility = 'visible';
            openMenuBar.src = '../image/close_menu.png';
        }else {
            navBar.style.visibility = 'hidden';
            openMenuBar.src = '../image/menu.png';
        }


    });



