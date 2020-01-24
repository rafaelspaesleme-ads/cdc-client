import React, { Component } from 'react';
import DetailedExpansionPanel from './sub/DetailedExpansionPanel';

var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "20%",
  width: "100%",
};

export default class FooterMain extends Component {
  render() {
    return (
      <div key={style} style={style}>
        <hr/>
        <DetailedExpansionPanel/>
      </div>
        
    );
  }
}