import classes from '../../style/Answers.module.css';
import Checkbox from './Checkbox';

export default function Answers({ options = [], handleChange }) {
    return (
        <div className={classes.answers}>
            {options.map((option, index) => (
                <Checkbox
                    // eslint-disable-next-line react/no-array-index-key
                    key={new Date().getTime().toString() + index}
                    className={classes.answer}
                    text={option.title}
                    checked={option.checked}
                    value={index}
                    onChange={(e) => handleChange(e, index)}
                />
            ))}
        </div>
    );
}
