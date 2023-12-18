import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = ({ toggleTempUnit }) => {
  const [isTempUnit, setIsTempUnit] = useState(false);

  // Toggle temperature unit and send to parent
  const sendData = () => {
    setIsTempUnit(isTempUnit ? false : true)
    toggleTempUnit(isTempUnit);
  };

  return (
    <header>
      <div className="header">
        <div className="title">
          <h1>u09 Weather App </h1>
          <button onClick={sendData}>
            Change to {isTempUnit ? "℃" : "℉"}
          </button>
        </div>
        <div className="timezone">
          {/* <h3>Time Zone: {weatherData.timezone}</h3> */}
        </div>
      </div>
      <nav className="navbar">
        <ul className="navList">
          <li>
            <Link to="/">Today</Link>
          </li>
          <li>
            <Link to="/hourly">Hourly</Link>
          </li>
          <li>
            <Link to="/fiveday">5 day</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
