import React, { Component } from 'react';
import './../../../css/pure-min.css';
import './../../../css/side-menu.css';
import './../../../css/style.css';
import SubHeader from './../../../components/SubHeader';
import $ from 'jquery';
import PubSub from 'pubsub-js';

class CadastroUsuario extends Component {

  urlApi = 'https://cdc-api-rpl.herokuapp.com/api/usuarios';

  constructor() {
    super();
    this.state = {nome: '', usuario: '', senha: '', email: ''};
    this.enviaForm = this.enviaForm.bind(this);
    this.setNome = this.setNome.bind(this);
    this.setUsuario = this.setUsuario.bind(this);
    this.setSenha = this.setSenha.bind(this);
    this.setEmail = this.setEmail.bind(this);
  }  

  enviaForm(evento){
    evento.preventDefault();
    $.ajax({
      url: this.urlApi.concat('/realtime/cadastrar'),
      contentType: 'application/json',
      dataType: 'json',
      type: 'post',
      data: JSON.stringify({
        nome: this.state.nome,
        usuario: this.state.usuario,
        senha: this.state.senha,
        email: this.state.email,
        ativo: true
      }),
      success: function(novaListagem) {
        console.log(novaListagem);
            alert("Seu registro foi efetuado com sucesso!");
            //this.setState({list:novaListagem});   
            PubSub.publish('atualiza-usuarios', novaListagem);
      },
      error: function(resposta) {
          if (resposta.status > 99 && resposta.status < 200){
            alert('Consulte as informações de requisições HTTP. Código: '.concat(resposta.status));
          }
          if (resposta.status > 199 && resposta.status < 300){
            alert('Requisição HTTP bem sucedida. Código: '.concat(resposta.status));
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
        this.setState({nome: '', usuario: '', senha: '', email: ''});
      }.bind(this))
  }

  setNome(evento) {
    this.setState({nome:evento.target.value});
  }

  setUsuario(evento) {
    this.setState({usuario:evento.target.value});
  }
  
  setSenha(evento) {
    this.setState({senha:evento.target.value});
  }
  
  setEmail(evento) {
    this.setState({email:evento.target.value});
  }
  
  render(){
    return (
    <div id="layout">
    
    <div id="main">
    <SubHeader titulo="REGISTRO DE USUÁRIO" subTitulo="Realize seu registro abaixo." />
        <div className="content" id="content">
            <div className="pure-form pure-form-aligned">
            <form className="pure-form pure-form-aligned margin-vinte" onSubmit={this.enviaForm} method="post">
                    <div className="pure-control-group">
                        <label htmlFor="nome">Nome</label> 
                        <input id="nome" type="text" name="nome" value={this.state.nome} onChange={this.setNome} />                  
                    </div>
                    <div className="pure-control-group">
                        <label htmlFor="usuario">Usuario</label> 
                        <input id="usuario" type="text" name="usuario" value={this.state.usuario} onChange={this.setUsuario} />                  
                    </div>
                    <div className="pure-control-group">
                        <label htmlFor="senha">Senha</label> 
                        <input id="senha" type="password" name="senha" value={this.state.senha} onChange={this.setSenha} />                  
                    </div>
                    <div className="pure-control-group">
                        <label htmlFor="email">Email</label> 
                        <input id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail} />                  
                    </div>
                <div className="pure-control-group">                                  
                <label></label> 
                <button type="submit" className="pure-button pure-button-primary">Registrar</button>                                    
                </div>
            </form>       
            </div>
        </div>
  
        
        </div>
    </div>
    )
  }
}
export default CadastroUsuario;