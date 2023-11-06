<script>

</script>


<template>
  <header>
    <div id="container">
    <h1>Tony Company</h1>
  
  <nav id="header">
    <a href="">Inicio</a>
    <a href="">Catálogo</a>
    <router-link to="/catalogo">asd</router-link>
    <router view></router>
    <a href="">Contato</a>
    <label for="">
    <input type="text" placeholder="Search">
      <button type="submit">🔎</button>
  </label>
  </nav>
</div>
</header>
</template>


<style scoped>


header{
    width: 100%;
    height: 70px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #282923;
}

#container{
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1000px;   
}

nav{
    display: flex;
    gap: 20px;
}

a{
    color: white;
    text-decoration: none;
    opacity: 0.5;
    border-bottom: 2px solid white;
}

a:hover{
    opacity: 1;
    scale:  1.1;
    transition: 0.5s;
}

input{
  border-radius: 10px;
  padding: 2px;
  border: 0;
}

button{
  margin-left: -20.9px;
  border-radius: 10px;
  border: 0;
  padding: 1.8px;
  background-color: black;
}


</style>
