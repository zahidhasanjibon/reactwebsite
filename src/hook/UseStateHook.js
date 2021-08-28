import React, { useState } from 'react';

export default function UseStateHook() {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState('');

    const inputHandler = (e) => {
        const inputVal = e.target.value;

        const updateWarning = inputVal.includes('.js') ? 'you know javascript?' : 'good choice';
        setTodo(inputVal);
        setWarning(updateWarning);
    };
    return (
        <div>
            <p>{todo}</p>
            <textarea value={todo} onChange={inputHandler} />
            <hr />
            <h3>{warning} </h3>
        </div>
    );
}
