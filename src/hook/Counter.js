import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const addFive = () => {
        let i = 1;
        while (i <= 5) {
            setCount((prevState) => prevState + 1);
            i += 1;
        }
    };

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount((prevState) => prevState + 1)} type="button">
                add 1
            </button>
            <br />
            <button onClick={() => addFive()} type="button">
                add 5
            </button>
        </div>
    );
};

export default Counter;
