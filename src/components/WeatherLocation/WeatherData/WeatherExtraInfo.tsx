import React from 'react';
import PropTypes from 'prop-types';


export default function WeatherExtraInfo({humidity, wind}) {
    return (
        <div>
            <div>
                <span>{`${humidity} % - `}</span>
                <span>{`${wind} viento`}</span>
            </div>
        </div>
    )
}

WeatherExtraInfo.propType = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,

}


