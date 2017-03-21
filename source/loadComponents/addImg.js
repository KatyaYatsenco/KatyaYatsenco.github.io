export function addImg(className, elementValue, parent) { // Function create img covers

    const img = document.createElement('IMG');

    img.setAttribute('src', elementValue);

    const containerForImg = document.createElement('DIV');

    switch (className) {
        case 'smallImg':
            containerForImg.classList.add('prevImg');
            break;
        case 'bigImg':
            containerForImg.classList.add('bigImg');
            break;
    }

    containerForImg.appendChild(img);

    parent.appendChild(containerForImg);
}
