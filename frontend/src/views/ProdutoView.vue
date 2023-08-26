<script>
import axios from 'axios'
import jwtDecode from 'jwt-decode'
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
        const produtoId = this.$route.params.id
        const decodedToken = jwtDecode(token)
        const usuarioId = decodedToken.user_id

        const resposta = await axios.get(`/produtos/${produtoId}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
            accept: 'application/json'
          }
        })
        this.produto = resposta.data
        console.log(produtoId)
        const response = await axios.post('/api/adicionar/',
          {
            produto_id: Number(produtoId),
            quantidade: 1, 
            usuario: usuarioId,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            } 
          }
        );
        console.log(response.data.message);
      } catch (error) {
        console.error('Erro ao adicionar ao carrinho:', error);
      }
    },
  }
};
  
</script>

<template>
  <h1>Produtos</h1>
  <hr />
  <h1>{{ produto.nome }}</h1>
  <img :src="produto.capa.file" alt="" />
  <button @click="addToCart">Adicionar ao Carrinho</button>
</template>
