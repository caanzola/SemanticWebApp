import React, { Component } from "react";

export default class Clases extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clases: [],
      claseBuscada: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    this.setState({
      claseBuscada: event.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let uriClase = this.state.claseBuscada;
    console.log(uriClase);
  }

  componentDidMount() {
    fetch("/query/clases", {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);

        let queryResult = json.results.bindings;

        this.setState({
          clases: queryResult
        });
      })
      .catch(error => console.log(error));
  }

  renderClases() {
    console.log(this.state.clases);
    if (this.state.clases.length !== 0) {
      return this.state.clases.map((obj, i) => (
         <li>
         <a
           onClick={this.props.onChange.bind(this, obj.s.value)}
           href="#claseDetail"
         >
           {obj.s.value}
         </a>
       </li>
      ));
    } else {
      return;
    }
  }

  render() {
    return (
      <div>
        <div className="searchDiv">
          <form
            class="form-inline" id="buscadorClases" onSubmit={this.handleSubmit}
          >
            <div class="form-group mb-2">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail2"
                value="Nombre de la clase"
              />
            </div>
            <div class="form-group mx-sm-3 mb-2">
              <input
                type="text"
                class="form-control"
                id="inputBuscadorClases"
                placeholder="clase"
                onChange={this.handleSearchChange}
              />
            </div>
            <button type="submit" class="btn btn-info mb-2">
              Buscar
            </button>
          </form>
          <ul>
            <li>{this.renderClases()}</li>
          </ul>
        </div>
      </div>
    );
  }
}
