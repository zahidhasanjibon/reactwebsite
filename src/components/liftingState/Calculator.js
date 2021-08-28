import React from 'react';
import { convert, toCelsius, toFahrenheit } from '../../lib/converter';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInp from './TemperatureInp';

export default class Calculator extends React.Component {
    state = { temperature: '', tempName: '' };

    handleChange = (e, tempName) => {
        this.setState({ temperature: e.target.value, tempName });
    };

    render() {
        const { temperature, tempName } = this.state;
        const celsius = tempName === 'f' ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = tempName === 'c' ? convert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInp
                    tempName="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleChange}
                />
                <TemperatureInp
                    tempName="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleChange}
                />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </div>
        );
    }
}
