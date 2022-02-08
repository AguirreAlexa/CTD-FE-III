import React from "react";
import InfoBox from "./InfoBox";

function Card(props) {
  return (
    <div className="card">
      <img className="card-image" src={props.imagen} alt={props.titulo} />
      <InfoBox titulo={props.titulo} />
    </div>
  );
}

export default Card;
