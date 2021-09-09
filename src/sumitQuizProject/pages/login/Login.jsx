import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import imgPath from '../../images/login.svg';
import cls from './Login.module.css';

const Login = () => (
    <>
        <div className={cls.container}>
            <h1>log in to your Account</h1>

            <div className={cls.signup_container}>
                <div className={cls.leftside}>
                    <img className={cls.img} src={imgPath} alt="signup" />
                </div>

                <div className={cls.rightside}>
                    <form>
                        <div className={cls.seticon}>
                            <input type="email" placeholder="Enter Email" />
                            <span>
                                <AlternateEmailIcon />
                            </span>
                            <br /> <br />
                        </div>
                        <div className={cls.seticon}>
                            <input type="password" placeholder="Enter Password" />
                            <span>
                                <LockOpenIcon />
                            </span>
                            <br /> <br />
                        </div>

                        <div>
                            <input type="checkbox" id="check" />
                            <label>I agree to the Terms and Condition</label> <br /> <br />
                        </div>
                        <button className={cls.btn} type="button">
                            SUBMIT NOW
                        </button>
                    </form>
                    <div className={cls.footer}>
                        <p>
                            Already have an account? <a href="#/">Sign up</a> instead
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
);
export default Login;
