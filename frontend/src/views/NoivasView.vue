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
  }
}

</script>
<template>


  <div class="h1noivas">
    <h1>Noivas</h1>
  </div>
  <div class="noivas">
    <div class="card-produto" v-for="noivas in noiva" :key="noivas.id">
      <img :src="noivas.capa.file" alt="" />
      <router-link :to="'/api/produtos/por-categoria/4/'">
        <h1 class="h1produto">{{ noivas.nome }}</h1>
        <h3>R$:{{ noivas.preco }}</h3>
      </router-link>
    </div>
  </div>
  
</template>
<style scoped>
.h1produto {
  margin-top: 2px;
  padding-top: 0px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  justify-content: center;
  align-items: center;
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

</style>
