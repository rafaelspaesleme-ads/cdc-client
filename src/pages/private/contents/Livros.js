import React, { Component } from 'react';
import './../../../css/pure-min.css';
import './../../../css/side-menu.css';
import './../../../css/style.css';
import './../../../css/loading-custom.css';
import $ from 'jquery';
import PubSub from 'pubsub-js';
import SubHeader from './../../../components/SubHeader'
import SimpleTabs from './../../../components/sub/SimpleTabs'

class Livros extends Component {

    urlApi = 'https://cdc-api-rpl.herokuapp.com/api/livros';
    urlApiAutores = 'https://cdc-api-rpl.herokuapp.com/api/autores';
    urlApiCategorias = 'https://cdc-api-rpl.herokuapp.com/api/categorias/buscar/situacao';

    pathAutorization = 'Bearer '+localStorage.getItem('auth-token');

    constructor() {
      super();
      this.state = {list: [], titulo: '', subTitulo: '', autor: {}, editora: '', idioma: '', categoria: {}, listCategoria: [], listAutores: []};
      this.enviaForm = this.enviaForm.bind(this);
      this.setTitulo = this.setTitulo.bind(this);
      this.setSubTitulo = this.setSubTitulo.bind(this);
      this.setAutor = this.setAutor.bind(this);
      this.setEditora = this.setEditora.bind(this);
      this.setIdioma = this.setIdioma.bind(this);
      this.setCategoria = this.setCategoria.bind(this);
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
      PubSub.subscribe('atualiza-lista-livros', function(topico, novaLitsa){
        this.setState({list: novaLitsa, titulo: '', subTitulo: '', autor: '', editora: '', idioma: '', categoria: ''});
      }.bind(this))
    }
  
    componentDidMount() {
      this.carregarAutores();
      this.carregarCategorias();
    }

    carregarAutores() {
      $.ajax({
        url: this.urlApiAutores.concat('/buscar/todos'),
        dataType:'json',
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.pathAutorization
        },
        success:function(novaListagem){
          this.setState({listAutores:novaListagem});
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
    }
  
    carregarCategorias() {
      $.ajax({
        url: this.urlApiCategorias.concat('/true'),
        dataType:'json',
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.pathAutorization
        },
        success:function(novaListagem){
          this.setState({listCategoria:novaListagem});
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
    }
  
    enviaForm(evento){
      console.log(this.state.categoria);
      console.log(this.state.autor);
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
          titulo: this.state.titulo,
          subTitulo: this.state.subTitulo,
          autor: {
            "id": this.state.autor
          },
          editora: this.state.editora,
          idioma: this.state.idioma,
          categoria: {
            "id": this.state.categoria
          }
        }),
        success: function(novaListagem) {
          console.log(novaListagem);
              alert("Mensagem enviada com sucesso!");
              //this.setState({list:novaListagem});   
              PubSub.publish('atualiza-lista-livros', novaListagem);
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
  
    setTitulo(evento) {
      this.setState({titulo:evento.target.value});
    }
  
    setSubTitulo(evento) {
      this.setState({subTitulo:evento.target.value});
    }
  
    setAutor(evento) {
      console.log(this.setState({autor:evento.target.value}))
      this.setState({autor:evento.target.value});
    }
  
    setEditora(evento) {
      this.setState({editora:evento.target.value});
    }
  
    setIdioma(evento) {
      this.setState({idioma:evento.target.value});
    }
  
    setCategoria(evento) {
      console.log(this.setState({categoria:evento.target.value}))
      this.setState({categoria:evento.target.value});
    }
  
    render(){
      return (
 
        <div id="main">
        <SubHeader titulo="Cadastro de livros" subTitulo="Listagem e cadastramento de livros." />
                
        <SimpleTabs 
          cadObject={
            <div className="content" id="content">
            <div className="pure-form pure-form-aligned">
              <form className="pure-form pure-form-aligned margin-vinte" onSubmit={this.enviaForm} method="post">
                <div className="pure-control-group">
                  <label htmlFor="titulo">Titulo</label> 
                  <input id="titulo" type="text" name="titulo" value={this.state.titulo} onChange={this.setTitulo} />                  
                </div>
                <div className="pure-control-group">
                  <label htmlFor="subTitulo">Sub-Titulo</label>
                  <input id="subTitulo" type="text" name="subTitulo" value={this.state.subTitulo} onChange={this.setSubTitulo} />
                </div>
                <div className="pure-control-group">
                <label htmlFor="autores">Autores</label>
                <select id="autor" value={this.state.autor} onSelect={this.state.autor} onChange={this.setAutor} >
                {
                  this.state.listAutores.map(function(autor) {
                    return ( 
                      <option key={autor.id} value={autor.id} required >{autor.nome}</option>
                    );
                  })
                }
                </select>
                {console.log(this.state.autor)}
                </div>
                <div className="pure-control-group">
                  <label htmlFor="editora">Editora</label> 
                  <input id="editora" type="text" name="editora" value={this.state.editora} onChange={this.setEditora} />
                </div>
                <div className="pure-control-group">
                  <label htmlFor="idioma">Idioma</label> 
                  <input id="idioma" type="text" name="idioma" value={this.state.idioma} onChange={this.setIdioma} />
                </div>
                <div className="pure-control-group">
                <label htmlFor="categoria">Categoria</label>
                <select id="categoria" value={this.state.categoria} onSelect={this.state.categoria} onChange={this.setCategoria} >
                {
                  this.state.listCategoria.map(function(categoria) {
                    return (
                      <option key={categoria.id} value={categoria.id} required >{categoria.descricao}</option>
                    );
                  })
                }
                </select>
                {console.log(this.state.categoria)}
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
                  <th>Cód.</th>
                  <th>Titulo</th>
                  <th>Autor</th>
                  <th>Editora</th>
                  <th>Categoria</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.list.map(function(livro) {
                    return (
                    <tr key={livro.id}>
                      <td>{livro.id}</td>                
                      <td>{livro.titulo}</td>
                      <td>{livro.autor.nome}</td>
                      <td>{livro.editora}</td>
                      <td>{livro.categoria.descricao}</td>
                    </tr>
                    );
                  })
                }  
              </tbody>
            </table> 
          </div>
          }
         />
        </div>
      )
    }
}

export default Livros;