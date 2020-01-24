import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';
import {Routes} from './Routes';
import Layout from './pages/Layout'


class App extends Component {

  constructor() {
    super();
  }  

  bMain = <Routes />;

  render(){
    return (
      <BrowserRouter>
          <Layout bodyMain={this.bMain}/>
      </BrowserRouter>
    )
  }
}
export default App;