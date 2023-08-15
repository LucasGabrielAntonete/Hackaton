<script setup>
</script>

<template>
  <header>
    <nav class="login">
      <router-link to="/"> Home</router-link>
      <router-link to="/About"> sobre nós</router-link>
      <router-link to="/TelaLogin">Login</router-link>
      <router-link to="/PoliticaDev"> Politica de devolução</router-link>
    </nav>
  </header>
  <main>
<router-view />
</main>
</template>

<style scoped></style>
