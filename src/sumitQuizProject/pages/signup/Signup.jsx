import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import NoEncryptionIcon from '@material-ui/icons/NoEncryption';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import imgPath from '../../images/signup.svg';
import cls from './Signup.module.css';

const Signup = () => (
    <>
        <div className={cls.container}>
            <h1>Create an Account</h1>

            <div className={cls.signup_container}>
                <div className={cls.leftside}>
                    <img className={cls.img} src={imgPath} alt="signup" />
                </div>

                <div className={cls.rightside}>
                    <form>
                        <div className={cls.seticon}>
                            <input type="text" placeholder="Enter Name" />
                            <span>
                                <PermIdentityIcon />
                            </span>
                            <br /> <br />
                        </div>
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
                        <div className={cls.seticon}>
                            <input type="password" placeholder="Confirm Password" />
                            <span>
                                {' '}
                                <NoEncryptionIcon />
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
                </div>
                <div className={cls.footer}>
                    <p>
                        Already have an account? <a href="#/">Login</a> instead
                    </p>
                </div>
            </div>
        </div>
    </>
);
export default Signup;
