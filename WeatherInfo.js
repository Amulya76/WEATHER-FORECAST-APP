import React from 'react';

const WeatherInfo = ({ weather }) => {
  if (!weather) {
    return null;
  }

  const { name, main, weather: weatherDetails } = weather;

  if (!name || !main || !weatherDetails || !weatherDetails[0]) {
    return <div id="weather-info">Weather data is not available</div>;
  }

  return (
    <div id="weather-info">
      <h2>{name}</h2>
      <p>Temperature: {(main.temp - 273.15).toFixed(2)}°C</p>
      <p>Weather: {weatherDetails[0].description}</p>
    </div>
  );
};

export default WeatherInfo;
