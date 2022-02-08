import React from "react";

class Titulo extends React.Component {
  render() {
    return <h1 alt={this.props.alt}>{this.props.titulo}</h1>;
  }
}

export default Titulo;
