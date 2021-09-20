import { NavLink } from 'react-router-dom';
import useVideosList from '../../hook/useVideosList';
// import img5 from '../../images/3.jpg';
// import img2 from '../../images/js.png';
// import img1 from '../../images/quiz.png';
// import img3 from '../../images/quiz2.png';
// import img4 from '../../images/quiz3.png';
import Card from './Card';
import cls from './Home.module.css';

const Home = () => {
    const { videos, loading, error } = useVideosList();

    return (
        <>
            <div className={cls.container}>
                <div className={cls.card_container}>
                    {videos.length > 0 &&
                        videos.map((video) => (
                            <NavLink to="/quiz" key={video.youtubeID}>
                                <Card title={video.title} id={video.youtubeID} noq={video.noq} />
                            </NavLink>
                        ))}
                    {!loading && videos.length === 0 && <div>! no data found</div>}
                    {error && <div>there was an error! </div>}
                    {loading && <div> Loading ...</div>}
                </div>
            </div>
        </>
    );
};
export default Home;
