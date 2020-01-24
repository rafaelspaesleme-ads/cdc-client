class Links {
    constructor() {
        this._urlApi = 'https://cdc-api-rpl.herokuapp.com/api/';
        this._pathAutores = 'autores/';
        this._pathCadastrar = 'cadastrar/';
        this._pathAtualizar = 'atualizar/';
        this._pathDeletar = 'deletar/';
        this._pathBusca = 'buscar/';
        this._pathEspecifico = 'espec/';
        this._pathBuscaNome = 'nome/';
        this._pathBuscaEmail = 'email/';
        this._pathBuscaId = 'id/';
    }

    get api() {
        return this._urlApi;
    }

    get autores() {
        return this._pathAutores;
    }

    get cadastrar() {
        return this._pathCadastrar;
    }

    get atualizar() {
        return this._pathAtualizar;
    }

    get deletar() {
        return this._pathDeletar;
    }

    get buscar() {
        return this._pathBusca;
    }

    get buscaEspecifica() {
        return this._pathEspecifico;
    }

    get buscaNome() {
        return this._pathBuscaNome;
    }

    get buscaEmail() {
        return this._pathBuscaEmail;
    }

    get buscaId() {
        return this._pathBuscaId;
    }
}