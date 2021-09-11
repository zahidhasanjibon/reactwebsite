import cls from './Home.module.css';

const Card = ({ src }) => (
    <div className={cls.card}>
        <div className={cls.card_info}>
            <div>
                <img className={cls.img} src={src} alt="quizimg" />
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
);
export default Card;
