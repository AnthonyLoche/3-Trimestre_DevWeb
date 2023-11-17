<script setup>
import Header from '../components/Header.vue';

import Footer from '../components/Footer.vue'; 
</script>

<template>
    <Header />
   
    <main id="contato">
        <h3>Contato</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit est, ipsa veniam illum qui totam voluptatibus facilis! Delectus qui quidem amet ipsa praesentium eligendi neque perspiciatis culpa? Fuga, aut!</p>
        <form action="">
            <label for="">Mande nos uma mensagem</label>
            <input type="text">
            <button type="submit">Enviar</button>
        </form>


        <div id="rodape">
            <h4>Contato</h4>
            <p>Telefone: (11) 99999-9999</p>
            <p>Email:</p>
        </div>
    </main>

    <Footer />
</template>

<style scoped>
main#contato {
    margin: 10px auto;
    width: 512px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 560px;
    border-radius: 15px 15px 0 0;
}

#rodape{
    background-color: #282923;
    color: white;
    border-radius: 15px;
    padding: 10px;
}

form{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 200px;
}

input{
    width: 300px;
    padding: 60px;
    border-radius: 5px;
    border: 1px solid black;

}

button{
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: #282923;
    color: white;
}
</style>