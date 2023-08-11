<script setup>
</script>


<template>
    <header>
        <div id="logo">
            <h1>Momento especial</h1>    
        </div>
        <div id="search">
            <p>O que você está buscando?</p> <i class="fa-solid fa-light fa-magnifying-glass"></i>
        </div>
    </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgba(212, 186, 163, 1);
    padding: 30px;
    max-width: 100%;
}
h1{
    font-family: 'Pinyon Script', cursive;
    font-size: 23px;
    color: black;
}
p{
    font-family: 'Lato', sans-serif;
}
.search{
    display: flex;
    flex-direction: row;
}

</style>



<!-- <div class="sticky top-0 bg-mantle shadow-lg ">
    <div class="container gap-4 py-2 items-center min-w-full"></div>
</div> -->