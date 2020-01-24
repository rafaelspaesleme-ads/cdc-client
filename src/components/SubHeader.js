import React, { Component } from 'react';

export default class SubHeader extends Component {
  render() {
    return (
        <div className="header">
            <h1 key={this.props.titulo} >{this.props.titulo}</h1>
            <h2 key={this.props.subTitulo} >{this.props.subTitulo}</h2>
        </div>
    )
  }
}
