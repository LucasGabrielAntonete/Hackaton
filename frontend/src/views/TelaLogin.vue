<script setup></script>


<template>
<h1>momento especial</h1>
<fieldset>
<h2>Entrar na conta</h2>


<img class="ftLogin" src="https://mail.google.com/mail/u/0?ui=2&ik=ac2f4daa6e&attid=0.1&permmsgid=msg-f:1773775369989028690&th=189db74d17887b52&view=att&disp=safe&realattid=f_ll2dsl2d0" alt="" />


<button class="bnt-entrar" @click="$router.push({ name: 'Home' })">Entrar</button>


<textarea name="email" id="" cols="20" rows="1">Informe seu E-mail:</textarea>
<textarea name="password" id="" cols="20" rows="1">Informe sua senha:</textarea>
</fieldset>
</template>


<style scoped>
h1 {
color: black;
font-size: 40px;
text-align: center;
font-family: 'Pinyon Script', cursive;}
h2{
color: black;
font-size: 25px;
text-align: right;
padding-right: 50rem;
}
.bnt-entrar {
background-color: rgba(212, 186, 163, 1);
border-radius: 7px;
border: none;
}
textarea {
border: none;
background-color: rgba(212, 186, 163, 1);
margin-left: 2rem;
border-radius: 5px;
}
.ftLogin {
width: 15rem;
padding-right: 10rem;
}
fieldset{
box-shadow: 10px black;
border-radius: 1px;
}


</style>
