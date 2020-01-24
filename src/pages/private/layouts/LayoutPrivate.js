import React, { Component } from 'react';
import MiniDrawer from './../../../components/sub/MiniDrawer';

// import { Container } from './styles';

export default class LayoutPrivate extends Component {
  render() {
    return (
        <div>
            <MiniDrawer />
            {this.props.layoutPrivateComponent}
        </div>    
    );
  }
}
