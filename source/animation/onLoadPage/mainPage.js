export function stopMainPageAnimation() {
    const derevo = document.getElementById('derevo'),
        gallerySubcategoryDesign = document.querySelector('#design'),
        gallerySubcategoryPainting = document.querySelector('#painting'),
        gallerySubcategoryGraphic = document.querySelector('#graphic'),
        gallerySubcategoryDigitalArt = document.querySelector('#digitalArt'),
        gallerySubcategoryOthers = document.querySelector('#others'),
        gallerySubcategory3d = document.querySelector('#_3d'),
        logoName = document.querySelector('.logo_name');


    derevo.style.animation = 'none';
    gallerySubcategoryDesign.style.animation = 'none';
    gallerySubcategoryPainting.style.animation = 'none';
    gallerySubcategoryGraphic.style.animation = 'none';
    gallerySubcategoryDigitalArt.style.animation = 'none';
    gallerySubcategoryOthers.style.animation = 'none';
    gallerySubcategory3d.style.animation = 'none';
    logoName.style.animation = 'none';
}

export function runMainPageAnimation() {
    const derevo = document.getElementById('derevo'),
        gallerySubcategoryDesign = document.querySelector('#design'),
        gallerySubcategoryPainting = document.querySelector('#painting'),
        gallerySubcategoryGraphic = document.querySelector('#graphic'),
        gallerySubcategoryDigitalArt = document.querySelector('#digitalArt'),
        gallerySubcategoryOthers = document.querySelector('#others'),
        gallerySubcategory3d = document.querySelector('#_3d'),
        logoName = document.querySelector('.logo_name');


    derevo.style.animation = 'derevoZoom 2s';
    gallerySubcategoryDesign.style.animation = 'moveDesignLink 4.1s';
    gallerySubcategoryPainting.style.animation = 'movePaintingLink 3.3s';
    gallerySubcategoryGraphic.style.animation = 'moveGraphicLink 4.4s';
    gallerySubcategoryDigitalArt.style.animation = 'moveDigitalArtLink 4.2s';
    gallerySubcategoryOthers.style.animation = 'moveOthersLink 5s';
    gallerySubcategory3d.style.animation = 'move3dLink 4.7s';
    logoName.style.animation = 'appearanceLogo 4s';
}
