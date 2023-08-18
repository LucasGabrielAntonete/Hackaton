import axios from 'axios'
const token = localStorage.getItem('token');
const config = {headers: { Authorization: `Bearer ${token}`,
'Content-Type': 'multipart/form-data',
accept: 'application/json' }  }
export default class ProdutoApi {
  async buscarTodosOsProdutos() {
    let token1 = localStorage.getItem('token');
    if(token1){
    const { data } = await axios.get('/produtos/', {headers: { Authorization: `Bearer ${token1}`,
    'Content-Type': 'multipart/form-data',
    accept: 'application/json' }  })

    return data

    } else {
      console.log("Não tem token")
      setTimeout(() => {
      this.buscarTodosOsProdutos()
      }, 1000)
    }
  }
  async adicionarProdutos(produto) {
    const { data } = await axios.post('/produtos/', produto, config)
    return data
  }
  async atualizarProduto(produto) {
    const { data } = await axios.put(`/produtos/${produto.id}/`, produto, config)
    return data
  }
  async deletarProduto(id) {
    const { data } = await axios.delete(`/produtos/${id}/`)
    return data
  }
}
