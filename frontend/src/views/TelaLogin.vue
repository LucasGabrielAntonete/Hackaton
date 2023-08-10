<script setup></script>

<template>
  <h1>momento especial</h1>
  <fieldset>
    <div class="main">
      <h2>Entrar na conta</h2>
      <div class="input">
        <label for="email">Informe seu E-mail:</label>
        <input texto="email" name="email" required />
      </div>
      <div class="input">
        <label for="pass">Informe sua senha:</label>
        <input type="password" name="pass" required />
        <br />
        /*não esquecer de tirar!!*/
      </div>
      <button class="btn-entrar" @click="$router.push({ name: 'Home' })">Entrar</button>

      <img
        class="ftLogin"
        src="https://mail.google.com/mail/u/0?ui=2&ik=96682793ed&attid=0.1&permmsgid=msg-f:1773670501943312577&th=189d57ec98eb80c1&view=att&disp=safe&realattid=f_ll2dsl2d0"
        alt=""
      />
    </div>
  </fieldset>
</template>

<style scoped>

h1 {
  color: black;
  font-size: 40px;
  text-align: center;
  font-family: 'Pinyon Script' cursive;
  src: local('Pinyon Script, cursive'),
    ('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
}

h2 {
  color: black;
  font-size: 25px;
  text-align: left;
  padding-left: 60rem;
}
.main {
  display: flexbox;
  border: none;
  background-color:rgba(239, 238, 238, 1);
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.input {
  display: block;
  margin: 0 auto;
  text-align: right;
  padding: 10px;
  margin-bottom: 5px;

}
.btn-entrar {
  background-color: rgba(212, 186, 163, 1);
  border-radius: 15px;
  width: 100px;
  height: 20px;
  margin-left: 80rem;
}
.btn-entrar:hover {
  background-color:  rgb(233, 211, 192);
  border-radius: 15px;
  width: 100px;
  height: 20px;
  margin-left: 80rem;
}

.ftLogin {
  width: 25rem;
  margin-left: 20rem;
}

fieldset {
  padding-left: 2em;
  padding-right: 2em;
  border: 0;
 background-color: rgba(239, 238, 238, 1);
  margin: 60px auto 0;
  padding: 20px;
}
</style>
