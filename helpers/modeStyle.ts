import {ModeColors, RadioMode} from "../types";
import {RADIO_MODE} from "../constants";

// generate cssFilter color from https://codepen.io/sosuke/pen/Pjoqqp

export function getColors(mode: RadioMode): ModeColors {
    switch (mode) {
        case RADIO_MODE.NOW:
            return {
                primaryColor: '#035a22',
                secondaryColor: '#249a39',
                cssFilter: 'invert(26%) sepia(77%) saturate(897%) hue-rotate(117deg) brightness(98%) contrast(94%);'
            };
        case RADIO_MODE.MORNING:
            return {
                primaryColor: '#f04b03',
                secondaryColor: '#fca245',
                cssFilter: 'invert(39%) sepia(60%) saturate(4599%) hue-rotate(0deg) brightness(102%) contrast(106%);'
            };
        case RADIO_MODE.DAY:
            return {
                primaryColor: '#2091bd',
                secondaryColor: '#69d2e7',
                cssFilter: 'invert(42%) sepia(79%) saturate(455%) hue-rotate(151deg) brightness(100%) contrast(95%);'
            };
        case RADIO_MODE.NIGHT:
            return {
                primaryColor: '#7443d5',
                secondaryColor: '#181039',
                cssFilter: 'invert(54%) sepia(98%) saturate(5770%) hue-rotate(245deg) brightness(85%) contrast(96%);'
            };
        default:
            return {
                primaryColor: '#eab909', // #f8f8f8
                secondaryColor: '#1f1f1f',
                cssFilter: ''
            };
    }
}

export function getSvgSrc(mode: RadioMode): string {
    switch (mode) {
        case RADIO_MODE.NOW:
            return '/svg/live.svg';
        case RADIO_MODE.MORNING:
            return '/svg/half-sun.svg';
        case RADIO_MODE.DAY:
            return '/svg/sun.svg';
        case RADIO_MODE.NIGHT:
            return '/svg/moon.svg';
        default:
            return '';
    }
}