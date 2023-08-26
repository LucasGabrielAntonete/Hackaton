<script>
import axios from 'axios'
export default {
  data() {
    return {
      produto: {},
    };
  },
  mounted() {
    this.buscarProduto();
  },
  methods: {
    async buscarProduto() {
      const produtoId = this.$route.params.id;
      try {
        const resposta = await axios.get(`/produtos/${produtoId}/`);
        this.produto = resposta.data;
        console.log('Produto', this.produto);
      } catch (error) {
        console.error('Erro buscando ao buscar o produto.', error);
      }
    },
  },
};
</script>

<template>
    <h1>Produtos</h1>
    <hr />
    <h1>{{ produto.nome }}</h1>
    <h1>
      
    </h1>
    <img :src="produto.capa.file" alt="">

</template>
