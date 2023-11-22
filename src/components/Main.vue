<script setup>

</script>

<template>
    <section id="boasVindas">
        <article id="bemVindo">
            <h2>BEM VINDO A DUNK SHOES</h2>
            <p>A loja pra você comprar e Dunkar!</p>

            <router-link to="/login" id="saiba">Saiba Mais</router-link>

        </article>

    </section>
    <main>
        <section id="oferta">
            <h3>Ofertas da Semana</h3>
            <p class="jordan">Air Jordan 4 Eminem</p>
            <p class="jordan">De: <strike>R$1300,00</strike></p>
            <p class="jordan">Por: R$800,00</p>
            <img src="../midia/JordanEminem.png" class="cem" alt="">
        </section>

        <section id="cliente">
            <h3>Já é um cliente, então faça o login aqui, senão cadastre-se:</h3>
            <router-link to="/login" id="login">Login / Cadastre-Se</router-link>
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
    width: 100%;
    height: 70vh;
    background-image: url(../midia/Fundo.png);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
}

article#bemVindo {
    background-color: #282923;
    width: 500px;
    padding: 60px;
    text-align: center;
    height: 300px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border: 1px solid white;
}

a#saiba {
    text-decoration: none;
    background-color: white;
    color: #282923;
    padding: 10px;
    border-radius: 15px;
    margin: 15px auto;
}

a#saiba:hover {
    transition: 0.5s;
    scale: 1.1;
}

#cliente {
    margin: 20px auto;
    color: white;
    padding: 30px;
    background-color: #282923;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

a#login {
    text-decoration: none;
    background-color: white;
    color: #282923;
    padding: 10px;
    border-radius: 15px;
    margin: 15px auto;
}

section#oferta{
    border-radius: 15px;
    width: 65%;
    margin: 10px auto;
    background-size: cover;
}

section#oferta h3{
    color: white;
    background-color: #282923;
    text-align: center;
    border-radius: 10px 10px 0px 0px;
    margin: 10px auto;
    padding: 15px;
    font-size: 30pt;
}

img.cem{
    width: 100%;
}

p.jordan{
    text-align: center;
    font-size: 15pt;
}
</style>