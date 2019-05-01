import axios from 'axios';

class ClienteServico {
    removeCliente(id){
        axios.get('http://localhost:4000/clientes/apaga/'+id)
        .then(() => {
            console.log('O cliente foi apagado com sucesso')
        })
        .catch((erro) => {
            console.log(erro)
        })
    }
}

export default ClienteServico;