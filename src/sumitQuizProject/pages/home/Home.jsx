import imgPath from '../../images/quiz.png';
import cls from './Home.module.css';

const Home = () => (
    <>
        <div className={cls.container}>
            <div className={cls.card_container}>
                <div className={cls.card}>
                    <div className={cls.card_info}>
                        <div>
                            <img className={cls.img} src={imgPath} alt="quizimg" />
                        </div>
                        <div className={cls.body}>
                            <h5>#React Hooks Bangla - React useReducer hook Quiz</h5>
                        </div>
                        <div className={cls.footer}>
                            <p>10 Quistions</p>
                            <p>Score : Not taken yet</p>
                        </div>
                    </div>
                </div>
                <div className={cls.card}>
                    <div className={cls.card_info}>
                        <div>
                            <img className={cls.img} src={imgPath} alt="quizimg" />
                        </div>
                        <div className={cls.body}>
                            <h5>#React Hooks Bangla - React useReducer hook Quiz</h5>
                        </div>
                        <div className={cls.footer}>
                            <p>10 Quistions</p>
                            <p>Score : Not taken yet</p>
                        </div>
                    </div>
                </div>
                <div className={cls.card}>
                    <div className={cls.card_info}>
                        <div>
                            <img className={cls.img} src={imgPath} alt="quizimg" />
                        </div>
                        <div className={cls.body}>
                            <h5>#React Hooks Bangla - React useReducer hook Quiz</h5>
                        </div>
                        <div className={cls.footer}>
                            <p>10 Quistions</p>
                            <p>Score : Not taken yet</p>
                        </div>
                    </div>
                </div>
                <div className={cls.card}>
                    <div className={cls.card_info}>
                        <div>
                            <img className={cls.img} src={imgPath} alt="quizimg" />
                        </div>
                        <div className={cls.body}>
                            <h5>#React Hooks Bangla - React useReducer hook Quiz</h5>
                        </div>
                        <div className={cls.footer}>
                            <p>10 Quistions</p>
                            <p>Score : Not taken yet</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
export default Home;
