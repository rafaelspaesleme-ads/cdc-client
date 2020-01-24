import React, { Component } from 'react';
import ButtonAppBar from './../../components/sub/ButtonAppBar';
import NotFound from './../errors/NotFound';
import FooterMain from './../../components/FooterMain';

// import { Container } from './styles';

export default class LayoutNotFound extends Component {
  render() {
    return (
        <div>
            <ButtonAppBar/>
            <NotFound/>
            <FooterMain/>
        </div>);
  }
}
