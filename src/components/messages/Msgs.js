import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// import { Container } from './styles';

export default class Msgs extends Component {
  render(props) {
    return (
        <div>
        <br/>
          <div class={this.props.alertNamedClass} role="alert">
              {this.props.msgOcorridoLogin}
          </div>
        </div>
    );
  }
}