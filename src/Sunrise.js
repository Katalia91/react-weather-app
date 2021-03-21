import React from "react";

export default function Sunrise(props) {
  let hours = props.time.getHours();
  let minutes = props.time.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      <ul>
        <li>
          Sunrise: {hours}:{minutes}
        </li>
      </ul>
    </div>
  );
}
