import React, { Component } from 'react';
import './../../css/pure-min.css';
import './../../css/side-menu.css';
import './../../css/style.css';
import LinearIndeterminate from './../../components/sub/LinearIndeterminate'

class NotFound extends Component {

    constructor() {
      super();
    }  
  
    render(){
      return (
      <div id="layout">
  
      <div id="main">
          <div className="header">
              <h1>404</h1>
              <h2>Pagina não encontrada.</h2>
              <br/>
              <LinearIndeterminate/>
              <br/>
          </div>
          </div>
      </div>
      )
    }
  }
  
  export default NotFound;