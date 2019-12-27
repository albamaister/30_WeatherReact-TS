import React, { Component } from 'react'
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    DRIZZLE,
    THUNDER,   
} from '../../constants/Weather';

const data = {
    temperature: 5,  
    weatherState: SUN,
    humidity: 100,
    wind: '10 m/s',
}


const location = "Buenos Aires,ar"

export const api_key = "9fc91d474fa5a26c776d69aacff23360";
export const url = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url}?q=${location}&appid=${api_key}&units=metric`;

export class WeatherLocation extends Component<IProps, IState> {

    getWeatherState = weather_data => {
        return SUN;
    }

    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);

        const data = {
            humidity,
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`
        }

        return data;
    }

    constructor(props: IProps) {
        super(props);
        this.state = {
            city: 'Buenos aires',
            data: data,
        };
    };
    handleUpdateClick = () => {
        fetch(api_weather).then( resolve => {
            console.log(resolve);
            return resolve.json();
        }).then( data => {
            const newWeather = this.getData(data);
            console.log(newWeather);
            this.setState ({                
                data: newWeather
            });
        });
        
    }
    render() {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        )
    }
}

interface IProps {
}

interface IState {
    city: string,
    data: any,
}

export default WeatherLocation;
