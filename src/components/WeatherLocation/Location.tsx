import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function Location({city}) {
    return (
        <div className="locationCont">
            <div>
                <h1>{city}</h1>
            </div>
        </div>
    )
}

Location.propTypes = {
    city: PropTypes.string.isRequired,
}
