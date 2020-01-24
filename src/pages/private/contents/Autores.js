import React, { Component } from 'react';
import './../../../css/pure-min.css';
import './../../../css/side-menu.css';
import './../../../css/style.css';
import './../../../css/loading-custom.css';
import $ from 'jquery';
import PubSub from 'pubsub-js';
import SubHeader from './../../../components/SubHeader'
import SimpleTabs from './../../../components/sub/SimpleTabs'

class Autores extends Component {

    urlApi = 'https://cdc-api-rpl.herokuapp.com/api/autores';

    pathAutorization = 'Bearer '+localStorage.getItem('auth-token');

    constructor() {
      super();
      this.state = {list: [], nome: '', email: ''};
      this.enviaForm = this.enviaForm.bind(this);
      this.setNome = this.setNome.bind(this);
      this.setEmail = this.setEmail.bind(this);
    }
  
    componentWillMount() {
      $.ajax({
        url: this.urlApi.concat('/buscar/todos'),
        dataType:'json',
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.pathAutorization
        },
        success:function(novaListagem){
          this.setState({list:novaListagem});
        }.bind(this),
        error:function(resposta){
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
      });
      PubSub.subscribe('atualiza-lista-autores', function(topico, novaLitsa){
        this.setState({list: novaLitsa, nome: '', email: ''});
      }.bind(this))
    }
  
    enviaForm(evento){
      evento.preventDefault();
      $.ajax({
        url: this.urlApi.concat('/realtime/cadastrar'),
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.pathAutorization
        },
        dataType: 'json',
        type: 'post',
        data: JSON.stringify({
          nome: this.state.nome,
          email: this.state.email
        }),
        success: function(novaListagem) {
          console.log(novaListagem);
              alert("Mensagem enviada com sucesso!");
              //this.setState({list:novaListagem});   
              PubSub.publish('atualiza-lista-autores', novaListagem);
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
  
    setNome(evento) {
      this.setState({nome:evento.target.value});
    }
  
    setEmail(evento) {
      this.setState({email:evento.target.value});
    }
  
    render(){
      return (
        <div id="main">
        <SubHeader titulo="Cadastro de autores" subTitulo="Listagem e cadastramento de autores." />
         
          <SimpleTabs 
            cadObject={
              <div className="content" id="content">
                <div className="pure-form pure-form-aligned">
                  <form className="pure-form pure-form-aligned margin-vinte" onSubmit={this.enviaForm} method="post">
                    <div className="pure-control-group">
                      <label htmlFor="nome">Nome</label> 
                      <input id="nome" type="text" name="nome" value={this.state.nome} onChange={this.setNome} />                  
                    </div>
                    <div className="pure-control-group">
                      <label htmlFor="email">Email</label> 
                      <input id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail} />
                    </div>
                    <div className="pure-control-group">                                  
                      <label></label> 
                      <button type="submit" className="pure-button pure-button-primary">Gravar</button>                                    
                    </div>
                  </form>             
                </div>
              </div>
            } 
            listObject={
              <div className="margin-vinte margin-center">            
                <table className="pure-table">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.list.map(function(autor) {
                        return (
                        <tr key={autor.id}>
                          <td>{autor.nome}</td>                
                          <td>{autor.email}</td>                
                        </tr>
                        );
                      })
                    }  
                  </tbody>
                </table> 
              </div>  
            } />
 
        </div>
      )
    }
}

export default Autores;