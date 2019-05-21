import React, {Component} from 'react';


/**
* This class contains all needed to display the nav bar on top.
<a className='nav-item nav-link' onClick={this.state.onChange.bind(this, 'Viz')} href={'#viz'}>Graphs</a>
*/
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      onChange: props.onChange
    };
  }
  
  render() {
    return (
      <div className='fixed-top'>
        
        <nav id='navbar_home' className='navbar navbar-expand-lg navbar-light bg-light'>
          <a id='nombre_nav' className='navbar-brand' 
             href={'#'}>
             Academic papers
          </a>
          <ul class="navbar-nav">
      <li class="nav-item active">
      <a className='nav-item nav-link ' onClick={this.state.onChange.bind(this, 'Instancias')} href={'#instancias'}>Instancias</a>
      </li>
      <li class="nav-item">
      <a className='nav-item nav-link ' onClick={this.state.onChange.bind(this, 'Clases')} href={'#clases'}>Clases</a>
      </li>
      <li class="nav-item">
      <a className='nav-item nav-link ' onClick={this.state.onChange.bind(this, 'Propiedades')} href={'#propiedades'}>Propiedades</a>
      </li>
    </ul>
          

        </nav>
      
      </div>
    );
  }
}