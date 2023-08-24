<template>
  <header>
    <router-link :to="{ name: 'home' }">Home</router-link>
  </header>
  <main>
    <RouterView />
  </main>
</template>
