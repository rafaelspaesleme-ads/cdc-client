import React, { Component } from 'react';
import Login from './../contents/Login';
import LayoutPublic from './LayoutPublic';

// import { Container } from './styles';

export default class LayoutLogin extends Component {
  render() {
    return (<LayoutPublic layoutComponent={<Login />} />);
  }
}
