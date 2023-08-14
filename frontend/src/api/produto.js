import axios from 'axios'
export default class ProdutoApi {
  async buscarTodosOsProdutos() {
    const { data } = await axios.get('/produtos/')
    return data
  }
  async adicionarProdutos(produto) {
    const { data } = await axios.post('/produtos/', produto)
    return data
  }
  async atualizarProduto(produto) {
    const { data } = await axios.put(`/produtos/${produto.id}/`, produto)
    return data
  }
  async deletarProduto(id) {
    const { data } = await axios.delete(`/produtos/${id}/`)
    return data
  }
}
