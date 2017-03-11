
export function addCloseButton(project) {

    const children = project.childNodes;
    const imgs = [];

    for (let indexChildren = 0; indexChildren < children.length; indexChildren++) {
        const child = children[indexChildren];
        if (child.nodeType == 1) {
            imgs.push(child)
        }
    }
    const button = document.createElement('div');
    button.classList.add('closeButton');
    for (let indexImgs = 0; indexImgs < imgs.length; indexImgs++) {
        imgs[indexImgs].append(button);
    }
}

export function addOpenButton(project) {

    const children = project.childNodes;
    const imgs = [];

    for (let index = 0; index < children.length; index++) {
        const imgs = [];
        const child = children[index];
        if (child.nodeType == 1) {
            if (child.classList.contains('prevImg')) {
                imgs.push(child)
            }
        }
    }
    const button = document.createElement('div');
    button.classList.add('openButton');

    for (let i = 0; i < imgs.length; i++) {
        const img = imgs[i];
        img.appendChild(button);
    }
}
