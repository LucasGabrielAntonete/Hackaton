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
     padding: 5px;
}
hr{
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
  width: 280px;
  height: 400px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>