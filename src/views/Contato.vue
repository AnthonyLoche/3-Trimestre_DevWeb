<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue'; 
</script>

<template>
    <Header />

    <main id="contato">
        <p id="Titulo">Contato</p>
        <p id="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa enim tempora unde nostrum quos doloremque
            reprehenderit magnam reiciendis, iusto, nesciunt nisi, inventore ipsum sed ad vitae nam possimus consequuntur
            neque!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptatem nihil ratione sint, temporibus ducimus,
            sit vitae ullam doloribus incidunt tenetur quod. Earum esse voluptatibus iusto, labore quam quas praesentium?
        </p>
        <form action="" id="inputs">
            <label for="titulo">Titulo</label>
            <input type="text" name="titulo" id="titulo" placeholder="Título">
            <label for="descricao">Descrição</label>
            <input type="text" name="descricao" id="descricao" placeholder="Descrição">
            <button type="submit" id="enviar">Enviar</button>
        </form>
        <div id="informacoes">
            <p>Lojas</p>
            <p>Endereço: Rua dos Bobos, nº 0</p>
            <p>Telefone: (11) 99999-9999</p>
        </div>
    </main>
    <Footer />
</template>

<style scoped>
Footer {
    position: relative;
    bottom: 0;
}

main#contato {
    margin: 10px auto;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

p#Titulo {
    font-size: 40px;
    font-weight: bold;
    color: white;
    margin: 10px;
    padding: 10px;
    border-radius: 15px;
    background-color: #282923;
}

#lorem{
    padding: 20px;
}

input{
    border: 0;
    padding: 10px;
    color: #282923;
    border-radius: 15px;
}

#inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 25px auto;
    gap: 10px;
    padding: 40px;
    color: white;
    width: 40%;
    background-color: #282923; 
}

#informacoes{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 55px auto;
    gap: 10px;
    padding: 40px;
    color: white;
    background-color: #282923; 
}
#enviar{
    border: 0;
    padding: 10px;
    background-color: #282923;
    color: white;
    font-weight: bold;
    font-size: 12pt;
    border-bottom: 2px solid white;
    border-top: 2px solid white;
    transition: 0.5s;
    }

    #enviar:hover{
    border: 0;
    padding: 10px;
    background-color: #282923;
    color: white;
    font-weight: bold;
    font-size: 12pt;
    border-bottom: 2px solid white;
    border-top: 2px solid white;
        scale: 1.1;
}


</style>