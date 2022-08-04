import React from "react";
import axios from "axios";

export default function Forecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }
    let apiKey = "cf1b1343a7207aa60910085fc2251ee5";
    let apiUrl = `api.openweathermap.org/data/2.5/forecast/daily?lat=${props.coords.lat}&lon=${props.coords.lon}&cnt=5&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleResponse);

    return (
        <div class="next-days" id="forecast">
            <div class="row">
                <div class="col-4 zoom seperator">
                    <h4>Monday</h4>
                    <img src="http://openweathermap.org/img/wn/50d@2x.png" alt="" id="weather-icon-forecast"></img>
                    <div class="forecast-temp">
                        <span class="forecast-max">7°</span>
                        <span class="forecast-min">4°</span>
                    </div>
                </div>
                <div class="col-4 zoom seperator">
                    <h4>Monday</h4>
                    <img src="http://openweathermap.org/img/wn/50d@2x.png" alt="" id="weather-icon-forecast"></img>
                    <div class="forecast-temp">
                        <span class="forecast-max">7°</span>
                        <span class="forecast-min">4°</span>
                    </div>
                </div>
                <div class="col-4 zoom">
                    <h4>Monday</h4>
                    <img src="http://openweathermap.org/img/wn/50d@2x.png" alt="" id="weather-icon-forecast"></img>
                    <div class="forecast-temp">
                        <span class="forecast-max">7°</span>
                        <span class="forecast-min">4°</span>
                    </div>
                </div>
            </div>
            <div class="row next-days">
                <div class="col-2"></div>
                <div class="col-4 zoom seperator">
                    <h4>Monday</h4>
                    <img src="http://openweathermap.org/img/wn/50d@2x.png" alt="" id="weather-icon-forecast"></img>
                    <div class="forecast-temp">
                        <span class="forecast-max">7°</span>
                        <span class="forecast-min">4°</span>
                    </div>
                </div>
                <div class="col-4 zoom">
                    <h4>Monday</h4>
                    <img src="http://openweathermap.org/img/wn/50d@2x.png" alt="" id="weather-icon-forecast"></img>
                    <div class="forecast-temp">
                        <span class="forecast-max">7°</span>
                        <span class="forecast-min">4°</span>
                    </div>
                </div>
            </div>
        </div>
    );


}