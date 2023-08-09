<script setup>
import TelaLogin from '@/views/TelaLogin.vue';
</script>

<template>

<header>
  <nav class=" login">
    <router-link to="/" > Home</router-link>    
    <router-link to="/TelaLogin">Login</router-link>
    
    </nav>
    <TelaLogin />

    <PagInicio />
  </header>


    
    


        <main>
            <router-view />
        </main>

    
</template>


<style scoped>
*{
    background-color: antiquewhite;
}
</style>
