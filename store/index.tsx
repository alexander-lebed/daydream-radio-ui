import React from 'react';
import { Mode } from './mode';

const providers = [<Mode.Provider key='mode' />];

const Store = ({children}) => {
    return providers.reduceRight((kids, parent) => React.cloneElement(parent, {children: kids}), children);
};

export { Mode };
export default Store;