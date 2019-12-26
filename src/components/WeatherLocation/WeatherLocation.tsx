import React, { Component } from 'react'
import Location from './Location';
import WeatherData from './WeatherData/WeatherData';

export class WeatherLocation extends Component {
    render() {
        return (
            <div>
                <Location city={"Gualaquiza"}></Location>
                <WeatherData></WeatherData>
            </div>
        )
    }
}

export default WeatherLocation;
