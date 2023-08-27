<script>
import DestaquesApi from '@/api/destaques'
import CategoriaApi from '@/api/categorias'
const destaquesApi = new DestaquesApi()
const categoriaApi = new CategoriaApi()

export default {
  data() {
    return {
      destaques: [],
      categorias: []
    }
  },
  async created() {
    this.destaques = await destaquesApi.buscarTodasOsDestaques()
    this.categorias = await categoriaApi.buscarTodasAsCategorias()
    console.log(this.categorias)
  }
}
</script>
<template>
  <div class="h1lancamentos">
    <h1>Lançamentos</h1>
  </div>
  <hr />
  <div class="lancamentos">
    <div class="card-produto" v-for="lancamentos in categorias" :key="lancamentos.id">
      <img :src="lancamentos.capa.file" alt="" />
      <router-link :to="'/api/produtos/por-categoria/6/' + lancamentos.id_lancamento">
        <div class="mid">
          <h2 class="h1produto">Vestido {{ lancamentos.nome }}</h2>
        </div>
        <div class="lefttt">
          <h3>R$:{{ lancamentos.preco }},00</h3>
        </div>
      </router-link>
      <div class="left">
        <div class="right">
          <button class="buttonCarrinho">Alugar</button>
        </div>
      </div>
    </div>
  </div>
  <div class="h1lancamentos">
    <h1>Destaques</h1>
  </div>
  <hr />
  <div class="produtos">
    <div class="card-produto" v-for="destaque in destaques" :key="destaque.id">
      <img :src="destaque.capa.file" alt="" />
      <router-link :to="'/produto/por-categoria/7/' + destaque.id_produto">
        <div class="mid">
          <h2 class="h1produto">Vestido {{ destaque.nome }}</h2>
        </div>
        <div class="lefttt">
          <h3>R$: {{ destaque.preco }},00</h3>
        </div>
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
@import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');

.h1produto {
  margin-top: 2px;
  padding-top: 0px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  justify-content: left;
  align-items: left;
}
h2 {
  font-family: 'Lato', sans-serif;
}
h3 {
  font-family: 'Lato', sans-serif;
  padding-bottom: 0%;
  margin-bottom: 0px;
  margin-left: 30px;
  justify-content: left;
  align-items: left;
}
.lefttt {
  display: flex;
  justify-content: left;
  align-items: left;
  margin-right: 100px;
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
  margin-left: 155px;
  margin-right: 235px;
}

.mid {
  display: flex;
  justify-content: center;
  align-items: center;
}

.left {
  display: flex;
  justify-content: left;
  align-items: left;
  margin-right: 150px;
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
  box-shadow: rgba(212, 186, 163, 1) 0px 2px 8px 0px;
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
  font-family: 'Pinyon Script', cursive;
  display: flex;
  justify-content: left;
  align-items: left;
  margin-top: 20px;
  margin-right: 110px;
  margin-left: 80px;
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
  margin-bottom: 15px;
}
</style>
