<script>
import NoivaApi from '@/api/noivas'
const noivaApi = new NoivaApi()


export default {
  data() {
    return {
      noivas: [],
    }
  },
  async created() {
    this.noivas = await noivaApi.buscarTodasAsNoivas()
    console.log(this.noivas)
  }
}

</script>
<template>


  <div class="h1noivas">
    <h1>Noivas</h1>
  </div>
  <div class="noivas">
    <div class="card-produto" v-for="noiva in noivas" :key="noiva.id">
      <img :src="noiva.capa.file" alt="" />
      <router-link :to="'/api/produtos/por-categoria/4/'">
        <h1 class="h1produto">{{ noiva.nome }}</h1>
        <h3>R$:{{ noiva.preco }}</h3>
      </router-link>
    </div>
  </div>
  
</template>
<style scoped>

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


.h1produto {
  margin-top: 2px;
  padding-top: 0px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  justify-content: center;
  align-items: center;
}




</style>
