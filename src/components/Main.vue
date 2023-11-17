<script setup>

</script>

<template>
    <main>
        <div id="boasVindas">
            <h1>Home</h1>
            <p>Seja bem-vindo(a) à Dunk Shoes!</p>
            <p>A loja pra você achar o seu tênis de basquete</p>
        </div>
        <router-link to="/catalogo">
        <div id="promocao">
            <img src="../midia/Promocao.png" id="imgPromocao" alt="">
        </div>
    </router-link>
        <h3 id="unicos">Tenis Unicos</h3>
        <section id="especiais">

            <div class="especial">
                <p>Air Jordan 4 Eminem</p>
                <img src="../midia/AirJordanOne.png" alt="" class="imgEspecial">
            </div>
            <div class="especial"><img src="../midia/AirJordanOne.png" alt="" class="imgEspecial"></div>
            <div class="especial"><img src="../midia/AirJordanOne.png" alt="" class="imgEspecial"></div>
            <div class="especial"><img src="../midia/AirJordanOne.png" alt="" class="imgEspecial"></div>
        </section>
    </main>
</template>

<style scoped>
main {
    margin: 10px auto;
    max-width: 1024px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#boasVindas {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-align: center;
}

#promocao {
    width: 90%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-bottom: 2px solid #282923;
    margin: auto;
}

img#imgPromocao {
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

section#especiais {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
}

.especial {
    width: 200px;
    height: 200px;
    border-radius: 30px;
    background-color: #282923;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    color: white;
    margin: 30px auto;
}

img.imgEspecial {
    width: 100%;
    height: 200px;
    border-radius: 10px;
}

h3#unicos {
    margin: 10px auto;
    color: #282923;
    font-size: 2rem;
    border-radius: 30px;
    padding: 10px;
    box-shadow: 2px 2px 10px 2px #24004628;
}

router-link {
    width: 100%;
    margin: auto;
    }
</style>