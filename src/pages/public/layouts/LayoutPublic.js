import React, { Component } from 'react';
import ButtonAppBar from './../../../components/sub/ButtonAppBar';
import FooterMain from './../../../components/FooterMain';

// import { Container } from './styles';

export default class LayoutPublic extends Component {
  render() {
    return (
        <div>
            <ButtonAppBar selectMenuIcon="false" />
            {this.props.layoutComponent}
            <FooterMain/>
        </div>    
    );
  }
}
