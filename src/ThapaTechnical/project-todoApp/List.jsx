import CloseIcon from '@material-ui/icons/Close';
import './Main.css';

const ListItem = ({ text, remove }) => (
    <>
        <div className="cont">
            <CloseIcon className="removeicon" onClick={() => remove(text)} />
            <li className="item">{text}</li>
        </div>
    </>
);
export default ListItem;
