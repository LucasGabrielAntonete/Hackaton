<script setup>
</script>

<template>
        <h1>Debutantes</h1>
        <hr>
        <div class="produtos">
           <div class="card-produto">
        
           </div>
           <div class="card-produto">

           </div>
           <div class="card-produto">

           </div>
        </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

h1{
     font-family: 'Lato', sans-serif;
     margin-left: 5%;
}
hr{
    width:90%;
}
.produtos {
  margin: 200px;
  margin-top: 30px;
  margin-left: 10%;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-auto-rows: 50%;
}
.card-produto {
  width: 300px;
  height: 450px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>