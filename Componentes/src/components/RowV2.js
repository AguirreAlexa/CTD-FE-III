import React from "react";

function RowV2(props) {
  return (
    <div className="row">
      <h2 className="row-title">{props.titulo}</h2>
      <div className="list">{props.children}</div>
    </div>
  );
}

export default RowV2;
