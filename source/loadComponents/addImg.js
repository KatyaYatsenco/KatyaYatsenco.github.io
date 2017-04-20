export function addImg(className, elementValue, parent) { // Function create img covers

    const img = document.createElement('IMG');

    img.setAttribute('src', elementValue);

    const projectContainer = document.createElement('DIV');

    const video = document.createElement('VIDEO');
    video.setAttribute('src', elementValue);


    switch (className) {
        case 'smallImg':
            projectContainer.classList.add('prevImg');
            projectContainer.appendChild(img);
            break;
        case 'bigImg':
            projectContainer.classList.add('bigImg');
            projectContainer.appendChild(img);

            break;
        case 'video':
            projectContainer.classList.add('gorpinichVideo');
            projectContainer.appendChild(video);

            break;
    }
    parent.appendChild(projectContainer);


}
