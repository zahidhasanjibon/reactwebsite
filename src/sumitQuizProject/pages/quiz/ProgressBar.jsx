import cls from '../../style/ProgressBar.module.css';
import Button from './Button';

export default function ProgressBar({ nextFunc, prevFunc, progress, submitFunc }) {
    return (
        <div className={cls.progressBar}>
            <button type="button" className={cls.backButton} onClick={prevFunc}>
                <span>
                    <i className="material-icons">arrow_back</i>
                </span>
            </button>
            <div className={cls.rangeArea}>
                <div className={cls.tooltip}>{progress}% Cimplete!</div>
                <div className={cls.rangeBody}>
                    <div className={cls.progress} style={{ width: `${progress}%` }} />
                </div>
            </div>

            <Button className={cls.next} onClick={progress === 100 ? submitFunc : nextFunc}>
                <span>{progress === 100 ? 'submit' : 'Next Question'}</span>
                <span>
                    <i className="material-icons">arrow_forward</i>
                </span>
            </Button>
        </div>
    );
}
