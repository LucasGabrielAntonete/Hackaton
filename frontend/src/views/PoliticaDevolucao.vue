<script setup></script>
<template>

<h1>Políticas de devolução</h1>
<div>
    <ul>    
        <font-awesome-icon :icon="['far', 'circle-check']" />
        <li class="li li-icons">Selecione o(s) traje(s) que deseja locar.</li>
        <font-awesome-icon :icon="['fal', 'location-dot']" />
        <li class="li li-icons">Realize a prova e os ajustes na loja física, assim como fechar contrato.</li>
        <font-awesome-icon :icon="['far', 'credit-card']" />
        <li class="li li-icons">Retire o traje na data marcada e realize o pagamento.</li>
        <li class="li li-icons">A devolução deve acontecer dentro de  4 dias após a retirada.</li>
        <li class="li li-icons">Caso haja excesso de sujeira, danificações no traje e atraso na devolução será cobrado uma taxa.</li>
    </ul>
</div>

</template>
<style scoped>
h1{
    font-size: 30px;
    text-align: center;
}
li{
    position: relative;
    float: left;
    margin-left: 1rem
}
</style>