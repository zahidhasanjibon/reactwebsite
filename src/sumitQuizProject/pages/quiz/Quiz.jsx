import cls from '../../style/Quiz.module.css';
import Answers from './Answers';
import MiniPlayer from './MiniPlayer';
import ProgressBar from './ProgressBar';

const Quiz = () => (
    <>
        <div className={cls.quizContainer}>
            <p>Pick three of your favorite Star wars films</p>
            <h4>Question can have multiple answer</h4>
            <Answers />
            <ProgressBar />
            <MiniPlayer />
        </div>
    </>
);
export default Quiz;
