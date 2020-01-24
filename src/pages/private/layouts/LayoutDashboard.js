import React, { Component } from 'react';
import LayoutPrivate from './LayoutPrivate';
import Dashboard from './../contents/Dashboard';

// import { Container } from './styles';

export default class LayoutDashboard extends Component {
  render() {
    return (<LayoutPrivate layoutPrivateComponent={<Dashboard />} />);
  }
}
