<script setup>
import FooterVue from './components/FooterVue.vue'
import HeaderVue from './components/HeaderVue.vue'
</script>

<template>
    <HeaderVue></HeaderVue>
    <RouterView />
    <FooterVue></FooterVue>
</template>
