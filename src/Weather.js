import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import { loadPartialConfig } from "@babel/core";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="wrapper">
          <div className="row justify-content-center">
            <div className="col-4">
              <h1>{weatherData.city}</h1>
              <h2 className="date">
                <FormattedDate date={weatherData.date} />
              </h2>
              <div className="text-capitalize" id="current">
                {weatherData.description}
              </div>
              <span className="temp" id="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">
                <span>°C</span> |<span>°F</span>
              </span>
              <div>
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  id="icon"
                />
              </div>
              <br />
              <p>
                Humidity: <span id="humidity">{weatherData.humidity}</span>%
                <br />
                Wind: <span id="wind">{weatherData.wind}</span> km/h
              </p>
            </div>
            <div className="col-4">
              <form id="search-form">
                <input
                  type="search"
                  placeholder="Enter a city"
                  autocomplete="off"
                  autoFocus="on"
                  i
                  id="search-text-input"
                  className="form-control"
                />
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-50"
                />
              </form>
              <br />
              <div className="weather-forecast" id="forecast"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "a4274e99abef8206a6b90c500ed8b868";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
