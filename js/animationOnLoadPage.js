// function OnLoadAnimation() {
//
//     var str0 = derevo.querySelectorAll('.str0'),
//         str1 = derevo.querySelectorAll('.str1'),
//         body = document.body;
//     //
//     // function changeColor(color) {
//     //     str0.forEach(function (str) {
//     //         str.style.fill = color;
//     //     });
//     //     str1.forEach(function (str) {
//     //         str.style.stroke = color;
//     //     });
//     // }
//
//     function getRandomColor() {
//         var letters = '0123456789ABCDEF';
//         var color = '#';
//         for (var i = 0; i < 6; i++) {
//             color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
//     }
//
//     var blendModes = [
//         "normal",
//         "multiply",
//         "screen",
//         "overlay",
//         "darken",
//         "lighten",
//         "color-dodge",
//         "color-burn",
//         "hard-light",
//         "soft-light",
//         "difference",
//         "exclusion",
//         "hue",
//         "saturation",
//         "color",
//         "luminosity"
//     ];
//
//     function bodyBlendMode() {
//         var mode = blendModes[Math.floor(Math.random() * blendModes.length)];
//         body.style.backgroundBlendMode = mode;
//         body.style.backgroundColor = getRandomColor();
//     }
//
//     var self = this;
//     //
//     // this.epilepsy = epilepsy;
//
//     self.epilepsy = function (time) {
//         setInterval(function () {
//             changeColor(getRandomColor());
//             bodyBlendMode();
//         }, time);
//     };
//
// //Twinkle background and tree
//     this.stopEpilepsyAnimation = function (time) {
//         setTimeout(function () {
//
//             clearInterval(self.epilepsy);
//
//             bodyBlendMode();
//             body.style.backgroundColor = 'black';
//             body.style.backgroundBlendMode = 'normal';
//             document.querySelector('.svgContainer').style.overflow = 'auto';
//
//             changeColor('#fff');
//
//
//         }, time);
//     }
//
// }
// var onLoadAnimation = new OnLoadAnimation();

// onLoadAnimation.epilepsy(100);

// onLoadAnimation.stopEpilepsyAnimation(1000);





console.log('bo')
