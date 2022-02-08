// import React, { Component } from "react";
import { useState } from 'react';

// class App extends Component {

function App(){
  // constructor() {
  //   super();
  //   this.state = {
  //     listadoDeFrutas: ["Manzana", "Pera", "Banana"],
  //   };
  // }

  const [listadoFrutas, setLista] = useState(["Manzana", "Pera", "Banana"])

  const agregarFruta = (e) => {
    e.preventDefault();
    let nuevaFruta = e.target.nuevaFruta.value;
    // this.setState({
    //   listadoDeFrutas: [...this.state.listadoDeFrutas, nuevaFruta],
    // });
    setLista([...listadoFrutas, nuevaFruta]);
    e.target.nuevaFruta.value = "";
  };

  // render() {
    return (
      <div>
        <h1>Frutas</h1>
        <ul>
          {/*this.state.*/listadoFrutas.map((fruta, i) => {
            return <li key={i}>{fruta}</li>;
          })}
        </ul>
        <form onSubmit={/*this.*/agregarFruta}>
          <input name="nuevaFruta" type="text" /> <br />
          <button>Añadir nueva fruta</button>
        </form>
      </div>
    );

}

export default App;
