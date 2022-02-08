import React from "react";
import Row from "./components/Row";
import Card from "./components/Card";
import Titulo from "./components/Titulo";
import Genre from "./components/Genre";
import RowV2 from "./components/RowV2";

function getPeliculas() {
  return [
    {
      titulo: "Tonto y Re tonto",
      imagen: "./img/movies/1.webp",
    },
    {
      titulo: "Rocky",
      imagen: "./img/movies/2.webp",
    },
    {
      titulo: "Terminator 2",
      imagen: "./img/movies/3.webp",
    },
    {
      titulo: "Volver al futuro II",
      imagen: "./img/movies/4.webp",
    },
    {
      titulo: "Volver al futuro III",
      imagen: "./img/movies/5.webp",
    },
  ];
}

function getSeries() {
  return [
    {
      titulo: "Ash vs Evil Dead",
      imagen: "./img/series/1.webp",
    },
    {
      titulo: "Saint Seiya",
      imagen: "./img/series/2.webp",
    },
    {
      titulo: "Vikingos",
      imagen: "./img/series/3.webp",
    },
    {
      titulo: "Braking Bad",
      imagen: "./img/series/4.webp",
    },
  ];
}

function App() {
  return (
    <div className="App">
      <Titulo titulo={"Nerflis"} />
      <Row titulo={"Películas"} items={getPeliculas()} />
      <Row titulo={"Series"} items={getSeries()} />

      <RowV2 titulo={"Películas"}>
        {getPeliculas().map((item, index) => (
          <Card key={index} titulo={item.titulo} imagen={item.imagen} />
        ))}
      </RowV2>

      <RowV2>
        <Genre name={"Acción"} />
        <Genre name={"Drama"} />
        <Genre name={"Comedia"} />
        <Genre name={"Terror"} />
      </RowV2>
    </div>
  );
}

export default App;
