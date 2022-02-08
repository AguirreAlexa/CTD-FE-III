import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Button from "./components/Button";
import Listado from './components/Listado';

function App() {
  //Necesarias tantas variables??
  const frases=["Haz Click", "Click si eres valiente", "Prueba otra frase", "Yo controlo el boton"];

// Funcion que obtiene una frase del boton, espera un arreglo... REFACTORIZAR 
  function fraseRandom(frases, fraseActual) {
    let indice = Math.floor(Math.random() * 4); // Numero random
    while (fraseActual === frases[indice]) {
      indice = Math.floor(Math.random() * 4);
    }
    fetchData();
    return frases[indice]
  }

  const [fraseChuck, setFraseChuck] = useState("") // Manera de react para crear estados

  async function fetchData() {
    const resultado = await axios.get('https://api.chucknorris.io/jokes/random')
    setFraseChuck(resultado.data.value) // Mandera de react para actualizar estados
  };

  return (
    <div className="app">
      <Button
        frases={frases}
        onClick={fraseRandom}
        fraseChuck={fraseChuck}
      />
      <Listado listadoDeFrases={fraseChuck} />
    </div>

  )

}

export default App;
