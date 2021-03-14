import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Oslo</h1>
      <ul>
        <li>Sunday, 20:17</li>
        <li>Rain and snow</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/snow_s_rain.png"
            alt="Rain and snow"
          />
          6℃
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 90%</li>
            <li>Humidity: 85%</li>
            <li>Wind: 4 m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
