import React, { useEffect, useState } from 'react';

export default function useEffectHook() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [time, setTime] = useState(new Date());

    const tick = () => {
        console.log('clock ticking');
        setTime(new Date());
    };
    useEffect(() => {
        console.log('call again');
        document.title = `clicked ${count} times`;
    }, [count]);

    useEffect(() => {
        console.log('clock');
        const interval = setInterval(() => tick(), 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const counterHandler = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <p>{time.toLocaleTimeString()}</p>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button type="button" onClick={counterHandler}>
                add
            </button>
        </div>
    );
}
