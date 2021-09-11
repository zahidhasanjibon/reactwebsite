import { NavLink } from 'react-router-dom';
import cls from '../../style/ProgressBar.module.css';
import Button from './Button';

export default function ProgressBar() {
    return (
        <div className={cls.progressBar}>
            <div className={cls.backButton}>
                <span>
                    <i className="material-icons">arrow_back</i>
                </span>
            </div>
            <div className={cls.rangeArea}>
                <div className={cls.tooltip}>24% Cimplete!</div>
                <div className={cls.rangeBody}>
                    <div className={cls.progress} style={{ width: '20%' }} />
                </div>
            </div>

            <NavLink to="/result">
                <Button className={cls.next}>
                    <span>Next Question</span>
                    <span>
                        <i className="material-icons">arrow_forward</i>
                    </span>
                </Button>
            </NavLink>
        </div>
    );
}
