const derevo = document.getElementById('derevo'); // used in another file

const str0 = derevo.querySelectorAll('.str0'),
    str1 = derevo.querySelectorAll('.str1');

export const body = document.body;

export function changeDerevoColor(color) {
    str0.forEach(function (str) {
        str.style.fill = color;
    });
    str1.forEach(function (str) {
        str.style.stroke = color;
    });
}















