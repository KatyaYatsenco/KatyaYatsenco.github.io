import {getRandomColor} from '../onLoadPage/randomColors';

const svgContainer = document.querySelector('.svgContainer');
svgContainer.style.overflow = 'hidden !important';


function randomLinksAnimation(link) {
    link.style.color = getRandomColor();
}

const allLinks = [];

const linksGalleryCategories = document.querySelectorAll('.linkGalleryCategory');
linksGalleryCategories.forEach((elem) => allLinks.push(elem));

const logo = document.querySelector('.logo_name');
allLinks.push(logo);

const navLinks = document.querySelectorAll('.navLinks');
navLinks.forEach((elem) => allLinks.push(elem));

const titleCategories = document.querySelectorAll('.titleCategories');
titleCategories.forEach((elem) => allLinks.push(elem));


const derevo = document.getElementById('derevo');

setInterval(() => {
    derevo.style.animation = Math.floor(Math.random() * 2) + ' ' + (Math.floor(Math.random() * 3) + "s");
}, Math.floor(Math.random() * 4000));


const digitalArtLink = document.getElementById('digitalArt'),
    painting = document.getElementById('painting'),
    graphic = document.getElementById('graphic'),
    _3d = document.getElementById('_3d'),
    others = document.getElementById('others'),
    design = document.getElementById('design');
const categoryLinks = [];
categoryLinks.push(digitalArtLink, painting, graphic, _3d, others, design);

setTimeout(()=>{
    setInterval(animateCategoryLink, Math.floor(Math.random() * 3000));
},5000);

setTimeout(() => {
    setInterval(function () {
        derevo.style.animation = 'derevoAnimation' + (Math.floor(Math.random() * 8)) + ' 0.' + (Math.floor(Math.random() * 9)) + 's';
    }, Math.floor(Math.random() * 5000))
}, 5000);

// setInterval(function () {
//     let link = allLinks[Math.floor(Math.random() * 10)];
//     let linkColor = allLinks[Math.floor(Math.random() * 10)].style.color;
//     randomLinksAnimation(link);
//
//     setTimeout(function () {
//         link.style.color = linkColor;
//     },500)
//
// }, Math.floor(Math.random() * 6000));


function animateCategoryLink() {
    const link = categoryLinks[Math.floor(Math.random() * 6)];
    switch (link.id) {
        case 'digitalArt':
            link.style.animation = 'moveDigitalArtLink' + (Math.floor(Math.random() * 2)) + ' 0.' + (Math.floor(Math.random() * 3)) + 's';
            break;
        case 'painting':
            link.style.animation = 'movePaintingLink' + (Math.floor(Math.random() * 2)) + ' 0.' + (Math.floor(Math.random() * 3)) + 's';
            break;
        case 'graphic':
            link.style.animation = 'moveGraphicLink' + (Math.floor(Math.random() * 2)) + ' 0.' + (Math.floor(Math.random() * 3)) + 's';
            break;
        case '_3d':
            link.style.animation = 'move3dLink' + (Math.floor(Math.random() * 2)) + ' 0.' + (Math.floor(Math.random() * 3)) + 's';
            break;
        case 'others':
            link.style.animation = 'moveOthersLink' + (Math.floor(Math.random() * 2)) + ' 0.' + (Math.floor(Math.random() * 3)) + 's';
            break;
        case 'design':
            link.style.animation = 'moveDesignLink' + (Math.floor(Math.random() * 2)) + ' 0.' + (Math.floor(Math.random() * 3)) + 's';
            break;
    }
}
