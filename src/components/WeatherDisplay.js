import React from 'react';
import './WeatherDisplay.css'

function WeatherDisplay({ weatherData }) {
  if (!weatherData || !weatherData.main || !weatherData.weather || !weatherData.weather[0]) {
    return <div className="weather-container">Weather data not available</div>;
  }
  
  return (
    <div className="weather-container">
      <h1>Weather in {weatherData.name}</h1>
      <p>Temperature: {Math.round(weatherData.main.temp - 273.15)} °C</p>
      <p>Condition: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherDisplay;
