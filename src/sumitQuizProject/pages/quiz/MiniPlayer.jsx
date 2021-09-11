import image from '../../images/react.png';
import cls from '../../style/MiniPlayer.module.css';

export default function MiniPlayer() {
    return (
        <div className={`${cls.miniPlayer} ${cls.floatingBtn}`}>
            <span>
                <i className={`material-icons ${cls.open}`}>play_arrow </i>
            </span>
            <span className={`material-icons-outlined ${cls.close}`}>close</span>
            <img src={image} alt="Alt Tag" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
    );
}
