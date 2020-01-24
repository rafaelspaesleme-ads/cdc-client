import React, { Component } from 'react';
import LayoutPrivate from './LayoutPrivate';
import Livros from './../contents/Livros';

// import { Container } from './styles';

export default class LayoutLivros extends Component {
  render() {
    return (<LayoutPrivate layoutPrivateComponent={<Livros />} />);
  }
}
