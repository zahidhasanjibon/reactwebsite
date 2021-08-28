import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import React, { useState } from 'react';

const Accordion = ({ data }) => {
    const { title, body } = data;
    const [show, setShow] = useState(false);

    return (
        <div className="box">
            <div className="listbox">
                {show ? (
                    <RemoveIcon className="icon" onClick={() => setShow(!show)} />
                ) : (
                    <AddIcon className="icon" onClick={() => setShow(!show)} />
                )}

                <li className="list">{title}</li>
            </div>

            {show && (
                <div className="answer">
                    <p>{body}</p>
                </div>
            )}
        </div>
    );
};
export default Accordion;
