<script>
import ProdutoApi from '@/api/produto'
import CategoriaApi from '@/api/categorias'
const produtoApi = new ProdutoApi()
const categoriaApi = new CategoriaApi()


export default {
  data() {
    return {
      produtos: [],
    }
  },
  async created() {
    this.produtos = await produtoApi.buscarTodosOsProdutos()
    this.categorias = await categoriaApi.buscarTodasAsCategorias()
  }
}
</script>
<template>
  <div class="h1lancamentos">
    <h1>Lançamentos</h1>
  </div>
  <div class="lancamentos">
    <div class="card-produto" v-for="lancamentos in categorias" :key="lancamentos.id">
      <img :src="lancamentos.capa.file" alt="" />
      <router-link :to="'/api/produtos/por-categoria/6/' + lancamentos.id_lancamento">
        <h1 class="h1produto">{{ lancamentos.nome }}</h1>
        <h3>R$:{{ lancamentos.preco }}</h3>
      </router-link>
      <div class="left">
        <div class="right">
          <button class="buttonCarrinho">Alugar</button>
        </div>
      </div>
    </div>
  </div>
  <div class="divButtonVerMais">
      <button class="buttonVerMais">Ver mais</button>
    </div>

  <hr />
  <div class="produtos">
    <div class="card-produto" v-for="produto in produtos" :key="produto.id">
      <img :src="produto.capa.file" alt="" />
      <router-link :to="'/produto/' + produto.id_produto"
        ><h1 class="h1produto">{{ produto.nome }}</h1>
        <h3>R$:{{ produto.preco }}</h3>
      </router-link>
      <div class="left">
        <div class="right">
          <button class="buttonCarrinho">Alugar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

.h1produto {
  margin-top: 2px;
  padding-top: 0px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  justify-content: center;
  align-items: center;
}
h3 {
  padding-bottom: 0%;
  margin-bottom: 0px;
  margin-left: 40px;
  justify-content: center;
  align-items: center;
}

h1 {
  font-family: 'Lato', sans-serif;
  margin-left: 5%;
  padding: 5px;
  font-size: 28px;
  margin-top: 20px;
}
hr {
  border: 0;
  border-top: 1px dashed #ccc;
  border-bottom: 2px solid #ccc;
  height: 3px;
  margin-left: 50px;
  margin-right: 50px;
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

.card-produto:hover {
  transform: scale(1.1);
  transition: all 0.5s;
}
img {
  width: 200px;
  height: 280px;
  border-radius: 6px;
  margin-top: 15px;
}

.buttonCarrinho {
  background-color: rgba(212, 186, 163, 1);
  border-radius: 30px;
  height: 30px;
  width: 100px;
  padding: 0 20px;
  position: absolute;
  margin-top: 30px;
}

.lancamentos {
  margin-top: 60px;
  margin-left: 10%;
  margin-bottom: 0px;
  display: grid;
  grid-template-columns: repeat(3, 33%);
  
}
.h1lancamentos {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.divButtonVerMais {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.buttonVerMais {
  background-color: rgba(212, 186, 163, 1);
  border-radius: 30px;
  height: 40px;
  width: 100px;
  margin-bottom:15px;
}
</style>
