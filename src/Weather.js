import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "a4274e99abef8206a6b90c500ed8b868";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="wrapper">
          <div className="row justify-content-center">
            <WeatherInfo data={weatherData} />
            <div className="col-4">
              <form id="search-form" onSubmit={handleSubmit}>
                <input
                  type="search"
                  placeholder="Enter a city"
                  autocomplete="off"
                  autoFocus="on"
                  id="search-text-input"
                  className="form-control"
                  onChange={handleCityChange}
                />
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-50"
                />
              </form>
              <br />
              <WeatherForecast coordinates={weatherData.coordinates} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
