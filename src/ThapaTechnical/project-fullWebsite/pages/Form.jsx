import React, { useState } from 'react';

export const Form = ({ type, placeholder, nameVal, id }) => {
    const [inpVal, setInpVal] = useState('');
    const inputHandler = (e) => {
        setInpVal(e.target.value);
    };
    return (
        <input
            type={type}
            placeholder={placeholder}
            name={nameVal}
            onChange={inputHandler}
            value={inpVal}
            id={id}
            className="form-control"
        />
    );
};

export const TextArea = ({ cols, nameVal, id }) => {
    const [inpVal, setInpVal] = useState('');
    const inputHandler = (e) => {
        setInpVal(e.target.value);
    };
    return (
        <textarea
            cols={cols}
            id={id}
            value={inpVal}
            name={nameVal}
            onChange={inputHandler}
            className="form-control"
        />
    );
};

export const submitHandler = (e) => {
    e.preventDefault();
    const { fullName } = e.target;
    const { email } = e.target;
    const { phone } = e.target;
    const { message } = e.target;
    // eslint-disable-next-line no-alert
    alert(`${fullName.value} ${email.value} ${phone.value} ${message.value}`);
};
