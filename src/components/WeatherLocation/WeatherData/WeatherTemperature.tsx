import React, { Component } from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    DRIZZLE,
    THUNDER,   
} from '../../../constants/Weather';
import './styles.css';

const icons = {
    [SUN]: "day-sunny",
    [CLOUD]: "cloud",
    [THUNDER]: "day-thunderstorm",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [DRIZZLE]: "day-showers"
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    const sizeIcon = "4x";

    console.log(icon);
    if (icon) {
        
        return  <WeatherIcons className="wicon" name={icon} size={sizeIcon}></WeatherIcons>
    } else {
        return  <WeatherIcons className="wicon" name="day-sunny" size={sizeIcon}></WeatherIcons>
    }
}

export function WeatherTemperature ({ temperature, weatherState })  {
    return (
        <div className="weatherTemperatureCont"> 
                {
                getWeatherIcon(weatherState)
                }      
            <span className="temperature">{`${temperature}`}</span>
            <span className="temperatureType">{` ºC`}</span>
        </div>
    );
  }

//////////////////////////////////
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};


export default WeatherTemperature;
