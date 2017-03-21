import {getRandomColor} from './randomColors';
import {body} from './derevoColor';


const blendModes = [
    "normal",
    "multiply",
    "screen",
    "overlay",
    "darken",
    "lighten",
    "color-dodge",
    "color-burn",
    "hard-light",
    "soft-light",
    "difference",
    "exclusion",
    "hue",
    "saturation",
    "color",
    "luminosity"
];

export function bodyBlendMode() {
    const mode = blendModes[Math.floor(Math.random() * blendModes.length)];
    body.style.backgroundBlendMode = mode;
    body.style.backgroundColor = getRandomColor();
}
