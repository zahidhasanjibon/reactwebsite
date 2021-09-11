import { NavLink } from 'react-router-dom';
import img5 from '../../images/3.jpg';
import img2 from '../../images/js.png';
import img1 from '../../images/quiz.png';
import img3 from '../../images/quiz2.png';
import img4 from '../../images/quiz3.png';
import Card from './Card';
import cls from './Home.module.css';

const Home = () => (
    <>
        <div className={cls.container}>
            <div className={cls.card_container}>
                <NavLink to="/quiz">
                    <Card src={img1} />
                </NavLink>
                <NavLink to="/quiz">
                    <Card src={img5} />
                </NavLink>
                <NavLink to="/quiz">
                    <Card src={img3} />
                </NavLink>
                <NavLink to="/quiz">
                    <Card src={img4} />
                </NavLink>
                <NavLink to="/quiz">
                    <Card src={img2} />
                </NavLink>
                <NavLink to="/quiz">
                    <Card src={img5} />
                </NavLink>
                <NavLink to="/quiz">
                    <Card src={img3} />
                </NavLink>
                <NavLink to="/quiz">
                    <Card src={img2} />
                </NavLink>
            </div>
        </div>
    </>
);
export default Home;
