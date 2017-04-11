import {getRandomColor} from '../onLoadPage/randomColors';

const svgContainer = document.querySelector('.svgContainer');
svgContainer.style.overflow = 'hidden !important';


function randomLinksAnimation(link) {
    link.style.color = getRandomColor();
}

const links = [];

const linksGalleryCategories = document.querySelectorAll('.linkGalleryCategory');
linksGalleryCategories.forEach((elem) => links.push(elem));

const logo = document.querySelector('.logo_name');
links.push(logo);

const navLinks = document.querySelectorAll('.navLinks');
navLinks.forEach((elem) => links.push(elem));

const titleCategories = document.querySelectorAll('.titleCategories');
titleCategories.forEach((elem) => links.push(elem));


const derevo = document.getElementById('derevo');

const derevoAnimate = setInterval(() => {
    derevo.style.animation = Math.floor(Math.random() * 2) + ' ' + (Math.floor(Math.random() * 3) + "s");
}, Math.floor(Math.random() * 3000));


setTimeout(function () {

    setInterval(function () {
        derevo.style.animation = 'derevoAnimation' + (Math.floor(Math.random() * 8)) + ' 0.' + (Math.floor(Math.random() * 9)) + 's';
    }, Math.floor(Math.random() * 3000))
}, 5000);


setInterval(function () {
    let link = links[Math.floor(Math.random() * 10)];
    let linkColor = links[Math.floor(Math.random() * 10)].style.color;
    randomLinksAnimation(link);

    setTimeout(function () {
        link.style.color = linkColor;
    }, Math.floor(Math.random() * 500))

}, Math.floor(Math.random() * 5000));
