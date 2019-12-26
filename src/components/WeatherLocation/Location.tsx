import React from 'react';
import PropTypes from 'prop-types';


export default function Location({city}) {
    return (
        <div>
            <div>
                <h1>{city}</h1>
            </div>
        </div>
    )
}

Location.propTypes = {
    city: PropTypes.string.isRequired,
}
