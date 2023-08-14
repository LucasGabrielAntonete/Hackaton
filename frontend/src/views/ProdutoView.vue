<script>
import ProdutoApi from '@/api/produto'
const produtoApi = new ProdutoApi()
export default {
  data() {
    return {
      produtos: [],
      produto: {}
    }
  },
  async created() {
    this.produtos = await produtoApi.buscarTodosOsProdutos()
  },
  methods: {
    async salvar() {
      if (this.produto.id) {
        await produtoApi.atualizarProduto(this.produto)
      } else {
        await produtoApi.adicionarProduto(this.produto)
      }
      this.produto = {}
      this.produtos = await produtoApi.buscarTodosOsProdutos()
    },
    editar(produto) {
      Object.assign(this.produto, produto)
    },
  }
}
</script>
<template>
    <h1>Produtos</h1>
    <hr />
    <hr />
  <ul>
    <li v-for="produto in produtos" :key="produto.id">
      <span
        >({{ produto.id_produto }}) - {{ produto.nome }} - {{ produto.preco }}</span
      >
    </li>
  </ul>
</template>
