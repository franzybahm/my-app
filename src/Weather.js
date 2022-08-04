import React from "react";
import "./styles.css";

import Date from "./Date.js";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";

export default function Weather(props) {
    return (
        <div>
            <div class="row">
                <div class="col-10 shadow p-3 mb-5 bg-body rounded current-weather">
                    <div class="row">
                        <div class="col-4 big-weather">
                            <WeatherIcon code={props.weatherInfo.icon} size={200} />
                        </div>
                        <div class="col-4">
                            <h2 id="current-city">{props.weatherInfo.cityName}</h2>
                            <Temperature celcius={props.weatherInfo.temp} />
                        </div>
                        <div class="col-4">
                            <h3 id="current-time">
                                <Date date={props.weatherInfo.date} />
                            </h3>
                            <p class="info" id="description">
                                {props.weatherInfo.desc}
                            </p>
                            <p class="info" id="humidity">
                                Precipitation: {Math.round(props.weatherInfo.humidity)}%
                            </p>
                            <p class="info" id="wind">
                                Wind: {Math.round(props.weatherInfo.wind)}km/h
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


