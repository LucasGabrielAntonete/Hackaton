<script setup></script>

<template>
    <div><img class="Momento" src="./Fachada.png" alt="" /></div>
    <h1>Quem Somos</h1>
    <section>
      <div class="Linha">
        <div class="Historia">
          <p>
            Fundado em 2 de maio de 1996, nosso ateliê é especializado em locação de vestidos de
            noiva, madrinha, formanda, debutante, dama, primeira comunhão, além de toda a linha de
            roupas sociais masculinas. Confeccionamos também toda a linha de vestidos para locação
            de primeiro uso! Estamos situados na zona sul de Joinville, dispomos de amplo
            estacionamento e espaço interior, para que você sinta-se muito confortável em estar
            conosco!"
          </p>
        </div>
      </div>

      <div class="Local">
        <img class="Mapa" src="./Maps.png" alt="" />
      </div>
    </section>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,100;1,300;1,400&display=swap');

.Momento {
  width: 1900px;
  height: 600px;
}

h1 {
  text-align: center;
  font-size: 50px;
  font-family: 'Lato', sans-serif;
  font-style: italic;
  letter-spacing: 2px;
  font-weight: normal;
}
.Historia {
  box-sizing: border-box;
  float: left;
  width: 50%;
  height: 50px;
  padding: 100px;
  text-align: justify;
  font-size: 25px;
  font-family: 'Lato', sans-serif;
}
.Linha {
  content: '';
  display: contents;
  clear: both;
}
img.Mapa {
  width: 600px;
  border-radius: 50px;
  box-sizing: border-box;
  padding-top: 100px;
  padding-left: 100px;
}
</style>
