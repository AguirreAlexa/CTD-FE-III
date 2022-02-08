import React from "react";

function InfoBox(props) {
  return (
    <div className="info-box">
      <h4 className="title">{props.titulo}</h4>
    </div>
  );
}

export default InfoBox;
