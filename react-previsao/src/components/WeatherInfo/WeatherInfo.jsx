function WeatherInfo({ weather }) {
  // Verifica se weather e weather.weather estão definidos
  if (!weather || !weather.weather || !weather.weather[0]) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h2>{weather.name}</h2>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt="Ícone do clima"
        />
        <p>{Math.round(weather.main.temp)}℃</p>
      </div>
      <p>{weather.weather[0].description}</p>
      <div>
        <p>Sensacao termica: {Math.round(weather.main.feels_like)}</p>
        <p>Unidade: {weather.main.humidity}</p>
        <p>Pressao: {weather.main.pressure}</p>
      </div>
    </div>
  );
}

export default WeatherInfo;
