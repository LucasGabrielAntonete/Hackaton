<script setup></script>

<template>
    <div><img class="Momento" src="./Fachada.png" alt="" /></div>
    <h1>Quem Somos</h1>
    <section>
      <div class="Juncao">
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
      

      <div class="Local">
        
      <div class="imagem">
        <a href="https://www.google.com/maps/place/R.+Waldemiro+Jos%C3%A9+Borges,+526+-+Profipo,+Joinville+-+SC,+89233-048/@-26.3601989,-48.8428745,17z/data=!3m1!4b1!4m6!3m5!1s0x94deb72ba87f31a1:0x55820e302f0ee13c!8m2!3d-26.3601989!4d-48.8428745!16s%2Fg%2F11jyyl4r4w?entry=ttu">
        <img class="Mapa" src="./Maps.png" alt="" />
      </a>
        <div class="texto_mapa">
          <font-awesome-icon :icon="['fas', 'location-dot']" class="icone"/>
          <a href="https://www.google.com/maps/place/R.+Waldemiro+Jos%C3%A9+Borges,+526+-+Profipo,+Joinville+-+SC,+89233-048/@-26.3601989,-48.8428745,17z/data=!3m1!4b1!4m6!3m5!1s0x94deb72ba87f31a1:0x55820e302f0ee13c!8m2!3d-26.3601989!4d-48.8428745!16s%2Fg%2F11jyyl4r4w?entry=ttu">
          <p>R. Waldemiro José Borges, 526 - Profipo, Joinville - SC, 89233-048</p>
          </a>
        </div>
      </div>
      </div>
    </div>
    </section>          
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,100;1,300;1,400&display=swap');

.Juncao{
display: flex;
}
.Local{
  display: flex;
  
}
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

.imagem {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 50px;
}

.Local img{
  border-radius: 60px;
  padding: 20px; 
  width: 90%;
  height: 90%; 
  transition: 0.5s all ease-in-out;
}
.Local :hover img{
  transform: scale(0.9);
}

.icone {
  z-index: 999;
  color: black  ;
  position: relative;
  left: 30px;
  font-size: 25px;
 
}

.texto_mapa {
  display: flex;
  align-items:end;
  gap: 50px;
  text-align: justify;
}
  
 

</style>
