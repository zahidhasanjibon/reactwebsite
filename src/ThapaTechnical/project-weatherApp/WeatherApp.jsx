import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style/index.scss';

const WeatherApp = () => {
    const [inp, setInp] = useState('');
    const [city, setCity] = useState(null);

    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inp}&units=metric&appid=68cd5f7a0c384c33795e704df2df2f6f`;
        async function getData() {
            const res = await Axios.get(url);
            const datas = res.data.main;
            setCity(datas);
            console.log('jibon');
        }
        getData();
    }, [inp]);

    // const {main.temp} = city

    return (
        <>
            <div className="box">
                <h2>Weather App</h2>
                <div className="inputData">
                    <input
                        type="search"
                        className="inputField"
                        value={inp}
                        onChange={(e) => setInp(e.target.value)}
                    />
                </div>
                {!city ? (
                    <p>Enter City Name</p>
                ) : (
                    <div>
                        <div className="info">
                            <h1 className="loaction">
                                <i className="fas fa-street-view" />
                                {inp}
                            </h1>
                            {inp ? (
                                <>
                                    <h1 className="temp">
                                        {city.temp}
                                        <sup>0</sup> C
                                    </h1>
                                    <h4 className="tempmin_max">
                                        Min : {city.temp_min}
                                        <sup>0</sup> Cel | Max : {city.temp_max}
                                        <sup>0</sup> Cel
                                    </h4>
                                </>
                            ) : (
                                <p>Enter City Name</p>
                            )}
                        </div>

                        <div className="wave -one" />
                        <div className="wave -two" />
                        <div className="wave -three" />
                    </div>
                )}
            </div>
        </>
    );
};

export default WeatherApp;
