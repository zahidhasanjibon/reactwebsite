import React from 'react';

const tempObj = { c: 'Celsius', f: 'Fahrenheit' };
export default function TemperatureInp({ tempName, temperature, onTemperatureChange }) {
    return (
        <fieldset>
            <legend>Enter Temperature in {tempObj[tempName]} : </legend>
            <input
                type="text"
                value={temperature}
                onChange={(e) => onTemperatureChange(e, tempName)}
            />
        </fieldset>
    );
}
