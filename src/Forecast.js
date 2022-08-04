import React, { useState, useEffect } from "react";
import axios from "axios";

import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coords]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    function getDay(props) {
        let name = new Date(props * 1000);
        let days = [
            "Sunday",
            "Monday",
            "Thuesday",
            "Wendsday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        let day = days[name.getDay()];
        return day;

    }

    if (loaded) {
        return (
            <div class="next-days" id="forecast">
                <div class="row">
                    <div class="col-4 zoom seperator">
                        <h4>{getDay(forecast[1].dt)}</h4>
                        <WeatherIcon code={forecast[1].weather[0].icon} size={100} />
                        <div class="forecast-temp">
                            <span class="forecast-max">{Math.round(forecast[1].temp.max)}° | </span>
                            <span class="forecast-min">{Math.round(forecast[1].temp.min)}°</span>
                        </div>
                    </div>
                    <div class="col-4 zoom seperator">
                        <h4>{getDay(forecast[2].dt)}</h4>
                        <WeatherIcon code={forecast[2].weather[0].icon} size={100} />
                        <div class="forecast-temp">
                            <span class="forecast-max">{Math.round(forecast[2].temp.max)}° | </span>
                            <span class="forecast-min">{Math.round(forecast[2].temp.min)}°</span>
                        </div>
                    </div>
                    <div class="col-4 zoom">
                        <h4>{getDay(forecast[3].dt)}</h4>
                        <WeatherIcon code={forecast[3].weather[0].icon} size={100} />
                        <div class="forecast-temp">
                            <span class="forecast-max">{Math.round(forecast[3].temp.max)}° | </span>
                            <span class="forecast-min">{Math.round(forecast[3].temp.min)}°</span>
                        </div>
                    </div>
                </div>
                <div class="row next-days">
                    <div class="col-2"></div>
                    <div class="col-4 zoom seperator">
                        <h4>{getDay(forecast[4].dt)}</h4>
                        <WeatherIcon code={forecast[4].weather[0].icon} size={100} />
                        <div class="forecast-temp">
                            <span class="forecast-max">{Math.round(forecast[4].temp.max)}° | </span>
                            <span class="forecast-min">{Math.round(forecast[4].temp.min)}°</span>
                        </div>
                    </div>
                    <div class="col-4 zoom">
                        <h4>{getDay(forecast[5].dt)}</h4>
                        <WeatherIcon code={forecast[5].weather[0].icon} size={100} />
                        <div class="forecast-temp">
                            <span class="forecast-max">{Math.round(forecast[5].temp.max)}° | </span>
                            <span class="forecast-min">{Math.round(forecast[5].temp.min)}°</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {

        let apiKey = "cf1b1343a7207aa60910085fc2251ee5";
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coords.lat}&lon=${props.coords.lon}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
        return null;
    }
}



