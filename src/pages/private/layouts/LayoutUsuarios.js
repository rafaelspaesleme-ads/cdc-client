import React, { Component } from 'react';
import LayoutPrivate from './LayoutPrivate';
import Usuarios from './../contents/Usuarios';

// import { Container } from './styles';

export default class LayoutUsuarios extends Component {
  render() {
    return (<LayoutPrivate layoutPrivateComponent={<Usuarios />} />);
  }
}
