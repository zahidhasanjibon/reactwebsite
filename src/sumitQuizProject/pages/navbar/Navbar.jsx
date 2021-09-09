import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import imgsrc from '../../images/logo.png';
import cls from './Navbar.module.css';

const Navbar = () => (
    <>
        <div className={cls.navbar}>
            <div className={cls.logo}>
                <img className={cls.img} src={imgsrc} alt="logo" />
                <h4>Learn With Sumit</h4>
            </div>

            <div className={cls.user}>
                <AccountCircleIcon />
                <h5>Sign up</h5>
            </div>
        </div>
    </>
);
export default Navbar;
