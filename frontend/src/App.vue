<script setup>
</script>

<template>
  <header>
    <nav class="login">
      <router-link to="/"> Home</router-link>
      <router-link to="/About"> about</router-link>
      <router-link to="/TelaLogin">Login</router-link>
    </nav>
   
  </header>

  <main>
    <router-view />
  </main>

</template>

<style scoped>

</style>
