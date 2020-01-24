import React, { Component } from 'react';
import LayoutPrivate from './LayoutPrivate';
import Autores from './../contents/Autores';

// import { Container } from './styles';

export default class LayoutAutores extends Component {
  render() {
    return (<LayoutPrivate layoutPrivateComponent={<Autores/>} />);
  }
}
