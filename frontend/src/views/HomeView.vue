<script>
import ProdutoApi from '@/api/produto'
const produtoApi = new ProdutoApi()
export default {
  data() {
    return {
      produtos: [],
    }
  },
  async created() {
      this.produtos = await produtoApi.buscarTodosOsProdutos()
  },
}
</script>
<template>
  <ul>
    <li v-for="produto in produtos" :key="produto.id">
      <router-link :to="'/produtos/' + produto.id_produto">{{ produto.nome}}</router-link>
    </li>
  </ul>
</template>