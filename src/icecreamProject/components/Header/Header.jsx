import React from 'react';
import img from '../../assets/images/logo.svg';
import reactlogo from '../../assets/images/react.svg';
import classes from './Header.module.css';

export default function Header() {
    return (
        <header>
            <div className="container" id="header">
                <div>
                    <img className={classes.logo} src={img} alt="Logo" />
                </div>
                <div className="textRight">
                    <img src={reactlogo} alt="React" className={classes.reactLogo} />
                    <strong>React</strong>
                </div>
            </div>
        </header>
    );
}
