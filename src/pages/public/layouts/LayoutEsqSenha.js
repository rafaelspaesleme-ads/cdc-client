import React, { Component } from 'react';
import EsqueciSenha from './../contents/EsqueciSenha';
import LayoutPublic from './LayoutPublic';

// import { Container } from './styles';

export default class LayoutEsqSenha extends Component {
  render() {
    return (<LayoutPublic layoutComponent={<EsqueciSenha />} />);
  }
}
