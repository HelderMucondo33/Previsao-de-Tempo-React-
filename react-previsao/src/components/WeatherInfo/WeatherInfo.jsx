import './WeatherInfo.css'

function WeatherInfo({ weather }) {
  

  return (
    <div className='weather-container'>
      <h2>{weather.name}</h2>
      <div className='weather-info'>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt="Ícone do clima"
        />
        <p className='temperature'>{Math.round(weather.main.temp)}℃</p>
      </div>
      <p className='description'>{weather.weather[0].description}</p>
      <div className='detail'>
        <p>Sensacao termica: {Math.round(weather.main.feels_like)}</p>
        <p>Unidade: {weather.main.humidity}</p>
        <p>Pressao: {weather.main.pressure}</p>
      </div>
    </div>
  );
}

export default WeatherInfo;
