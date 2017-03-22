import {setDesignContent} from '../design/setDesignContent';
import {set3dContent} from '../3d/set3dContent';

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

    }
}
