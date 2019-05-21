import React, { Component } from "react";

export default class PropiedadDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      instancias: ["instancia 1", "instancia2", "instancia3"],
      instanciaBuscada: ""
    };
  }

  renderInstancias() {
    return this.state.instancias.map((inst, i) => (
      <li>
        <a
          onClick={this.props.onChange.bind(this, inst)}
          href="#instanciaInformacion"
        >
          {inst}
        </a>
      </li>
    ));
  }

  render() {
    return (
      <div>
        <div className="container">
          <h3>{this.props.propiedad}</h3>
        </div>
        <ul>
          <li>{this.renderInstancias()}</li>
        </ul>
      </div>
    );
  }
}
