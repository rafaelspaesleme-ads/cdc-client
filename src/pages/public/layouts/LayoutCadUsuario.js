import React, { Component } from 'react';
import CadastroUsuario from './../contents/CadastroUsuario';
import LayoutPublic from './LayoutPublic';

// import { Container } from './styles';

export default class LayoutCadUsuario extends Component {
  render() {
    return (<LayoutPublic layoutComponent={<CadastroUsuario />} />);
  }
}
