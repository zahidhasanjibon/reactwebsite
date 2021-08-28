import React, { useEffect, useState } from 'react';
import Accordion from './Accordion';

const MainAccordion = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5&_page=2')
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            });
    }, []);

    return (
        <div className="main">
            <div className="container">
                <h1>React Interview Questions</h1>
                <div className="accordion">
                    {items.map((item) => (
                        <Accordion key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainAccordion;
