<script setup>
import Header from "../../components/Header.vue";
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";
</script>

<template>
    <Header />
    <Navbar />
    <div id="CatalogoMasculino">
        <div class="itemMasc">
            <img src="../Catalogo/ImgsCatalogo/ChuteiraMasc.png" width="100%" alt="">
            <h4>Sapato</h4>
            <p>lorem a</p>
            <button class="add">Add Cart</button>
        </div>
        <div class="itemMasc">
            <img src="../Catalogo/ImgsCatalogo/ChuteiraMasc.png" width="100%" alt="">
            <h4>Sapato</h4>
            <p>lorem a</p>
            <button class="add">Add Cart</button>
        </div>
        <div class="itemMasc">
            <img src="../Catalogo/ImgsCatalogo/ChuteiraMasc.png" width="100%" alt="">
            <h4>Sapato</h4>
            <p>lorem a</p>
            <button class="add">Add Cart</button>
        </div>
        <div class="itemMasc">
            <img src="../Catalogo/ImgsCatalogo/ChuteiraMasc.png" width="100%" alt="">
            <h4>Sapato</h4>
            <p>lorem a</p>
            <button class="add">Add Cart</button>
        </div>
        <div class="itemMasc">
            <img src="../Catalogo/ImgsCatalogo/ChuteiraMasc.png" width="100%" alt="">
            <h4>Sapato</h4>
            <p>lorem a</p>
            <button class="add">Add Cart</button>
        </div>
        <div class="itemMasc">
            <img src="../Catalogo/ImgsCatalogo/ChuteiraMasc.png" width="100%" alt="">
            <h4>Sapato</h4>
            <p>lorem a</p>
            <button class="add">Add Cart</button>
        </div>
        <div class="itemMasc">
            <img src="../Catalogo/ImgsCatalogo/ChuteiraMasc.png" width="100%" alt="">
            <h4>Sapato</h4>
            <p>lorem a</p>
            <button class="add">Add Cart</button>
        </div>
        <div class="itemMasc">
            <img src="../Catalogo/ImgsCatalogo/ChuteiraMasc.png" width="100%" alt="">
            <h4>Sapato</h4>
            <p>lorem a</p>
            <button class="add">Add Cart</button>
        </div>
    </div>
    <Footer />
</template>

<style scoped>
    #CatalogoMasculino{
        display: grid;
        max-width: 1024px;
        margin: auto;
        grid-template-columns: 1fr 1fr 1fr 1fr; 
        gap: 20px;
    }

    .itemMasc{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
        border-bottom: 2px solid #282923;
        height: 300px;
    }

    button.add{
        border: 0;
        padding: 5px;
        border-radius: 10px;
        text-align: center;
        background-color: greenyellow;
        cursor: pointer;
    }
</style>