import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { NavLink } from 'react-router-dom';
import imgsrc from '../../images/logo.png';
import cls from './Navbar.module.css';

const Navbar = () => (
    <>
        <div className={cls.navbar}>
            <div className={cls.logo}>
                <NavLink to="/">
                    <img className={cls.img} src={imgsrc} alt="logo" />
                </NavLink>
                <h4>Learn With Sumit</h4>
            </div>

            <div className={cls.user}>
                <AccountCircleIcon />
                <h5>
                    <NavLink to="/login">Log in</NavLink>
                </h5>
                <h5>
                    <NavLink to="/signup">Sign up</NavLink>
                </h5>
            </div>
        </div>
    </>
);
export default Navbar;
