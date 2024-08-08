import React, { useState } from 'react';
import Header from './components/Header';
import WeatherInfo from './components/WeatherInfo';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (location) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY`
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeather(null);
    }
  };

  const fetchWeatherByCoordinates = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=YOUR_API_KEY`
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeather(null);
    }
  };

  const getCurrentLocationWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeatherByCoordinates(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div>
      <Header onSearch={fetchWeather} onGetCurrentLocation={getCurrentLocationWeather} />
      <main>
        <WeatherInfo weather={weather} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
