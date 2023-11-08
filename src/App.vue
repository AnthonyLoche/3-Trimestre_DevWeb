<script setup>
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <Header />
  <Navbar />
  <Main />
  <Footer />
  <RouterView />
</template>

<style scoped>
* {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
