<script>
import axios from 'axios'
export default {
  data() {
    return {
      produto: {
        capa: {}
      }
    }
  },
  mounted() {
    this.buscarProduto()
  },
  methods: {
    async buscarProduto() {
      const produtoId = this.$route.params.id
      const token = localStorage.getItem('token')
      try {
        const resposta = await axios.get(`/produtos/${produtoId}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
            accept: 'application/json'
          }
        })
        this.produto = resposta.data
        console.log('Produto', this.produto)
      } catch (error) {
        console.error('Erro buscando ao buscar o produto.', error)
      }
    },
    async addToCart() {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.post(
          '/api/adicionar/',
          {
            produto_id: this.produtoId,
            quantidade: 1, 
          },
          {
            headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
            accept: 'application/json'
           },
          }
        );

        // Lógica para atualizar a interface ou mostrar uma mensagem de sucesso
        console.log(response.data.message);
      } catch (error) {
        console.error('Erro ao adicionar ao carrinho:', error);
      }
    },
  },
};
  
</script>

<template>
  <h1>Produtos</h1>
  <hr />
  <h1>{{ produto.nome }}</h1>
  <img :src="produto.capa.file" alt="" />
  <button @click="addToCart">Adicionar ao Carrinho</button>
</template>
