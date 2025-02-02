import { useState, useRef } from "react";
import axios from "axios";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

import "./App.css";

function App() {
  const [weather, setWeather] = useState({});

  const inputCidade = useRef()

  async function searchCity() {

    const city = inputCidade.current.value;
    const key = "5dedf7180bfd230cb02777954019a575"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt&units=metric`

    const apiInfo = await axios.get(url)

    setWeather(apiInfo.data)


  }

  return (
    <div>
      <h1>HELDER Previsao de Tempo</h1>
      <input type="text" placeholder="digite a cidade" ref={inputCidade}/>
      <button onClick={searchCity}>Pesquisar</button>

      <WeatherInfo weather = {weather}/>
    </div>
  );
}

export default App;
