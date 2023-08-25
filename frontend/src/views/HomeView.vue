<script>
import ProdutoApi from '@/api/produto'
const produtoApi = new ProdutoApi()
export default {
  data() {
    return {
      produtos: []
    }
  },
  async created() {
    this.produtos = await produtoApi.buscarTodosOsProdutos()
  }
}
</script>
<template>
  <div class="produtos">
    <div class="card-produto" v-for="produto in produtos" :key="produto.id">
      <img :src="produto.capa.file" alt="" />
      <router-link :to="'/produto/' + produto.id_produto">{{ produto.nome }}</router-link>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

h1{
    font-family: 'Lato', sans-serif;
    margin-left: 5%;
    padding: 5px;
    font-size: 28px;
    margin-top: 20px;
}
hr{
    background-color: black !important;
    height: 2px;
    width:90%;
    margin-left: 5%;
}
.produtos {
  /* margin: 200px; */
  margin-top: 60px;
  margin-left: 10%;
  display: grid;
  grid-template-columns: repeat(3, 33%);
  /* grid-auto-rows: 50%; */
}
.card-produto {
  width: 250px;
  height: 430px;
  border-radius: 6px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 130px;
}
img{
  width: 200px;
  height: 280px;
  border-radius: 6px;
  margin-top: 15px;
}
</style>