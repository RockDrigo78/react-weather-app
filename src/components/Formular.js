import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Formular = ({ search, addSearch, getSubmit }) => {
    const [error, addError] = useState(false);

    const { city, country } = search;

    const handleChange = (evt) => {
        addSearch({
            ...search,
            [evt.target.name]: evt.target.value,
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (city.trim() === "" || country.trim() === "") {
            addError(true);
            return;
        }
        addError(false);

        addSearch(search);

        getSubmit(true);
    };

    return (
        <form onSubmit={handleSubmit}>
            {error ? <Error message="Please add all fields" /> : null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={handleChange}
                />
                <label htmlFor="city">City: </label>
            </div>
            <div className="input-field col s12">
                <select
                    name="country"
                    id="country"
                    value={country}
                    onChange={handleChange}
                >
                    <option value="">-- Select a Country --</option>
                    <option value="DE">Germany</option>
                    <option value="US">USA</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">Spain</option>
                    <option value="PE">Peru</option>
                </select>
                <label htmlFor="country">Country: </label>
            </div>
            <div className="input-field col s12">
                <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                >
                    Check Weather
                </button>
            </div>
        </form>
    );
};

Formular.propTypes = {
    search: PropTypes.object.isRequired,
    addSearch: PropTypes.func.isRequired,
    getSubmit: PropTypes.func.isRequired,
};

export default Formular;
