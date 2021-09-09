import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formular from "./components/Formular";
import Weather from "./components/Weather";
import Error from "./components/Error";

function App() {
    const [search, addSearch] = useState({
        city: "",
        country: "",
    });

    const [submit, getSubmit] = useState(false);
    const [result, addResult] = useState({});
    const [error, addError] = useState(false);

    const { city, country } = search;

    useEffect(() => {
        const callApi = async () => {
            if (submit) {
                const apiKey = "8320f2058c2e90c90f3bb97daf2ee54f";
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;
                const response = await fetch(url);
                const result = await response.json();

                addResult(result);
                getSubmit(false);

                if (result.cod === "404") {
                    addError(true);
                } else {
                    addError(false);
                }
            }
        };
        callApi();
        // eslint-disable-next-line
    }, [submit]);

    let searchResults = error ? (
        <Error message="City not found" />
    ) : (
        <Weather result={result} />
    );

    return (
        <Fragment>
            <Header title="React Weather" />
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <div className="col m6 s12">
                            <Formular
                                search={search}
                                addSearch={addSearch}
                                getSubmit={getSubmit}
                            />
                        </div>
                        <div className="row">
                            <div className="col m6 s12">{searchResults}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
