import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import List from './List';
import './Main.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const Main = () => {
    const classes = useStyles();
    const [inp, setInp] = useState('');
    const [items, setItem] = useState([]);

    const handler = (e) => {
        setInp(e.target.value);
    };
    const addItem = () => {
        if (inp) {
            const itemName = inp;
            setInp('');
            setItem((prev) => [...prev, itemName]);
        }
    };

    const removeItem = (textName) => {
        const workingItem = [...items];
        const index = workingItem.findIndex((searchText) => searchText === textName);
        workingItem.splice(index, 1);
        setItem(workingItem);
    };

    return (
        <div className="main">
            <div className="container">
                <h2>ToDo List</h2>
                <br />
                <Button className="btnn">Click me</Button>
                <div className={classes.root}>
                    <Button variant="contained">Default</Button>
                    <Button variant="contained" color="primary">
                        Primary
                    </Button>
                    <Button variant="outlined" color="secondary">
                        Secondary
                    </Button>

                    <Button
                        variant="outlined"
                        size="large"
                        color="primary"
                        className={classes.margin}
                    >
                        Link
                    </Button>
                    <button className="btn btn-outline-primary" type="button">
                        jibon
                    </button>
                </div>
                <div className="inputbox">
                    <input
                        className="input"
                        type="text"
                        onChange={handler}
                        value={inp}
                        placeholder="Add a Items"
                    />

                    <AddIcon className="addicon" onClick={addItem} />
                </div>

                <div className="listbox">
                    {items.map((item) => (
                        <List key={item} text={item} remove={removeItem} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Main;
