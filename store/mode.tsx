import React, { createContext, useState } from 'react';
import {RadioMode} from '../types';
import {RADIO_MODE} from "../constants";

interface ModeContext {
    mode: RadioMode,
    setMode: (t: RadioMode) => void
}

const Context = createContext({} as ModeContext);

interface Props {
    children?: React.ReactNode
}

const Provider = (props: Props) => {
    // todo: use cookie or check user time
    const [mode, setMode] = useState<RadioMode>(null);
    return (
        <Context.Provider value={{mode, setMode}}>
            {props.children}
        </Context.Provider>
    )
};

export const Mode = {
    Context,
    Provider
};