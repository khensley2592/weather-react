import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Boston" />
        <p className="text-center">
          <a
            href="https://github.com/khensley2592/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code&nbsp;
          </a>
          by Katie Hensley
        </p>
      </div>
    </div>
  );
}
