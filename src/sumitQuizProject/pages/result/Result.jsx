import _ from 'lodash';
import { useHistory, useParams } from 'react-router';
import useAnswers from '../../hook/useAnswers';
import cls from '../../style/Result.module.css';
import Analysis from './Analysis';
import Summary from './Summary';

export default function Result() {
    const { id } = useParams();
    const { location } = useHistory();
    const { state } = location;

    const { qna } = state;

    const { loading, error, answers } = useAnswers(id);

    function calculate() {
        let score = 0;

        answers.forEach((question, index1) => {
            const correctIndex = [];
            const checkedIndex = [];
            question.options.forEach((option, index2) => {
                if (option.correct) {
                    correctIndex.push(index2);
                }
                if (qna[index1].options[index2].checked) {
                    checkedIndex.push(index2);
                    // eslint-disable-next-line no-param-reassign
                    option.checked = true;
                }
            });

            if (_.isEqual(correctIndex, checkedIndex)) {
                score += 5;
            }
        });

        return score;
    }

    const userScore = calculate();

    return (
        <>
            {loading && <div>Loading ...</div>}
            {error && <div>There was an error</div>}

            {answers && answers.length > 0 && (
                <>
                    <div className={cls.resultcont}>
                        <Summary score={userScore} noq={answers.length} />
                        <Analysis answers={answers} />
                    </div>
                </>
            )}
        </>
    );
}
