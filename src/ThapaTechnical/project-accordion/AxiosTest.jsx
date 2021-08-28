import Axois from 'axios';
import React, { useEffect, useState } from 'react';

const AxiosTest = () => {
    const [num, setNum] = useState();
    const [name, setName] = useState('');
    const [move, setMove] = useState('');

    useEffect(() => {
        async function getData() {
            const res = await Axois.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res);
            setName(res.data.name);
            setMove(res.data.moves.length);
        }
        getData();
    }, [num]);

    return (
        <>
            <h1>YOU Select {num}</h1>
            <h2>my name is {name}</h2>
            <h3>i have moves {move}</h3>
            <select value={num} onChange={(e) => setNum(e.target.value)}>
                <option value="1">1 </option>
                <option value="25">25 </option>
                <option value="5">5 </option>
                <option value="4">4 </option>
            </select>
        </>
    );
};
export default AxiosTest;
