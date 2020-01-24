import React, { Component } from 'react';
import './../css/pure-min.css';
import './../css/side-menu.css';
import './../css/style.css';

export default class Layout extends Component {
  render() {
    return (
        <div>
          {this.props.bodyMain}
        </div>
    )
  }
}



