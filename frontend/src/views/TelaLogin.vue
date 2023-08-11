<script setup></script>

<template>
  <div class="main">
    <h1>Momento Especial</h1>
    <div class="box-login">
      <div class="imagem">
        <img
          class="ftLogin"
          src="https://mail.google.com/mail/u/0?ui=2&ik=96682793ed&attid=0.1&permmsgid=msg-f:1773670501943312577&th=189d57ec98eb80c1&view=att&disp=safe&realattid=f_ll2dsl2d0"
          alt=""
        />
      </div>
      <div class="form">
        <fieldset>
          <h2>Entrar na conta</h2>
          <div class="input input-icons">
            <font-awesome-icon icon="fa-solid fa-envelope" />
            <input class="input-field" type="email" name="email" required placeholder="Email" />
          </div>
          <div class="input input-icons">
            <font-awesome-icon icon="fa-solid fa-lock" />
            <input class="input-field" type="password" name="pass" required />
          </div>
          <button class="btn-entrar" onclick="location.href='views/HomeView'" type="button">
            Entrar
          </button>
        </fieldset>

      </div>
  

    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');

.box-login {
  display: grid;
  grid-template-columns: 2fr 3fr;
  /* grid-template-rows: 1fr; */
  /* grid-template-areas: 
  'imagem form'
  ; */
  height: 700px;
  width: 90%;
  /* padding-left: 2em;
  padding-right: 2em; */
  border: 0;
  background-color: rgba(239, 238, 238, 1);
  margin: 60px auto 0;
  /* padding: 20px; */
  border: none;
  box-shadow: 4px 5px 12px rgb(138, 136, 136);
}

.imagem {
  /* width: 40%; */
  /* background-color: red; */
  height: 700px;
  /* grid-area: image; */
}

.ftLogin {
  /* text-align: center; */
  height: 100%;
  
  /* margin-left: 20rem; */
  /* display: block; */
}


.form {
  /* background-color: aqua; */
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: top;
  /* grid-area: form; */
}


h1 {
  font-size: 55px;
  text-align: center;
  font-family: 'Pinyon Script', cursive;
  font-weight: normal;
}

h2 {
  color: black;
  font-size: 25px;
  text-align: left;
  padding-left: 55rem;
}
.main {
  display: flexbox;
  border: none;
  background-color: rgba(239, 238, 238, 1);
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.input-icons svg {
  position: absolute;
}

.input-icons {
  width: 100%;
  /* margin-bottom: 5px; */
}

.svg-inline--fa {
  padding: 3px 0;
  min-width: 40px;
}

.input-field {
  width: 100%;
  padding-left: 40px;
  padding-right: 3px;
  text-align: center;
  border-radius: 6px;
  background-color: rgba(212, 186, 163, 1);
  border: none;
}
.input {
  display: block;
  margin: 25px;
  width: 150px;
  height: 20px;
  margin-left: 55rem;
}
.btn-entrar {
  background-color: rgba(212, 186, 163, 1);
  border-radius: 15px;
  width: 100px;
  height: 20px;
  margin-left: 55rem;
  border: none;
}
.btn-entrar:hover {
  background-color: rgb(233, 211, 192);
  border-radius: 15px;
  width: 100px;
  height: 20px;
  margin-left: 55rem;
  border: none;
}

fieldset {
  margin-top: 100px;
}

</style>
