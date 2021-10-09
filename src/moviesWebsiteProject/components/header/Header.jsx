import classes from './header.module.css';

const Header = ({ changeHandler, value }) => (
    <div className={classes.header}>
        <input type="text" placeholder="Search" value={value} onChange={(e) => changeHandler(e)} />
    </div>
);
export default Header;
