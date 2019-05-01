import React, { Component } from 'react';
import axios from 'axios';

const customStyle = {
    width: '300px',
    margin: '0 auto'
}

class EditaCliente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            sobrenome: '',
            email: '',
            telefone: ''
        }
    }

componentDidMount = () => {
    this.getClientePorId();
}

// Pega o cliente pelo número do Id
getClientePorId() {
    axios.get('http://localhost:4000/clientes/detalhes/' + this.props.match.params.id)
    .then((response) => {
        this.setState({
            nome: response.data.nome,
            sobrenome: response.data.sobrenome,
            email: response.data.email,
            telefone: response.data.telefone
        });
    })
    .catch((erro) => {
    console.log(erro);
    })
}

handleChange = (evento) => {
this.setState({ [evento.target.name]: evento.target.value });
}

// Atualiza o Cliente quando executa o evento Submit
handleSubmit = (evento) => {
evento.preventDefault();
const { nome, sobrenome, email, telefone } = this.state;
axios.post('http://localhost:4000/clientes/atualiza/' + this.props.match.params.id, {
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
    <label>
        Nome
        <input
        name="nome"
        type="text"
        value={this.state.nome}
        onChange={this.handleChange}
        className="form-control"
        />
    </label>
    <br />
    <label>
    Sobrenome
        <input
        name="sobrenome"
        type="text"
        value={this.state.sobrenome}
        onChange={this.handleChange}
        className="form-control"
        />
    </label>
    <br />
    <label>
    E-mail
        <input
        name="email"
        type="text"
        value={this.state.email}
        onChange={this.handleChange}
        className="form-control"
        />
    </label>
    <br />
    <label>
    Telefone
        <input
        name="telefone"
        type="text"
        value={this.state.telefone}
        onChange={this.handleChange}
        className="form-control"
        />
    </label>
    <br />
        <input
        type="submit"
        value="submit"
        className="btn btn-primary"
        />
    </form>
</div>
);
}
}

export default EditaCliente;