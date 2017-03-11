import {addCloseButton, addOpenButton} from './buttons';


export function addImg(className, elementValue, parent) { // Function create img covers

    const img = document.createElement('IMG');
    img.setAttribute('src', elementValue);

    const containerForImg = document.createElement('A');
    if (className === 'smallImg') {
        containerForImg.classList.add('prevImg');
    }
    containerForImg.classList.add(className);

    containerForImg.appendChild(img);

    parent.appendChild(containerForImg);

    addCloseButton(parent);
    addOpenButton(parent);
}
