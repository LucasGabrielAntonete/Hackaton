<template>
 <div class="flex flex-row align-middle justify-center">
    <h1 class="">Seu Carrinho de Compras</h1>
    <hr>
    <div v-for="(item) in ItensCarrinho" :key="item.id">
        <h2>{{ item.nome }}</h2>
        <img :src="item.capa" alt=""/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      ItensCarrinho: [],
    }
  },
  mounted() {
    this.buscarCarrinho()
  },
  methods: {
    async buscarCarrinho() {
      const token = localStorage.getItem('token')
      try {
        const resposta = await axios.get(`api/get_cart/`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
            accept: 'application/json'
          }
        })
        this.ItensCarrinho = resposta.data
        console.log('Produto', this.produto)
      } catch (error) {
        console.error('Erro buscando ao buscar o produto.', error)
      }
    }
  }
}
</script>
