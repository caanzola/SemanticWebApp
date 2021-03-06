import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Instancias from "./components/Instancias";
import Clases from "./components/Clases";
import Propiedades from "./components/Propiedades";
import InstanciaDetail from "./components/InstanciaDetail";
import ClaseDetail from "./components/ClaseDetail";
import PropiedadDetail from "./components/PropiedadDetail";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

      location: "Instancias",
      instancia: null,
      clase: null,
      propiedad: null
    };

    this.callbackNavbar = this.callbackNavbar.bind(this);
    this.handleInstanciaClick = this.handleInstanciaClick.bind(this);
    this.handleClaseClick = this.handleClaseClick.bind(this);
    this.handlePropiedadClick = this.handlePropiedadClick.bind(this);
  }

  callbackNavbar(value) {
    this.setState({
      location: value
    });
  }

  handleInstanciaClick(idInstancia) {
    this.setState({ instancia: idInstancia });
    this.setState({ location: "Información de la instancia" });
  }

  handleClaseClick(idClase) {
    this.setState({
      clase: idClase,
      location: "Información de la clase"
    });
  }

  handlePropiedadClick(idPropiedad) {
    this.setState({
      propiedad: idPropiedad,
      location: "Información de la propiedad"
    });
  }

  render() {
    let pantalla;
    if (this.state.location === "Instancias") {
      pantalla = <Instancias onChange={this.handleInstanciaClick} />;
    } else if (this.state.location === "Clases") {
      pantalla = <Clases onChange={this.handleClaseClick} />;
    } else if (this.state.location === "Propiedades") {
      pantalla = <Propiedades onChange={this.handlePropiedadClick} />;
    } else if (this.state.location === "Información de la instancia") {
      pantalla = <InstanciaDetail instancia={this.state.instancia} />;
    } else if (this.state.location === "Información de la clase") {
      pantalla = (
        <ClaseDetail
          onChange={this.handleInstanciaClick}
          clase={this.state.clase}
        />
      );
    } else if (this.state.location === "Información de la propiedad") {
      pantalla = (
        <PropiedadDetail
          onChange={this.handleInstanciaClick}
          propiedad={this.state.propiedad}
        />
      );
    } 

    return (
      <div className="App container">
        <div>
          <Navbar onChange={this.callbackNavbar} />
        </div>
        <br />
        <br />
        <br />
        <h2>{this.state.location}</h2>
        <br />
        <br />
        <div className="container">
        <div className="align">{pantalla}</div>
        </div>
        
      </div>
    );
  }
}

export default App;
