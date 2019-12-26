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
    console.log(icon);
    if (icon) {
        
        return  <WeatherIcons name={icon} size="2x"></WeatherIcons>
    } else {
        return  <WeatherIcons name="day-sunny" size="2x"></WeatherIcons>
    }
}

export function WeatherTemperature ({ temperature, weatherState })  {
    return (
        <div> 
                {
                getWeatherIcon(weatherState)
                }      
                <span>25 grados</span>
            </div>
    );
  }

//////////////////////////////////
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};


export default WeatherTemperature;
