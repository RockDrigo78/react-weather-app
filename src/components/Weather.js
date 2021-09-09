import React from "react";
import PropTypes from 'prop-types'

const Weather = ({ result }) => {
    const { name, main } = result;

    if (!name) {
        return null;
    }

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>The weather in {name} is:</h2>
                <p className="temperatura">
                    {(main.temp - 273.15).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p className="">
                    Max Temp: {(main.temp_max - 273.15).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p className="">
                    Min Temp: {(main.temp_min - 273.15).toFixed(2)} <span>&#x2103;</span>
                </p>
            </div>
        </div>
    );
};

Weather.propTypes = {
    result: PropTypes.object.isRequired
}

export default Weather;
