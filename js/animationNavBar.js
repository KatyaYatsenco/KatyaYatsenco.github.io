var menuIcon = document.getElementById('menuIcon');

//Navigation menu
menuIcon.addEventListener('click', function () {
    var style = window.getComputedStyle(navBar);
    if (style.visibility === 'hidden') {
        navBar.style.visibility = 'visible';
        navMenuImg1.style.animation = 'rotateImg1 0.3s';
        navMenuImg1.style.transform = 'rotate(40deg)';
        navMenuImg1.style.marginTop = '17px';
        navMenuImg2.style.display = 'none';
        navMenuImg3.style.animation = 'rotateImg3 0.3s';
        navMenuImg3.style.transform = 'rotate(-40deg)';
        navMenuImg3.style.marginTop = '-10px';
    }
    else {
        navBar.style.visibility = 'hidden';
        navMenuImg1.style.animation = 'backRotateImg1 0.3s';
        navMenuImg1.style.transform = 'rotate(0deg)';
        navMenuImg1.style.marginTop = '0';
        var showImg2 = delay(show,200);
        showImg2(navMenuImg2);
        function show(navMenuImg2) {
            navMenuImg2.style.display = 'flex';
        }
        navMenuImg3.style.animation = 'backRotateImg3 0.3s';
        navMenuImg3.style.transform = 'rotate(0deg)';
        navMenuImg3.style.marginTop = '0';
    }
});


function delay(show, ms) {

    return function() {
        var savedThis = this;
        var savedArgs = arguments;

        setTimeout(function() {
            show.apply(savedThis, savedArgs);
        }, ms);
    };

}

