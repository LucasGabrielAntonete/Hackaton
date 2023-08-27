<script>
import DebutantesApi from '../api/debutantes';
const debutantesApi = new DebutantesApi()


export default {
  data() {
    return {
      debutantes: [],
    }
  },
  async created() {
    this.debutantes = await debutantesApi.buscarTodasAsDebutantes()
    console.log(this.debutantes)
  }
}


</script>

<template>
      
      <div class="h1noivas">
    <h1>Debutantes</h1>
  </div>
  <hr>
  <div class="produtos">
    <div class="card-produto" v-for="debutante in debutantes" :key="debutante.id">
      <img :src="debutante.capa.file" alt="" />
      <router-link :to="'/api/produtos/por-categoria/2/'">
        <div class="mid">
        <h2 class="h1produto">Vestido {{ debutante.nome }}</h2>
      </div>
      <div class="lefttt">
        <h3>R$:{{ debutante.preco }},00</h3>
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
  font-family: 'Lato', sans-serif;
  margin-top: 2px;
  padding-top: 0px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  justify-content: left;
  align-items: left;
}

.left{
  display: flex;
  justify-content: left;
  align-items: left;
  margin-right: 150px;
}

h2{
  font-family: 'Lato', sans-serif;
  
}
h3 {
  display: absolute;
  font-family: 'Lato', sans-serif;
  
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


.mid{
  display: flex;
  justify-content: center;
  align-items: center;
}

.lefttt{
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

.h1noivas {
  font-family: 'Pinyon Script', cursive;
  display: flex;
  justify-content: left;
  align-items: left;
  margin-top: 20px;
  margin-right: 110px;
  margin-left: 80px;
}


</style>