import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';


export default function WeatherExtraInfo({humidity, wind}) {
    return (
        <div>
            <div className="weatherExtraInfoCont">
                <span className="extraInfoText">{`Humedad: ${humidity} % `}</span>
                <span className="extraInfoText">{`Viento: ${wind}`}</span>
            </div>
        </div>
    )
};

WeatherExtraInfo.propType = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,

}


