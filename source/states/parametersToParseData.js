import {setDesignContent} from '../design/setDesignContent';
import {set3dContent} from '../3d/set3dContent';
import {setDigitalArtContent} from '../digitalArt/setDigitalArtContent';
import {setPaintingContent} from '../painting/setPaintingContent';
import {setOthersContent} from '../others/setOthersContent';
import {setGraphicContent} from '../graphic/setGraphicContent';


import {parseData} from '../loadComponents/mainComponent';

import {stopEpilepsy} from '../animation/onLoadPage/stopEpilepsy'


export function parametersToParseData(expression, typeImg, projectParameters) {

    switch (expression) {

        case "/design":
            parseData(typeImg, setDesignContent, "json_files/design.json", projectParameters);
            stopEpilepsy(0);
            break;

        case "/3d":
            parseData(typeImg, set3dContent, "json_files/3d.json", projectParameters);
            stopEpilepsy(0);
            break;

        case "/digitalArt":
            parseData(typeImg, setDigitalArtContent, "json_files/digital_art.json", projectParameters);
            stopEpilepsy(0);
            break;

        case "/painting":
            parseData(typeImg, setPaintingContent, "json_files/painting.json", projectParameters);
            stopEpilepsy(0);
            break;

        case "/others":
            parseData(typeImg, setOthersContent, "json_files/others.json", projectParameters);
            stopEpilepsy(0);
            break;

        case "/graphic":
            parseData(typeImg, setGraphicContent, "json_files/graphic.json", projectParameters);
            stopEpilepsy(0);
            break;
        case "/contacts":
        case "/aboutMe":
            stopEpilepsy(0);
            break;
    }
}
