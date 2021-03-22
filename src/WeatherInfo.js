import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      {" "}
      <div className="row mb-4">
        <div className="col-6">
          {" "}
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize description">
              {props.data.description}
            </li>
          </ul>
        </div>
        <div className="col-6 sun">
          <Sunrise time={props.data.sunrise} />
          <Sunset time={props.data.sunset} />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} m/s</li>
            <li>Pressure: {props.data.pressure} hPa</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
