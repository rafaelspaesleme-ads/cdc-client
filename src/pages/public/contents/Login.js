import React, { Component } from 'react';
import './../../../css/pure-min.css';
import './../../../css/side-menu.css';
import './../../../css/style.css';
import SubHeader from './../../../components/SubHeader';
import 'bootstrap/dist/css/bootstrap.css';
import Msgs from '../../../components/messages/Msgs';
import { withRouter } from "react-router-dom";

class Login extends Component {

  apiUrl = "https://cdc-api-rpl.herokuapp.com/login";

  constructor() {
    super();
    this.state = {msg: ''};
  }  

  enviaLogin(event){
    event.preventDefault();
    const requestInfo = {
        //mode: "no-cors",
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body:JSON.stringify({
          usuario:this.usuario.value,
          senha:this.senha.value
        })
    };
    fetch(this.apiUrl, requestInfo)
    .then(response => {
      if(response.ok){
        console.log(response);
        this.setState({msg: <Msgs alertNamedClass="alert alert-success" msgOcorridoLogin="Login realizado com sucesso." />})
        return response.text();
      } else {
        throw new Error('Não foi possivel realizar seu login. Código: '+response.status);
      }
    })
    .then(token => {
          console.log("token: "+token);
          localStorage.setItem('auth-token', token);
          console.log("Chegou aqui: "+localStorage.getItem('auth-token'));
          let valor = localStorage.getItem('auth-token');
          if (valor !== null){
            return this.props.history.push("/dashboard");
          }
      })
      .catch(error => {
        this.setState({msg: <Msgs alertNamedClass="alert alert-danger" msgOcorridoLogin={error.message} />})
      })
  }

  render(){
    return (
    <div id="layout">
    <div id="main">
    <SubHeader titulo="LOGIN" subTitulo="Realize seu login abaixo." />
        <div className="content" id="content">
            <div className="pure-form pure-form-aligned">
            {this.state.msg}
            <form className="pure-form pure-form-aligned margin-vinte" onSubmit={this.enviaLogin.bind(this)} >
                    <div className="pure-control-group">
                        <label htmlFor="usuario">Usuário</label> 
                        <input id="usuario" type="text" name="usuario" ref={(input) => this.usuario = input} />                  
                    </div>
                    <div className="pure-control-group">
                        <label htmlFor="senha">Senha</label> 
                        <input id="senha" type="password" name="senha" ref={(input) => this.senha = input} />                  
                    </div>
                <div className="pure-control-group">                                  
                <label></label> 
                <input type="submit" className="pure-button pure-button-primary" value="Acessar" />                                  
                </div>
            </form>       
            </div>
        </div>
  
        
        </div>
    </div>
    )
  }
}
export default withRouter(Login);