<script>
import axios from 'axios'
import jwtDecode from 'jwt-decode'
export default {
  data() {
    return {
      produto: {
        capa: {}
      },
      tamanhoEscolhido: 0,
    }
  },
  mounted() {
    this.buscarProduto()
  },
  methods: {
    async escolherTamanho(tamanho){
      this.tamanhoEscolhido = tamanho
      console.log(this.tamanhoEscolhido)
    },
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
            tamanho: this.tamanhoEscolhido
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
  
  <div class="produto">
    <img :src="produto.capa.file" alt="" />
    <div class="info">
      <h1 class="nome">{{ produto.nome }}</h1>
      <h1 class="preco">R${{ produto.preco }}</h1>
      <h1 class="desc">{{ produto.descricao }}</h1>
      <hr>
      <div class="tamanhos">
          <div v-for="i in produto.tamanho" :key="i.id">
        <h1 class="tamanho" @click="escolherTamanho(i.id)">{{ i.tamanho }}</h1>
        </div>
    </div>
    <div class="comprar"><button @click="addToCart">Adicionar ao Carrinho</button></div>

  </div>
</div>
</template>

<style scoped>
.comprar{
  background-color: rgba(212, 186, 163, 1);
  width: fit-content;
  padding: 5px;
  font-size: large;
  border: 1px solid rgba(212, 186, 163, 1);
  border-radius: 15px;
  margin-top: 10px;
}

hr{
  width: 50%;
  margin: 20px;
  padding: 0;
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 20px;}
.nome{
  font-size: 30px;
  line-height: 50%;
  font-weight: bold;
  margin: 0;
  padding: 0;
}

.desc{
  width: 50%;
}

.tamanhos{
  display:flex;
  flex-direction: row;
  gap: 30px;
}
.tamanho{
  border: 1px solid black;
  border-radius: 100%;
  font-size: 20px;
  margin: 0;
  padding: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.tamanho:active{
  background-color: rgba(212, 186, 163, 1);
}




.preco{
  font-size: 25px;
  margin: 0;
  padding: 0;
}
.produto{
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 80%;
  margin: 50px auto;
}

.info{
  display: flex;
  flex-direction: column;
  width: 70%;
}
img{
  width: 30%;
  border-radius: 10px;
}
</style>