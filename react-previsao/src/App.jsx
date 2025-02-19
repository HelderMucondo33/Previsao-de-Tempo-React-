import { useState, useRef } from "react";
import axios from "axios";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import WeatherInfo5Days from "./components/WeatherInfo5Days/WeatherInfo5Days";

import "./App.css";

function App() {
  const [weather, setWeather] = useState();
  const [weather5Days, setWeather5Days] = useState();

  const inputCidade = useRef();

  async function searchCity() {
    const city = inputCidade.current.value;
    const key = "5dedf7180bfd230cb02777954019a575";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt&units=metric`;

    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`;

    const apiInfo = await axios.get(url);
    const api5Days = await axios.get(url5Days);

    setWeather(apiInfo.data);
    setWeather5Days(api5Days.data);
  }

  return (
    <div className="container">
      <h1>HELDER Previsao de Tempo</h1>
      <input type="text" placeholder="digite a cidade" ref={inputCidade} />
      <button onClick={searchCity}>Pesquisar</button>

      {weather && <WeatherInfo weather={weather} />}
      {weather5Days && <WeatherInfo5Days weather5Days = {weather5Days}/>}

    </div>
  );
}

export default App;
