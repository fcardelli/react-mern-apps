import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ListaClientes from './assets/components/pages/Clientes/ListaClientes';
import AdicionaCliente from './assets/components/pages/Clientes/AdicionaCliente';
import EditaCliente from './assets/components/pages/Clientes/EditaCliente';
ReactDOM.render(
<BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={ListaClientes}/>
        <Route path="/adiciona" exact={true} component={AdicionaCliente}/>
        <Route path="/edita/:id" exact={true} component={EditaCliente}/>
    </Switch>
</BrowserRouter>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();