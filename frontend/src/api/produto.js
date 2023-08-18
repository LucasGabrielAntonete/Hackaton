import axios from 'axios'
const token = localStorage.getItem('token');
const config = {headers: { Authorization: `Bearer ${token}`,
'Content-Type': 'multipart/form-data',
accept: 'application/json' }  }
export default class ProdutoApi {
  async buscarTodosOsProdutos() {
    const { data } = await axios.get('/produtos/', config)
    return data
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
