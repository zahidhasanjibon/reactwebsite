import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MenuIcon from '@material-ui/icons/Menu';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { useState } from 'react';
import './style.css';

const Navbar = () => {
    const [showMenuIcon, setshowMenuIcon] = useState(false);

    return (
        <>
            <nav className="box">
                <div className="header">
                    <h1>ZahidHasan</h1>
                </div>
                <div className={showMenuIcon ? 'listitems mobile-menu-link' : 'listitems'}>
                    <ul className="ulitems">
                        <li>Home</li>
                        <li>About</li>
                        <li>Service</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="icons">
                    <ul className="ulicons">
                        <li>
                            <a href="https://www.facebook.com/">
                                <FacebookIcon />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/">
                                <YouTubeIcon style={{ color: 'red' }} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/">
                                <InstagramIcon />
                            </a>
                        </li>
                    </ul>
                    <div className="hambergur">
                        <a href="/#" onClick={() => setshowMenuIcon(!showMenuIcon)}>
                            <MenuIcon />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
