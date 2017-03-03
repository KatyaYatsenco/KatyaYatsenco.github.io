
function addCloseButton(project) {

    var children = project.childNodes;
    for (var indexChildren = 0; indexChildren < children.length; indexChildren++) {
        var imgs = [];
        var child = children[indexChildren];
        if (child.nodeType == 1) {
            imgs.push(child)
        }
    }
    var button = document.createElement('div');
    button.classList.add('closeButton');
    for (var indexImgs = 0; indexImgs < imgs.length; indexImgs++) {
        imgs[indexImgs].append(button);
    }
}

function addOpenButton(project) {

    var children = project.childNodes;
    for (var index = 0; index < children.length; index++) {
        var imgs = [];
        var child = children[index];
        if (child.nodeType == 1) {
            if (child.classList.contains('prevImg')) {
                imgs.push(child)
            }
        }
    }
    var button = document.createElement('div');
    button.classList.add('openButton');

    for (var i = 0; i < imgs.length; i++) {
        var img = imgs[i];
        img.appendChild(button);
    }
}
