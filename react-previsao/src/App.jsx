import { useState, useRef } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const inputCidade = useRef()

  function searchCity() {

    console.log(inputCidade.current.value);
  }

  return (
    <div>
      <h1>HELDER Previsao de Tempo</h1>
      <input type="text" placeholder="digite a cidade" ref={inputCidade}/>
      <button onClick={searchCity}>Pesquisar</button>
    </div>
  );
}

export default App;
