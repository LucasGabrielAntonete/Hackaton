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
            <input class="input-field" type="email" name="email" required  />
          </div>
          <div class="input input-icons">
            <font-awesome-icon icon="fa-solid fa-lock" />
            <input class="input-field" type="password" name="pass" required />
          </div>
          <button class="btn-entrar" onclick="location.href='views/HomeView'" type="button"> Entrar</button>
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
  height: 596px;
  width: 80%;
  border: 0;
  background-color: rgba(239, 238, 238, 1);
  margin: 60px auto 0;
  border: none;
  box-shadow: 4px 5px 12px rgb(138, 136, 136);
}

.imagem {
  height: 600px;
}

.ftLogin {
  height: 100%;
}

.form {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: top;
}
h1 {
  font-size: 55px;
  text-align: center;
  font-family: 'Pinyon Script', cursive;
  font-weight: normal;
  margin-top: 2rem;
}
h2 {
  color: black;
  font-size: 30px;
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
}
.svg-inline--fa {
  padding: 3px 0;
  min-width: 40px;
}

.input-field {
  width: 150%;
  padding-left: 40px;
  padding-right: 3px;
  text-align: center;
  border-radius: 6px;
  background-color:  rgba(212, 186, 163, 1);
  border: none;
}
.input {
  display: block;
  margin: 25px;
  width: 190px;
  height: 20px;
  margin-left: 55rem;
}
.btn-entrar {
  background-color: rgba(212, 186, 163, 1);
  border-radius: 15px;
  width: 120px;
  height: 30;
  margin-left: 60rem;
  border: none;
  
}
.btn-entrar:hover {
  background-color: rgb(216, 190, 168);
  border-radius: 15px;
  width: 120px;
  height: 30;
  margin-left: 60rem;
  border: none;
}
fieldset {
  margin-top: 100px;
}
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px  rgba(212, 186, 163, 1) inset !important;
}

</style>
