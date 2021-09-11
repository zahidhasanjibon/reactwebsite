import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { useState } from 'react';
import imgPath from '../../images/login.svg';
import cls from './Login.module.css';

const Login = () => {
    const [inpValue, setInpValue] = useState({
        email: '',
        password: ''
    });

    function handler(e) {
        const { name } = e.target;
        const val = e.target.value;
        return setInpValue({
            ...inpValue,
            [name]: val
        });
    }

    return (
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
                                <input
                                    type="email"
                                    placeholder="Enter Email"
                                    value={inpValue.email}
                                    name="email"
                                    onChange={(e) => handler(e)}
                                    required
                                />
                                <span>
                                    <AlternateEmailIcon />
                                </span>
                                <br /> <br />
                            </div>
                            <div className={cls.seticon}>
                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    value={inpValue.password}
                                    name="password"
                                    onChange={(e) => handler(e)}
                                    required
                                />
                                <span>
                                    <LockOpenIcon />
                                </span>
                                <br /> <br />
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
};
export default Login;
