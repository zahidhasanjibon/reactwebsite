import React, { useState } from 'react';
import './app.css';
import Img from './Img';

const SearchImg = () => {
    const [inp, setInp] = useState('');
    return (
        <div className="cont">
            <input
                type="text"
                value={inp}
                placeholder="Search"
                onChange={(e) => setInp(e.target.value)}
            />
            <br />
            <br />

            <div className="cen"> {inp && <Img name={inp} />}</div>
        </div>
    );
};
export default SearchImg;
