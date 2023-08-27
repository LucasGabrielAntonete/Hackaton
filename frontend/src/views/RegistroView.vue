<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

import { useUserStore } from '../stores/counter'

const userStore = useUserStore()

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const password2 = ref('')
    const router = useRouter()
    const registerUser = async () => {
      if (password.value !== password2.value) {
        console.error('Passwords do not match')
        return
      }

      try {
        const data = await axios.post(
          '/api/signup/',
          {
            email: email.value,
            password: password.value
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            }
          }
        )
        router.push('/login/')
        console.log(data)
        userStore.user = data

        // Redirecione para a página de login ou realize outras ações necessárias
      } catch (error) {
        console.error('Registration failed:', error)
      }
    }

    return {
      email,
      password,
      password2,
      registerUser
    }
  }
}
</script>


<template>
  <div>

    <div class="main">
    <h1>Momento Especial</h1>
    <div class="box-login">
      <div class="imagem">
        <img
          class="ftLogin"
          src="../components/img/ftLogin.jpg"
          alt=""
        />
      </div>
      <form @submit.prevent="login">
        <fieldset>
          <h2 class="entrar">Cadastrar Conta</h2>
          <div class="input input-icons">
            <font-awesome-icon icon="fa-solid fa-envelope" />
            <input class="input-field" type="email" name="email" placeholder="Email" required v-model="email" />
          </div>
          <div class="input input-icons">
            <font-awesome-icon icon="fa-solid fa-lock" />
            <input class="input-field" type="password" name="pass" placeholder="Password" required v-model="password" />
          </div>
          <div>
            <font-awesome-icon icon="fa-solid fa-lock" />
            <input v-model="password2" type="password" placeholder="Confirm Password" />
          </div>
          <button @click="registerUser" class="buttonCadastrar">Cadastrar</button>
        </fieldset>
      </form>
    </div>
  </div>



    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <input v-model="password2" type="password" placeholder="Confirm Password" />
    <button @click="registerUser">Register</button>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');

.box-login {
  display: grid;
  grid-template-columns: 1fr 5fr;
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
  width: 450px;
  margin-right: 0px;
}

.ftLogin {
  height: 100%;
}

form {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: top;
  margin-left: 0%;
  margin-top: 20px;
  margin-right: 5px
  padding-right 15px;
}
h1 {
  font-size: 55px;
  text-align: center;
  font-family: 'Pinyon Script', cursive;
  font-weight: normal;
  margin-top: 2rem;
}

::placeholder{
  color: black;
}

h2 {
  color: black;
  font-size: 25px;
  text-align: center;
  padding-left: 57.1rem;
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
  width: 140%;
  text-align: center;
  border-radius: 6px;
  background-color: rgba(212, 186, 163, 1);
  border: none;
}

.input-field:hover {
  transform: scale(1.1);
  transition: all 0.5s;
}
.input {
  display: block;
  margin: 25px;
  width: 190px;
  height: 20px;
  margin-left: 55rem;
}

.buttonCadastrar {
  display: absolute;
  margin-top: 250px;
  margin-left: 100px;
  background-color: rgba(212, 186, 163, 1);
  border-radius: 15px;
  width: 120px;
  height: 30;
  margin-left: 60rem;
  border: none;
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
  transform: scale(1.1);
  transition: all 0.5s;
}
fieldset {
  margin-top: 100px;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px rgba(212, 186, 163, 1) inset !important;
}
</style>


