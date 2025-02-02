function WeatherInfo({ weather }) {
    // Verifica se weather e weather.weather estão definidos
    if (!weather || !weather.weather || !weather.weather[0]) {
        return <div>Carregando...</div>; 
    }

    return (
        <div>
            <h2>{weather.name}</h2>
            <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                alt="Ícone do clima"
            />
        </div>
    );
}

export default WeatherInfo;