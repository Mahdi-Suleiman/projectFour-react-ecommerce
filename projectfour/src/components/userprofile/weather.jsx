import React, { Component } from "react";
import "./weather.css";
const API_KEy = "bd76b8d6b3a4856d8278b8ae6e0aeb62";
class Weather extends Component {
    constructor() {
        super();
        this.state = {
            City: "",
            Country: "",
            Celsius: "",
            Icon: "",
            temp: "",
            Temp_max: "",
            Temp_min: "",
            Description: "",
        };
        this.getWeather();
    }

    getWeather = async () => {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=Jordan&units=metric&appid=${API_KEy}`
        );
        const data = await response.json();

        this.setState({
            City: data.name,
            Celsius: Math.floor(data.main.temp),
            Description: data.weather[0].description,
            icon: data.weather[0].icon,
        });
    };
    render() {
        return (
            <div className="Weather">
                <h1>The Weather</h1>
                <img
                    src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`}
                />
                <div className="WeatherIcon">
                    <p>
                        <i className="fas fa-city"></i>
                        {this.state.City}
                    </p>
                    <p>
                        <i className="fas fa-thermometer-three-quarters"></i>Temperature{" "}
                        {this.state.Celsius}°
                    </p>
                    <p>
                        <i className="fas fa-cloud"></i>
                        {this.state.Description}
                    </p>
                </div>
            </div>
        );
    }
}

export default Weather;