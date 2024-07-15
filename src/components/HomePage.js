import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay';
import SearchBar from './SearchBar';
import ForecastDisplay from './ForecastDisplay';
import './HomePage.css'

function HomePage() {
    const [weatherList, setWeatherList] = useState([]);
    const [selectedWeather, setSelectedWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    const majorCities = ['New York', 'London', 'Tokyo', 'Sydney', 'Paris'];

    const url = 'https://dtbo8qe5iqbg6.cloudfront.net';
    
    useEffect(() => {
        if (!selectedWeather) {
            const fetchWeather = async () => {
                const responses = await Promise.all(
                    majorCities.map(city => 
                        // axios.get(`http://localhost:8000/api/weather/current/${city}/`)
                        axios.get(`${url}/api/weather/current/${city}/`)
                    )
                );
                setWeatherList(responses.map(response => response.data));
            };
            fetchWeather();
        }
    }, [selectedWeather]); 

    const handleSearch = city => {
        // axios.get(`http://localhost:8000/api/weather/current/${city}/`)
        axios.get(`${url}/api/weather/current/${city}/`)
            .then(response => {
                setSelectedWeather(response.data);
                setForecast(null); 
                setWeatherList([]); 
            })
            .catch(error => {
                console.error('Error fetching weather:', error);
                alert('Weather data not found for that city');
            });
    };

    const handleForecast = city => {
        // axios.get(`http://localhost:8000/api/weather/forecast/${city}/`)
        axios.get(`${url}/api/weather/forecast/${city}/`)
            .then(response => {
                setForecast(response.data);
            })
            .catch(error => {
                console.error('Error fetching forecast:', error);
                alert('Forecast data not found for that city');
            });
    };

    const handleHomeClick = () => {
        setSelectedWeather(null);
        setForecast(null);
    };

    return (
        <div>
            <h1 onClick={handleHomeClick} style={{ cursor: 'pointer' }}>Weather App</h1>
            <SearchBar onSearch={handleSearch} />
            {selectedWeather ? (
                <div>
                    <WeatherDisplay weatherData={selectedWeather} />
                    <button className="forecast-button" onClick={() => handleForecast(selectedWeather.name)}>Check Forecast</button>
                </div>
            ) : (
                <div>
                    <h2>Weather around the world</h2>
                    <div className="city-weather-container">
                        {weatherList.map((weather, index) => (
                            <div key={index} className="city-weather-item">
                                <WeatherDisplay weatherData={weather} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {forecast && <ForecastDisplay forecastData={forecast} />}
        </div>
    );
}

export default HomePage;
