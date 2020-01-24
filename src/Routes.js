import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LayoutLogin from './pages/public/layouts/LayoutLogin';
import LayoutDashboard from './pages/private/layouts/LayoutDashboard';
import LayoutCadUsuario from './pages/public/layouts/LayoutCadUsuario';
import LayoutEsqSenha from './pages/public/layouts/LayoutEsqSenha';
import LayoutAutores from './pages/private/layouts/LayoutAutores';
import LayoutLivros from './pages/private/layouts/LayoutLivros';
import LayoutCategorias from './pages/private/layouts/LayoutCategorias';
import LayoutUsuarios from './pages/private/layouts/LayoutUsuarios';
import Logout from './pages/private/contents/Logout';
import LayoutNotFound from './pages/errors/LayoutNotFound';
import Home from './pages/Home';
import { Redirect } from 'react-router-dom'


export const Routes = () => {
    return  (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/home" component={Home} exact />
                <Route path="/inicio" component={Home} exact />
                <Route path="/login" component={LayoutLogin} exact />
                
                <Route path="/novo_usuario" component={LayoutCadUsuario} exact />
                <Route path="/esqueci_senha" component={LayoutEsqSenha} exact />

                <Route path="/dashboard" 
                    render={() => (
                        localStorage.getItem('auth-token') === null ? <Redirect to="/" /> : <LayoutDashboard />
                    )} />

                <Route path="/autores" 
                    render={() => (
                        localStorage.getItem('auth-token') === null ? <Redirect to="/home" /> : <LayoutAutores />
                    )} />

                <Route path="/livros" 
                    render={() => (
                        localStorage.getItem('auth-token') === null ? <Redirect to="/home" /> : <LayoutLivros />
                    )} />

                <Route path="/categorias" 
                    render={() => (
                        localStorage.getItem('auth-token') === null ? <Redirect to="/home" /> : <LayoutCategorias />
                    )} />

                <Route path="/usuarios"  
                    render={() => (
                        localStorage.getItem('auth-token') === null ? <Redirect to="/home" /> : <LayoutUsuarios />
                    )} />

                <Route path="/logout" component={Logout}/>  
                <Route component={LayoutNotFound}/>
            </Switch>
        </Router>
    );
}