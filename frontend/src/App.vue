<script setup>

</script>

<template>

<header>
  <nav class=" login">
    <router-link to="/" > home</router-link>
    <router-link  to="/About"> about</router-link>
    <router-link to="/PagInicio">Pagina Inicial</router-link>
    </nav>

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
