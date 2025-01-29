import React, { useState, useEffect } from 'react';

const WeatherApp: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const fetchWeather = async () => {
    if (city.trim() === '') return;
    setError('');
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
      const data = await response.json();
      if (data.cod === '404') {
        setError('City not found');
        setWeather(null);
      } else {
        setWeather(data);
      }
    } catch (err) {
      setError('Failed to fetch weather data');
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Enter City Name</label>
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <button
        onClick={fetchWeather}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Get Weather
      </button>

      {error && <p className="mt-2 text-red-600">{error}</p>}

      {weather && (
        <div>
          <p className="mt-2 text-lg font-semibold">Weather in {weather.name}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
