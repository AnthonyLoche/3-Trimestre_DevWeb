
<template>
  <header>
    <div id="container">
      <h1 id="titulo">Dunk Shoes</h1>

      <nav id="header">
        <router-link to="/">Home</router-link>
        <router-link to="/catalogo">Catalogo</router-link>
        <router-link to="/contato">Contato</router-link>
        <router-link to="/login">Sing In</router-link>
        <label>
          <input type="text" placeholder="Search">
        </label>
      </nav>
      <p id="menu" @click="sidebar()">&#9776;</p>
    </div>

    <div id="sidebar">
      <nav id="sidebar">
        <router-link to="/">Home</router-link>
        <router-link to="/catalogo">Catalogo</router-link>
        <router-link to="/contato">Contato</router-link>
        <router-link to="/login">Sing In</router-link>
        <label for="">
          <input type="text" placeholder="Search">
        </label>
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
  display: none;
  z-index: 5;
  width: 200px;
  height: 100%;
  background-color: #282923;
  top: 0;
  transition: 0.5s;
  position: absolute;
  left: 0;
  color: white;
}

nav#sidebar{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 20px auto;
  z-index: 10;
}

@keyframes sidebarAi {
  0% {
    margin-right: 200%;
  }

  100% {
    margin-right: 100%;
  }
}


@keyframes AiSidebar {
  from {
    margin-right: 100%;
  }

  to {
    margin-right: 200%;
  }

}

.searchBox {
  display: flex;
  max-width: 230px;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  background: #2f3640;
  border-radius: 50px;
  position: relative;
}

.searchButton {
  color: white;
  position: absolute;
  right: 8px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--gradient-2, linear-gradient(90deg, #2AF598 0%, #009EFD 100%));
  border: 0;
  display: inline-block;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
}
/*hover effect*/
button:hover {
  color: #fff;
  background-color: #1A1A1A;
  box-shadow: rgba(0, 0, 0, 0.5) 0 10px 20px;
  transform: translateY(-3px);
}
/*button pressing effect*/
button:active {
  box-shadow: none;
  transform: translateY(0);
}

.searchInput {
  border: none;
  background: none;
  outline: none;
  color: white;
  font-size: 15px;
  padding: 24px 46px 24px 26px;
}




</style>

<script setup>
import { RouterLink } from 'vue-router';

let aberto = false;
function sidebar() {
  let sidebar = document.getElementById("sidebar");
  if (aberto == false) {
    sidebar.style.display = "block";
    aberto = true;
  } else {
    sidebar.style.display = "none";
    aberto = false;
  }

}


</script>

