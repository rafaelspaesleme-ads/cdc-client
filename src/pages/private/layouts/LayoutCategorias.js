import React, { Component } from 'react';
import LayoutPrivate from './LayoutPrivate';
import Categorias from './../contents/Categorias';

// import { Container } from './styles';

export default class LayoutCategorias extends Component {
  render() {
    return (<LayoutPrivate layoutPrivateComponent={<Categorias />} />);
  }
}
