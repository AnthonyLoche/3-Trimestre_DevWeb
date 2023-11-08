<script setup>
import Header from "../../components/Header.vue";
import Navbar from "../../components/Navbar.vue";
</script>

<template>
    <Header />
    <Navbar />
    <div id="principal">
        <div class="item">
            <img src="../Catalogo/ImgsCatalogo/ChuteiraMasc.png" width="100%" alt="">
            <h4>Masculino</h4>
        </div>
        <div class="item">
            <img src="../Catalogo/ImgsCatalogo/CalçadoFem.png" width="80%" alt="">
            <h4>Feminino</h4>
        </div>
        <div class="item">
            <img src="../Catalogo/ImgsCatalogo/SapatoInfantil.png" width="80%" alt="">
            <h4>Infantil</h4>
        </div>
    </div>


</template>

<style scoped>

#principal{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1024px;
    margin: auto;
    gap: 20px;
}

.item{
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-bottom: 2px solid #282923;
    height: 300px;
}

</style>