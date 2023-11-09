<script setup>
import Header from "../../components/Header.vue";
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";
</script>

<template>
    <Header />
    <Navbar />
    <div id="principal">
        <div class="row">
            <router-link to="/catalogo/masculino">
                <div class="item">
                    <img class="img100pc2" src="../Catalogo/ImgsCatalogo/ChuteiraMasc.png" alt="">
                    <h4>Masculino</h4>
                </div>
            </router-link>
        </div>
        <div class="row">
            <router-link to="/catalogo/feminino">
                <div class="item">
                    <img class="img100pc" src="../Catalogo/ImgsCatalogo/CalçadoFem.png" alt="">
                    <h4>Feminino</h4>
                </div>
            </router-link>
        </div>
        <div class="row">
            <router-link to="/catalogo/infantil">
                <div class="item">

                    <img class="img100pc" src="../Catalogo/ImgsCatalogo/SapatoInfantil.png"   alt="">
                    <h4>Infantil</h4>

                </div>
            </router-link>
        </div>
    </div>
    <Footer />
</template>

<style scoped>
#principal {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1024px;
    margin: auto;
    gap: 20px;
}

.item {
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-bottom: 2px solid #282923;
    height: 300px;
}

.item .img100pc {
    width: 80%;
}

.item .img100pc2 {
    width: 103%;
}


.row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 300px;
}</style>