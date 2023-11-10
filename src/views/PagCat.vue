<script setup>
import Header from "../components/Header.vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import ListagemLivros from "../components/Carrinho/ListagemLivros.vue"
import MeuCarrinho from '../components/Carrinho/MeuCarrinho.vue'
</script>

<template>
    <Header />
    <Navbar />
    <div id="organization">
        <ListagemLivros />
        <MeuCarrinho />
    </div>
    <Footer />
</template>

<style scoped>
#organization {
    display: grid;
    grid-template-columns: 2.5fr 1fr;
    margin: 20px auto;
    width: 90%;
}

@media screen and (max-width: 1024px) {
    #organization{
        grid-template-columns: 1fr;
        width: 100%;
        margin-left: -10px;
    }
}

</style>