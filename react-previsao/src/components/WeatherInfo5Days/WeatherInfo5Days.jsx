function WeatherInfo5Days({ weather5Days }) {
  console.log(weather5Days);

  if (!weather5Days || !weather5Days.list) {
    return <p>Carregando previsão...</p>;
  }

  let dailyForecast = {};

  for (let forecast of weather5Days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }

  const next5Days = Object.values(dailyForecast).slice(1, 6);

  function converterDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString("pt", {
      weekday: "long",
      day: "2-digit",
    });
    return newDate;
  }

  return (
    <div className="weather-container">
      <h3>Previsao Proximos 5 days</h3>
      <div className="weather-list">
        {next5Days.map((forecast) => (
          <div key={forecast.dt} className="weather-item">
            <p className="day">{converterDate(forecast)}</p>
            <img
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
              alt=""
            />
            <p className="description">{forecast.weather[0].description}</p>
            <p>
              {Math.round(forecast.main.temp_min)}℃ min /{" "}
              {Math.round(forecast.main.temp_max)}max
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherInfo5Days;
