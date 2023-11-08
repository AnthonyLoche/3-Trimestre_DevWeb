<script setup>
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
import Main from "./components/Main.vue";
// import Geral from "./components/Catalogo/Geral.vue";
// import Masculino from "./components/Catalogo/Masculino.vue";
// import Feminino from "./components/Catalogo/Feminino.vue";
// import Infantil from "./components/Catalogo/Infantil.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />
  <Navbar />
  <Main />
  <!-- <Geral /> -->
  <!-- <Masculino />
  <Feminino />
  <Infantil /> -->
  <Footer />
</template>

<style scoped>
* {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
