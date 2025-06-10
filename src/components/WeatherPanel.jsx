import React from "react";

export default function WeatherPanel({ weather }) {
  if (!weather || weather.length === 0) return null;

  return (
    <div className="my-4 grid md:grid-cols-2 gap-4">
      {weather.map((w) =>
        w.weather && w.weather.cod === 200 ? (
          <div
            key={w.name}
            className="bg-white dark:bg-gray-800 rounded shadow p-4 flex items-center space-x-4"
            role="region"
            aria-label={`Clima em ${w.name}`}
          >
            <img
              src={`https://openweathermap.org/img/wn/${w.weather.weather[0].icon}.png`}
              alt={w.weather.weather[0].description}
              className="w-16 h-16"
            />
            <div>
              <div className="font-semibold">{w.name}</div>
              <div>
                {Math.round(w.weather.main.temp)}°C - {w.weather.weather[0].description}
              </div>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}