import classes from '../../style/Analysis.module.css';
import Question from './Question';

export default function Analysis({ answers }) {
    return (
        <div className={classes.analysis}>
            <h1>Question Analysis</h1>
            <Question answers={answers} />
        </div>
    );
}
