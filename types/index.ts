import {RADIO_MODE} from '../constants';

type RadioModeKeys = keyof typeof RADIO_MODE;

export type RadioMode = typeof RADIO_MODE[RadioModeKeys] | null;

export interface ModeColors {
    primaryColor: string,
    secondaryColor: string,
    cssFilter: string
}