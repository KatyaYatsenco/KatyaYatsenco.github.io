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
    document.querySelector('.svgContainer').style.overflow = 'auto';
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

// On css animation
var svgContainer = document.querySelector('.svgContainer');
svgContainer.style.overflow = 'hidden';
var navigation = document.querySelector('.navigation');
navigation.style.animation = 'showNavBarMenu 4.5s';
var logoName = document.querySelector('.logo_name');
logoName.style.animation = 'appearanceLogo 3s';
var gallerySubcategoryDesign = document.querySelector('#design');
gallerySubcategoryDesign.style.animation = 'moveDesignLink 4.1s';
var gallerySubcategoryPainting = document.querySelector('#painting');
gallerySubcategoryPainting.style.animation = 'movePaintingLink 3.3s';
var gallerySubcategoryGraphic = document.querySelector('#graphic');
gallerySubcategoryGraphic.style.animation = 'moveGraphicLink 4.4s';
var gallerySubcategoryDigitalArt = document.querySelector('#digitalArt');
gallerySubcategoryDigitalArt.style.animation = 'moveDigitalArtLink 4.2s';
var gallerySubcategoryOthers = document.querySelector('#others');
gallerySubcategoryOthers.style.animation = 'moveOthersLink 5s';
var gallerySubcategory3d = document.querySelector('#_3d');
gallerySubcategory3d.style.animation = 'move3dLink 4.7s';
var derevo = document.querySelector('#derevo');
derevo.style.animation = 'derevoZoom 2s';


