import React from "react";

export default function WeatherPanel({ weather }) {
  if (!weather || weather.length === 0) {
    return <div className="mb-8">Carregando clima...</div>;
  }
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Clima Atual</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {weather.map((city, idx) => (
          <div key={idx} className="p-4 bg-white dark:bg-gray-800 rounded shadow">
            <h3 className="font-bold">{city.name}</h3>
            <p>{city.weather[0].description}</p>
            <p className="text-2xl">{Math.round(city.main.temp)}°C</p>
          </div>
        ))}
      </div>
    </section>
  );
}
