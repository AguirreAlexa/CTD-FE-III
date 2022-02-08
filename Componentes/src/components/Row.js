import React from "react";
import Card from "./Card";

function Row(props) {
  return (
    <div className="row">
      <h2 className="row-title">{props.titulo}</h2>
      <div className="list">
        {props.items.map((item, index) => (
          <Card key={index} titulo={item.titulo} imagen={item.imagen} />
        ))}
      </div>
    </div>
  );
}

export default Row;
