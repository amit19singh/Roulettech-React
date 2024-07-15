import React from 'react';
import './ForecastDisplay.css'

function ForecastDisplay({ forecastData }) {
  if (!forecastData || !forecastData.list) {
    return <div className="forecast-container">Forecast data not available</div>;
  }

  return (
    <div>
      <h2>5-Day Forecast</h2>
      <div className="forecast-container">
        {forecastData.list.map((forecast, index) => (
          <div key={index} className="forecast-day">
            <h3>{new Date(forecast.dt * 1000).toLocaleDateString()}</h3>
            <p>Temperature: {Math.round(forecast.main.temp - 273.15)} °C</p>
            <p>Condition: {forecast.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForecastDisplay;
