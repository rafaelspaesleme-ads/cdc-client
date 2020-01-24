import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
// import { Container } from './styles';

class Logout extends Component {

    componentWillMount() {
        localStorage.clear('auth-token');
        this.props.history.push("/");

    }

    render() {
    return null;
  }
}
export default withRouter(Logout);