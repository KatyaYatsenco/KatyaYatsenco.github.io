function addImg(className, elementValue, parent) { // Function create img covers

    var img = document.createElement('IMG');
    img.setAttribute('src', elementValue);

    var containerForImg = document.createElement('A');
    if (className === 'smallImg') {
        containerForImg.classList.add('prevImg');
    }
    containerForImg.classList.add(className);

    containerForImg.appendChild(img);

    parent.appendChild(containerForImg);

    addCloseButton(parent);
    addOpenButton(parent);
}
