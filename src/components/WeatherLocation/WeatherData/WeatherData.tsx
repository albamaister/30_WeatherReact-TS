import React, { Component } from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    DRIZZLE,
    THUNDER,   
} from '../../../constants/Weather';

export class WeatherData extends Component {
    render() {
        return (
            <div>
                <WeatherTemperature temperature={20} weatherState={THUNDER}></WeatherTemperature>
                <WeatherExtraInfo humidity={80} wind={"10 m/s"}></WeatherExtraInfo>
            </div>
        )
    }
}

export default WeatherData;
