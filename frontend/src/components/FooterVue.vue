<script setup>

</script>

<template>
<div class="app">
<footer class="footer">
  <div class="float-container">
  <div class="float-child">
    <h3>Sobre a Momento Especial</h3>
    <p><a href="#">Quem Somos?</a></p>
    <p><a href="#">Políticas de devolução</a></p>
  </div>
  <div class="float-child">
    <h3>Contato</h3>
    <p>+55(47)34264424</p>
    <p>momentoespecialatelie@gmail.com</p>
  </div>
  <div class="float-child">
    <h3>Redes Sociais</h3>
  </div>
</div>
<div class="float-child-bottom">
  <h3>Meios de Pagamento</h3>
</div>
</footer>
</div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');

a{
  text-decoration: none;
  color: inherit;
}

footer{
  display: flex;
  margin: 0;
  padding: 0;
}
.float-container{
  padding: 0;
}

.float-child{
  width: 30%;
  float: left;
  padding: 20px;
  margin: 0px 10px 0px 10px; 
}

.float-child-bottom{
  width: 30%;
  float: left;
  padding: 20px;
}
.footer{
  font-family: 'Lato', sans-serif;
  color: rgba(0, 0, 0, 1);
  display: flex;
  position: bottom fixed;
  padding: 10px 0 10px 0;
  background-color: rgba(212, 186, 163, 1);
}


</style>