<template>
  <div>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <input v-model="password2" type="password" placeholder="Confirm Password" />
    <button @click="registerUser">Register</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

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
        await axios.post(
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
