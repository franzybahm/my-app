import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

import Weather from "./Weather.js";
import Forecast from "./Forecast";

export default function Search() {
    let [city, setCity] = useState("");
    function updateCity(event) {
        setCity(event.target.value);
    }

    let [weatherInfo, setWeatherInfo] = useState("");
    function responseData(response) {
        setWeatherInfo(
            {
                loaded: true,
                cityName: response.data.name,
                coordinates: response.data.coord,
                temp: response.data.main.temp,
                humidity: response.data.main.humidity,
                wind: response.data.wind.speed,
                icon: response.data.weather[0].icon,
                desc: response.data.weather[0].description,
                date: new Date(response.data.dt * 1000),
            }
        );
    }


    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = "cf1b1343a7207aa60910085fc2251ee5";
        let units = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(responseData);
    }

    if (weatherInfo.loaded) {
        return (
            <div className="row">
                <div className="col-6 search-col">
                    <form id="search-form" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                type="search"
                                onChange={updateCity}
                                className="form-control"
                                placeholder="Search City"
                                autocomplete="off"
                                autofocus="on"
                                id="search-city-input"
                            />
                        </div>
                    </form>
                </div>
                
                <Weather
                    weatherInfo={weatherInfo}
                />
                <Forecast coords={weatherInfo.coordinates} />
            </div>
        );
    }
    else {
        return (
            <div className="row">
                <div className="col-6 search-col">
                    <form id="search-form" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                type="search"
                                onChange={updateCity}
                                className="form-control"
                                placeholder="Search City"
                                autocomplete="off"
                                autofocus="on"
                                id="search-city-input"
                            />
                        </div>
                    </form>
                </div>
                <div className="col-2">
                    <button className="search" id="search-button">
                        <span role="img" ariaLabel="search">
                            🔍
                        </span>
                    </button>
                </div>
                <div class="col-2">
                    <button className="search" id="location-button">
                        <span role="img" ariaLabel="current location">
                            📍
                        </span>
                    </button>
                </div>
                <h2>Waiting for your search...</h2>
            </div>
        )
    }
}
