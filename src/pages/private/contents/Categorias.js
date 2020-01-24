import React, { Component } from 'react';
import './../../../css/pure-min.css';
import './../../../css/side-menu.css';
import './../../../css/style.css';
import './../../../css/loading-custom.css';
import $ from 'jquery';
import PubSub from 'pubsub-js';
import SubHeader from './../../../components/SubHeader'
import SimpleTabs from './../../../components/sub/SimpleTabs'

class Categorias extends Component {

    urlApi = 'https://cdc-api-rpl.herokuapp.com/api/categorias';

    pathAutorization = 'Bearer '+localStorage.getItem('auth-token');

    constructor() {
      super();
      this.state = {list: [], descricao: '', ativo: false};
      this.enviaForm = this.enviaForm.bind(this);
      this.setDescricao = this.setDescricao.bind(this);
      this.setAtivo = this.setAtivo.bind(this);
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
      PubSub.subscribe('atualiza-lista-categorias', function(topico, novaLitsa){
        this.setState({list: novaLitsa, descricao: '', ativo: false});
      }.bind(this))
    }
  
    enviaForm(evento){
      console.log(this.state.ativo);
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
          descricao: this.state.descricao,
          ativo: this.state.ativo
        }),
        success: function(novaListagem) {
          console.log(novaListagem);
              alert("Mensagem enviada com sucesso!");
              //this.setState({list:novaListagem});   
              PubSub.publish('atualiza-lista-categorias', novaListagem);
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
  
    setDescricao(evento) {
      this.setState({descricao:evento.target.value});
    }
  
    setAtivo(evento) {
      this.setState({ativo:evento.target.value});
    }
  
    render(){
      return (
        <div id="main">
        <SubHeader titulo="Cadastro de categorias" subTitulo="Listagem e cadastramento de categorias." />
        
        <SimpleTabs cadObject={
            <div className="content" id="content">
            <div className="pure-form pure-form-aligned">
              <form className="pure-form pure-form-aligned margin-vinte" onSubmit={this.enviaForm} method="post">
                <div className="pure-control-group">
                  <label htmlFor="descricao">Descrição</label> 
                  <input id="descricao" type="text" name="descricao" value={this.state.descricao} onChange={this.setDescricao} />                  
                </div>
                <div className="pure-control-group">
                  <label htmlFor="ativo">Situação</label> 
                  <input id="ativo" type="checkbox" name="ativo" 
                                 value={ true }
                                 onChange={this.setAtivo} checked={this.checked = this.state.ativo}/>
                </div>
                {console.log(this.state.ativo)}
                <div className="pure-control-group">                                  
                  <label></label> 
                  <button type="submit" className="pure-button pure-button-primary">Gravar</button>                                    
                </div>
              </form>             
            </div>
            </div>}

          listObject={
            <div className="margin-vinte margin-center">            
            <table className="pure-table">
              <thead>
                <tr>
                  <th>Descrição</th>
                  <th>Situação</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.list.map(function(categoria) {
                    return (
                    <tr key={categoria.id}>
                      <td>{categoria.descricao}</td>     
                      <td>
                      { categoria.ativo == true && <span>Ativo</span> }
                      { categoria.ativo == false && (<span>Inativo</span>) }
                      </td>
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

export default Categorias;