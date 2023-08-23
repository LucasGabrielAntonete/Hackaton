<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="email">email:</label>
      <input type="text" id="email" v-model="email" required />
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />
      <button type="submit">Login</button>
      <router-link :to="{ name: 'registro' }">Cadastrar</router-link>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import axios from 'axios'
import { ref } from 'vue'

const router = useRouter()
const email = ref('')
const password = ref('')
async function login() {
  const response = await axios.post('/token/', {
    email: email.value,
    password: password.value
  })

  const asyncLocalStorage = {
    setItem(key, value) {
      return Promise.resolve().then(function () {
        localStorage.setItem(key, value)
      })
    },
    getItem(key) {
      return Promise.resolve().then(function () {
        return localStorage.getItem(key)
      })
    }
  }

  asyncLocalStorage.setItem('token', response.data.access).then(() => {
    router.push('/')
  })
}
</script>
