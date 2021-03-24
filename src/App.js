import React from "react";
import "./App.css";
import Weather from "./Weather";
import ChangeBackground from "./ChangeBackground";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Oslo" />
      </div>
    </div>
  );
}
