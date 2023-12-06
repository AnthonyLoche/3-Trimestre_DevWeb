<script>

</script>

<template>
  <footer>
    <div id="container2">
    <h3>Dunk Shoes</h3>
    <p>Todos os Direitos Reservados &copy;</p>
    <p>Anthony Gabriel Loche Dos Reis</p>
    </div>
  </footer>
</template>

<style>
footer{
    width: 100%;
    height: 70px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #282923;
    bottom: 0;
    position: relative;
    margin-top: 20px;
}

#container2{
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1000px;   
}

@media screen and (max-width: 600px) {
  footer{
  flex-direction: column;
  height: 200px;
  }
  #container2{
    width: 300px;
    flex-direction: column;
    gap: 30px;
  }
}
</style>
