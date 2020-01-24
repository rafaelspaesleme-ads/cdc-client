import React, { Component } from 'react';
import './../../../css/pure-min.css';
import './../../../css/side-menu.css';
import './../../../css/style.css';
import SubHeader from './../../../components/SubHeader';
import $ from 'jquery';
import PubSub from 'pubsub-js';

class EsqueciSenha extends Component {

  urlApi = 'https://cdc-api-rpl.herokuapp.com/api';

  constructor() {
    super();
    this.state = {email: ''};
    this.enviaForm = this.enviaForm.bind(this);
    this.setEmail = this.setEmail.bind(this);
  }  
  
  enviaForm(evento){
    evento.preventDefault();
    $.ajax({
      url: this.urlApi.concat('/auth/nova_senha/'),
      contentType: 'application/json',
      dataType: 'json',
      type: 'post',
      data: JSON.stringify({
        email: this.state.email
      }),
      success: function(novaListagem) {
        console.log(novaListagem);
            alert("Uma nova senha foi gerada para você e enviada para o seu email!\nRecomendamos trocar essa senha, para uma de sua.");
            //this.setState({list:novaListagem});   
            PubSub.publish('atualiza-usuarios', novaListagem);
      },
      error: function(resposta) {
          if (resposta.status > 99 && resposta.status < 200){
            alert('Uma nova senha foi gerada para você e enviada para o seu email!\nRecomendamos trocar essa senha, para uma de sua.');
          }
          if (resposta.status > 199 && resposta.status < 300){
            alert('Uma nova senha foi gerada para você e enviada para o seu email!\nRecomendamos trocar essa senha, para uma de sua.');
          }
          if (resposta.status > 299 && resposta.status < 400){
            alert('Requisição HTTP redirecionada. Código: '.concat(resposta.status));
          }
          if (resposta.status > 399 && resposta.status < 500){
            alert('Erro de cliente da requisição HTTP. Código: '.concat(resposta.status));
          }
          if (resposta.status > 499 && resposta.status < 600){
            alert('Erro de servidor da requisição HTTP. Código: '.concat(resposta.status));
          }
        }
    })
  }

  componentWillMount() {
    PubSub.subscribe('atualiza-usuarios', function(topico){
        this.setState({email: ''});
      }.bind(this))
  }
  
  setEmail(evento) {
    this.setState({email:evento.target.value});
  }
  render(){
    return (
    <div id="layout">
      <div id="main">
      <SubHeader titulo="PERDI MEU ACESSO" subTitulo="Informe seu e-mail abaixo para recuperação do seu acesso ao sistema." />

                  
        <div className="content" id="content">
            <div className="pure-form pure-form-aligned">
            <form className="pure-form pure-form-aligned margin-vinte" onSubmit={this.enviaForm} method="post">
                    <div className="pure-control-group">
                        <label htmlFor="email">Email</label> 
                        <input id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail} />                  
                    </div>
                <div className="pure-control-group">                                  
                <label></label> 
                <button type="submit" className="pure-button pure-button-primary">Recuperar</button>                                    
                </div>
            </form>       
            </div>
        </div>
  
        
        </div>
    </div>
    )
  }
}
export default EsqueciSenha;