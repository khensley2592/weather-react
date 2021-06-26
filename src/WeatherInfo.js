import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="col-4">
        <h1>{props.data.city}</h1>
        <h2 className="date">
          <FormattedDate date={props.data.date} />
        </h2>
        <div className="text-capitalize" id="current">
          {props.data.description}
        </div>
        <span className="temp" id="temperature">
          {Math.round(props.data.temperature)}
        </span>
        <span className="units">
          <span>°C</span> |<span>°F</span>
        </span>
        <div>
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            id="icon"
          />
        </div>
        <br />
        <p>
          Humidity: <span id="humidity">{props.data.humidity}</span>%
          <br />
          Wind: <span id="wind">{props.data.wind}</span> km/h
        </p>
      </div>
    </div>
  );
}
