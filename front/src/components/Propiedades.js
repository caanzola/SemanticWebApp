import React, { Component } from 'react'

export default class Propiedades extends Component {
  constructor(props) {
    super(props);

    this.state = {
      propiedades: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    this.setState({
      instanciaBuscada :event.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let uriEntidad = this.state.instanciaBuscada;
    console.log(uriEntidad);
  }

  componentDidMount() {

    fetch('/query/propiedades', {
      method: 'GET',

    }).then((response) => {
      return response.json();
    }).then((json) => {
      console.log(json);

      let queryResult = json.results.bindings;

      this.setState({
        propiedades: queryResult,
      })


    })
    .catch((error) => console.log(error));
  }

  renderPropiedades() {
    console.log(this.state.propiedades);
    return this.state.propiedades.map((propi, i) =>
    <li>
        <a
          onClick={this.props.onChange.bind(this, propi.s.value)}
          href="#propiedadInformacion"
        >
          {propi.s.value}
        </a>
      </li>
    );
  }

  render() {
    return (
      <div className="searchDiv">
      <form
        class="form-inline "
        id="buscadorPropiedades"
        onSubmit={this.handleSubmit}
      >
        <div class="form-group mb-2">
          <input
            type="text"
            readonly
            class="form-control-plaintext"
            id="staticEmail2"
            value="Nombre de la propiedad"
          />
        </div>
        <div class="form-group mx-sm-3 mb-2">
          <input
            type="text"
            class="form-control"
            id="inputBuscadorPropiedades"
            placeholder="propiedad"
            onChange={this.handleSearchChange}
          />
        </div>
        <button type="submit" class="btn btn-info mb-2">
          Buscar
        </button>
      </form>
      <ul>
        <li>{this.renderPropiedades()}</li>
      </ul>
    </div>
    )
  }
}
