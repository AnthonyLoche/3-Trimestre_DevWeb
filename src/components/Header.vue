
<template>
  <header>
    <div id="container">
      <h1 id="titulo">Tony Company</h1>

      <nav id="header">
        <router-link to="/">Home</router-link>
        <router-link to="/catalogo">Catalogo</router-link>
        <router-link to="/catalogo">Contato</router-link>
        <router-link to="/login">Login</router-link>
        <label for="">
          <input type="text" placeholder="Search">
        </label>
      </nav>
      <p id="menu" @click="sidebar()">&#9776;</p>
    </div>

    <div id="sidebar">
      <nav id="sidebar">
        <router-link to="/">Início</router-link>
        <router-link to="/catalogo">Catalogo</router-link>
        <router-link to="/catalogo">Contato</router-link>
        <router-link to="/login">Login</router-link>
      </nav>
    </div>


  </header>
</template>


<style scoped >
header {
  width: 100%;
  height: 70px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #282923;
}

#container {
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1000px;
}

nav {
  display: flex;
  gap: 20px;
}

a {
  color: white;
  text-decoration: none;
  opacity: 0.5;
  border-bottom: 2px solid white;
}

a:hover {
  opacity: 1;
  scale: 1.1;
  transition: 0.5s;
}

input {
  border-radius: 10px;
  padding: 2px;
  border: 0;
}

p#menu {
  display: none;
}

@media screen and (max-width: 1024px) {
  nav#header {
    display: none;
  }

  p#menu {
    display: block;
    margin-right: 20px;
    scale: 1.5;
    opacity: 0.5;
    cursor: pointer;
  }

  p#menu:hover {
    opacity: 1;
    transition: 0.7s;
    scale: 1.6;
  }

  h1#titulo {
    margin-left: 10px;
  }
}

#sidebar {
  display: block;
  z-index: 10;
  position: absolute;
  top: -100%;
  width: 200px;
  left: 0;
  height: 100%;
  background-color: #282923;
}

@keyframes sidebarAi {
  from {
    top: -100%;
  }

  to {
    top: 100%;
  }
}


@keyframes AiSidebar {
  from {
    top: 100%;
  }

  to {
    top: -100%;
  }
}
</style>

<script setup>
import { RouterLink } from 'vue-router';

let aberto = false;
function sidebar() {
  let sidebar = document.getElementById("sidebar");
  if (aberto == false) {
    sidebar.style.display = "block";
    sidebar.style.animation = "sidebarAi 1s forwards";
    aberto = true;
  } else {
    sidebar.style.animation = "AiSidebar 1s forwards";
    aberto = false;
  }

}

</script>

