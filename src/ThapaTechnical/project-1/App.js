import React, { useEffect, useState } from 'react';
import './style/style.css';

export default function App() {
    const [greeting, setGreeting] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        const date = new Date();
        const hour = date.getHours();
        if (hour >= 6 && hour <= 12) {
            setGreeting('Good Morning');
            setId('m');
        } else if (hour > 12 && hour <= 18) {
            setGreeting('Good Afternoon');
            setId('a');
        } else if (hour > 18 && hour <= 24) {
            setGreeting('Good Night');
            setId('e');
        }
    }, []);
    return (
        <div className="heading">
            <h1>
                <span id="fst">Hello sir,</span> <span id={id}>{greeting}</span>{' '}
            </h1>
        </div>
    );
}
