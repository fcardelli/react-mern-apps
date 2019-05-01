import React, { Component } from 'react';
import axios from 'axios';

const customStyle = {
    width: '300px',
    margin: '0 auto'
}

//Herda do elemento component invoca o construtor para iniciar a criação do Cliente
class AdicionaCliente extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            sobrenome: '',
            email: '',
            telefone: ''
        }
    }


// Quando o valor dos campos são alterados executa
handleChange = (evento) => {
    this.setState({ [evento.target.name]: evento.target.value });
}

//Adiciona o Cliente quando é executado o evento submit no formulário
handleSubmit = (evento) => {
    evento.preventDefault();
    const { nome, sobrenome, email, telefone } = this.state;
    axios.post('http://localhost:4000/clientes/adiciona', {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        telefone: telefone,
    })
    .then((resposta) => {
        console.log(resposta);
        this.props.history.push('/');
    })
    .catch((erro) => {
        console.log(erro);
    });
}

render() {
    return (
      <div className="container">
        <form style={customStyle} onSubmit={this.handleSubmit}>
            <label> Nome: 
                <input name="nome" type="text" value={this.state.nome} 
                onChange={this.handleChange} className="form-control"/>
            </label>
            <br/>
            <label> Sobrenome: 
                <input name="sobrenome" type="text" value={this.state.sobrenome} 
                onChange={this.handleChange} className="form-control"/>
            </label>
            <br/>
            <label> E-mail: 
                <input name="email" type="text" value={this.state.email} 
                onChange={this.handleChange} className="form-control"/>
            </label>
            <br/>
            <label> Telefone: 
                <input name="telefone" type="text" value={this.state.telefone} 
                onChange={this.handleChange} className="form-control"/>
            </label>
            <br/>
            <label>
                <input type="submit" value="submit" className="btn btn-primary"/>
            </label>
        </form>
      </div>
    );
}

}

export default AdicionaCliente;
