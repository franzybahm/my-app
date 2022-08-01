import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
    const codeIcon = {
        "01d": "CLEAR_DAY",
        "01n": "CLEAR_NIGHT",
        "02d": "PARTLY_CLOUDY_DAY",
        "02n": "PARTLY_CLOUDY_NIGHT",
        "03d": "PARTLY_CLOUDY_DAY",
        "03n": "PARTLY_CLOUDY_NIGHT",
        "04d": "CLOUDY",
        "04n": "CLOUDY",
        "09d": "RAIN",
        "09n": "RAIN",
        "10d": "RAIN",
        "10n": "RAIN",
        "11d": "RAIN",
        "11n": "RAIN",
        "13d": "SNOW",
        "13n": "SNOW",
        "50d": "FOG",
        "50n": "FOG",
    };
    let newAnimatedIcon = codeIcon[props.code];
    const iconColor = {
        "CLEAR_DAY": "#f7bc0a",
        "CLEAR_NIGHT": "#221854",
        "PARTLY_CLOUDY_DAY": "#f7bc0a",
        "PARTLY_CLOUDY_NIGHT": "#221854",
        "CLOUDY": "#3d3d3d",
        "RAIN": "#434085",
        "SNOW": "#abd1e0",
        "FOG": "#69696e",
    };


    return <ReactAnimatedWeather icon={newAnimatedIcon} color={iconColor[newAnimatedIcon]}
        size="200"
        animate={true} />
}