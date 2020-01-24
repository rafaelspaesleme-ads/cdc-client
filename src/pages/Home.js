import React, { Component } from 'react';
import Layout from './Layout';
import ButtonAppBar from './../components/sub/ButtonAppBar';
import FooterMain from './../components/FooterMain';
import BoasVindas from './public/contents/BoasVindas';

export default class Home extends Component {
  render() {
    
    return (
      <div>
        <Layout bodyMain={<ButtonAppBar selectMenuIcon="false" />} />
        <BoasVindas/>
        <FooterMain/>
      </div>
      )
  }
}
