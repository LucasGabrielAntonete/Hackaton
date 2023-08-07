<script setup>

</script>

<template>

<aside>

    <nav class=" login">
    <router-link to="/" > home</router-link>
    <router-link  to="/About"> about</router-link>
    </nav>
    

</aside>
        <main>
            <router-view />
        </main>

    
</template>


<style scoped>
*{
    background-color: antiquewhite;
}
</style>
