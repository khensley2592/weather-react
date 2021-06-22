import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <div class="container">
          <div class="wrapper">
            <div class="row justify-content-center">
              <div class="col-4">
                <h1>City</h1>
                <h2 class="date">Monday, June 21</h2>
                <div id="current"></div>
                <span class="temp" id="temperature"></span>
                <span class="units">
                  <span>°C</span> |<span>°F</span>
                </span>
                <div>
                  <img src="" alt="Clear" id="icon" />
                </div>
                <br />
                <p>
                  Humidity: <span id="humidity"></span>%
                  <br />
                  Wind: <span id="wind"></span> km/h
                </p>
              </div>
              <div class="col-4">
                <form id="search-form">
                  <input
                    type="search"
                    placeholder="Enter a city"
                    autocomplete="off"
                    autofocus="on"
                    i
                    id="search-text-input"
                    class="form-control"
                  />
                  <input
                    type="submit"
                    value="Search"
                    class="btn btn-primary w-50"
                  />
                </form>
                <br />
                <div class="weather-forecast" id="forecast"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="text-center">
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
  );
}

export default App;
