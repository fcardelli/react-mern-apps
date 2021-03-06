import React, { Component } from 'react';
//Importando itens do bootstrap para o nav menu
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';

//Adicionando componentes de Clientes
import ListaClientes from '../pages/Clientes/ListaClientes';
import AdicionaCliente from '../pages/Clientes/AdicionaCliente';
import DetalheCliente from './Clientes/EditaCliente';
import EditaCliente from './Clientes/EditaCliente';

class Content extends Component {
  render() {
    return (
      <Content>
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="index">MERN Stack CRUD Operations</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem>
                <Link to="/">Inicio</Link>
              </NavItem>
              <NavItem>
                <Link to="/adiciona">Adiciona Cliente</Link>
              </NavItem>
              <NavItem>
                <Link to="/detalhe/:id">Adiciona Cliente</Link>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
        <div>
          <Switch>
            <Route exact path='/' Component={ListaClientes}/>
            <Route path='/adiciona/' Component={AdicionaCliente}/>
            <Route path='/detalhe/:id' Component={EditaCliente}/>
          </Switch>
        </div>
      </Content>
    );
  }
}

export default Content;