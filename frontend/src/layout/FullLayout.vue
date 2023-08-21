<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import FooterVue from '@/components/FooterVue.vue';
import HeaderVue from '@/components/HeaderVue.vue'
</script>

<template>
  <HeaderVue />
  <main>
    <RouterView />
  </main>
  <FooterVue />
</template>

<style scoped></style>
