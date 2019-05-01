import React, { Component } from 'react';
import axios from 'axios';
//Importando o bootstrap do React-boostrap
import { Table, Button } from 'react-bootstrap';
// Adicionando o Link para Routear o dom
import { Link } from 'react-router-dom';
// Importando o serviço de Cliente
import ClienteService from '../../servicesComponent/Services';

var divStyle = {
    margin: '8% 8%',
};

class ListaClientes extends Component {
    constructor(props) {
        super(props);
        this.clienteService = new ClienteService();
        this.state = {
            clientes: []
        }
        this.removeCliente = this.removeCliente.bind(this);
    }

    componentDidMount = () => {
        this.getListaClientes();
    }

    // Pegar a lista de todos os Clientes
    getListaClientes() {
        axios.get('http://localhost:4000/clientes')
        .then( resposta => {  
            this.setState({ clientes: resposta.data });
            console.log(resposta);
        })
        .catch( erro => {
            console.log(erro);
        })
    }

    // Apagar um cliente
    removeCliente(clienteid) {
        this.clienteService.removeCliente(clienteid);
        this.getListaClientes();
    }

    render(){
        const { clientes } = this.state;
        return (
            <div style={divStyle}>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                            <th></th>
                            <th></th>
                        </tr>        
                    </thead>
                    <tbody>
                    {
                        clientes && clientes.map((clientes, i) => {
                            return (
                                <tr key={i}>
                                <td>{i}</td>
                                <td>{clientes.nome}</td>
                                <td>{clientes.sobrenome}</td>
                                <td>{clientes.email}</td>
                                <td>{clientes.telefone}</td>
                                <td>
                                <Link to={"edita/" + clientes._id} className="btn btn-primary">Atualizar</Link>
                                </td>
                                <td>
                                <Button onClick={() => this.removeCliente(clientes._id)} bsStyle="danger" >Apagar</Button>
                                </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </Table>
            </div>
    );
}
}

export default ListaClientes;