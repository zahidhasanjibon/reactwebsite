import React from 'react';
import IceCreamBuilder from '../../containers/IceCreamBuilder';
import classes from './Body.module.css';

const Body = () => (
    <div className={classes.mainBody}>
        <IceCreamBuilder />
    </div>
);

export default Body;
