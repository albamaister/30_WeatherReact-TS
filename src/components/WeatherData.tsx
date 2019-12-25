import React, { Component } from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

export class WeatherData extends Component {
    render() {
        return (
            <div>
                <WeatherTemperature></WeatherTemperature>
                <WeatherExtraInfo humidity={80} wind={"10 m/s"}></WeatherExtraInfo>
            </div>
        )
    }
}

export default WeatherData;
