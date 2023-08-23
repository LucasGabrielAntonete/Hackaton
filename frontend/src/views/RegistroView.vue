<template>
    <div>
      <h2>Cadastro</h2>
      <form @submit.prevent="registerUser">
        <input v-model="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <input v-model="password2" type="password" placeholder="Confirm Password" />
        <button type="submit">Cadastrar</button>
      
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        password2: '',
      };
    },
    methods: {
      async registerUser() {
        if (this.password !== this.password2) {
          console.error('Passwords do not match');
          return;
        }
  
        try {
            await axios.post(`/api/signup/`,{
            email: this.email,
            password: this.password,
              
          }, {
            headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json', // Adicione esta linha
    }
          }
          );
  
          // Redirecione para a página de login ou realize outras ações necessárias
        } catch (error) {
          console.error('Registration failed:', error);
        }
      },
    },
  };
  </script>
  