const derevo = document.getElementById('derevo'); // used in another file


export const body = document.body;

export function changeDerevoColor(color) {

    try {
        const str0 = derevo.querySelectorAll('.str0'),
            str1 = derevo.querySelectorAll('.str1');

        str0.forEach(function (str) {
            str.style.fill = color;
        });
        str1.forEach(function (str) {
            str.style.stroke = color;
        });

    }
    catch (e) {
        console.log(e)
    }

}















