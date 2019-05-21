import React, { Component } from "react";

export default class Instancias extends Component {
  constructor(props) {
    super(props);

    this.state = {
      instancias: [],
      instanciaBuscada: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    this.setState({
      instanciaBuscada: event.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let uriEntidad = this.state.instanciaBuscada;
    console.log(uriEntidad);
  }

  renderInstancias() {
    return this.state.instancias.map((inst, i) => (
      <li>
        <a
          onClick={this.props.onChange.bind(this, inst)}
          href="#instanciaDetail"
        >
          {inst}
        </a>
      </li>
    ));
  }

  componentDidMount() {

    fetch('/query/instancias', {
      method: 'GET',

    }).then((response) => {
      return response.json();
    }).then((json) => {
      console.log(json);

      let queryResult = json.results.bindings;

      this.setState({
        instancias: queryResult,
      })


    })
    .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="searchDiv">
        <form
          class="form-inline "
          id="buscadorInstancias"
          onSubmit={this.handleSubmit}
        >
          <div class="form-group mb-2">
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              id="staticEmail2"
              value="Nombre de la instancia"
            />
          </div>
          <div class="form-group mx-sm-3 mb-2">
            <input
              type="text"
              class="form-control"
              id="inputBuscadorInstancias"
              placeholder="instancia"
              onChange={this.handleSearchChange}
            />
          </div>
          <button type="submit" class="btn btn-info mb-2">
            Buscar
          </button>
        </form>
        <ul>
          <li>{this.renderInstancias()}</li>
        </ul>
      </div>
    );
  }
}
