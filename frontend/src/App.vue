<template>
  <header>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link to="/produtos">Produtos</router-link>
  
  </header>
  <main>
    <RouterView />
  </main>
</template>