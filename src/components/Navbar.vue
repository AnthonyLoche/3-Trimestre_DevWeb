<script>
</script>

<template>
    <nav>
        <div>
            <a href="" class="navbar" id="Tenis">Tenis</a>
            <ul id="Tenis">
                <div class="item">
                    <li><h4>Genero</h4></li>
                    <li>Calçados Masculinos</li>
                    <li>Calçados Femininos</li>
                    <li>Calçados Infantis</li>
                </div>
                <div class="item">
                    <li><h4>Marcas Mais Buscadas</h4></li>
                    <div class="containerLis">
                    <li>Nike</li>
                    <li>Adidas</li>
                    <li>Mizuno</li>
                    <li>Puma</li>
                    <li>Olimpkus</li>
                    <li>Fila</li>
                    <li>New Balance</li>
                
            </div>
            </div>
            </ul>
        </div>
        <div>
            <a href="" class="navbar" id="Esportes">Esportes</a>
            <ul id="Esportes">
                <div class="item">
                <li>Basquete</li>
                <li>Futebol</li>
                <li>Voleibol</li>
                <li>Tenis de Mesa</li>
                <li>Academia e Fitness</li>
            </div>
            <div class="item">
                <li>Natação</li>
                <li>Handebol</li>
                <li>Corrida</li>
                <li>E-Sports</li>
                <li>Pesca</li>
            </div>
            <div class="item">
                <li>Skate</li>
                <li>Atletismo</li>
                <li>Musculação</li>
                <li>Bicicleta</li>
                <li>Jogos de Mesa</li>
            </div>
            </ul>
        </div>
        <div>
            <a href="" class="navbar" id="Masculinos">Masculinos</a>
            <ul id="Masculinos">
                <li>des</li>
                <li>des</li>
                <li>des</li>
                <li>des</li>
                <li>des</li>
            </ul>
        </div>
        <div>
            <a href="" class="navbar" id="Feminino">Femininos</a>
            <ul id="Femininos">
                <li>mbf</li>
                <li>mbf</li>
                <li>mbf</li>
                <li>mbf</li>
                <li>mbf</li>
            </ul>
        </div>
        <div>
            <a href="" class="navbar" id="Roupa">Roupas</a>
            <ul id="Roupas">
                <li>kol</li>
                <li>kol</li>
                <li>kol</li>
                <li>kol</li>
                <li>kol</li>
            </ul>
        </div>
        <div>
            <a href="" class="navbar" id="Marca">Marcas</a>
            <ul id="Marcas">
                <li>ptg</li>
                <li>ptg</li>
                <li>ptg</li>
                <li>ptg</li>
                <li>ptg</li>
            </ul>
        </div>
        <div>
            <a href="" class="navbar" id="Infantil">Infantil</a>
            <ul id="Infantil">
                <li>jfd</li>
                <li>jfd</li>
                <li>jfd</li>
                <li>jfd</li>
                <li>jfd</li>
            </ul>
        </div>
        <div>
            <a href="" class="navbar" id="Acessorios">Acessórios</a>
            <ul id="Acessorios">
                <li>wsx</li>
                <li>wsx</li>
                <li>wsx</li>
                <li>wsx</li>
                <li>wsx</li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
nav {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #282923;
    border-top: 2px solid white;

}

a.navbar {
    color: white;
    text-decoration: none;
    opacity: 0.5;
    border-bottom: 2px solid white;
}

a.navbar:hover {
    opacity: 1;
    transition: 0.5s;
}

li{
    list-style: none;
}

a#Tenis:hover + ul#Tenis {
    display: grid;
    transition: 1s;     
}

ul#Tenis {
    position: absolute;
    background-color: #282923;
    width: 100%;
    color: white;
    height: 120px;
    margin-top: 14px;
    left: 0;
    display: none;
    grid-template-columns: repeat(8, 1fr);
}

a#Esportes:hover + ul#Esportes {
    display: grid;
    transition: 1s;     
}

ul#Esportes {
    position: absolute;
    background-color: #282923;
    width: 100%;
    color: white;
    height: 120px;
    margin-top: 14px;
    left: 0;
    display: none;
    grid-template-columns: repeat(8, 1fr);
}

a#Masculinos:hover + ul#Masculinos {
    display: grid;
    transition: 1s;     
}

ul#Masculinos {
    position: absolute;
    background-color: #282923;
    width: 100%;
    color: white;
    height: 120px;
    margin-top: 14px;
    left: 0;
    display: none;
    grid-template-columns: repeat(8, 1fr);
}

a#Feminino:hover + ul#Femininos {
    display: grid;
    transition: 1s;     
}

ul#Femininos {
    position: absolute;
    background-color: #282923;
    width: 100%;
    color: white;
    height: 120px;
    margin-top: 14px;
    left: 0;
    display: none;
    grid-template-columns: repeat(8, 1fr);
}

a#Roupa:hover + ul#Roupas {
    display: grid;
    transition: 1s;     
}

ul#Roupas {
    position: absolute;
    background-color: #282923;
    width: 100%;
    color: white;
    height: 120px;
    margin-top: 14px;
    left: 0;
    display: none;
    grid-template-columns: repeat(8, 1fr);
}

a#Marca:hover + ul#Marcas {
    display: grid;
    transition: 1s;     
}

ul#Marcas {
    position: absolute;
    background-color: #282923;
    width: 100%;
    color: white;
    height: 120px;
    margin-top: 14px;
    left: 0;
    display: none;
    grid-template-columns: repeat(8, 1fr);
}

a#Infantil:hover + ul#Infantil {
    display: grid;
    transition: 1s;     
}

ul#Infantil {
    position: absolute;
    background-color: #282923;
    width: 100%;
    color: white;
    height: 120px;
    margin-top: 14px;
    left: 0;
    display: none;
    grid-template-columns: repeat(8, 1fr);
}

a#Acessorios:hover + ul#Acessorios {
    display: grid;
    transition: 1s;     
}

ul#Acessorios {
    position: absolute;
    background-color: #282923;
    width: 100%;
    color: white;
    height: 120px;
    margin-top: 14px;
    left: 0;
    display: none;
    grid-template-columns: repeat(8, 1fr);
}

.item{
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: auto;
    justify-content:  center;
    gap: 5px;
}

.containerLis{
    display: grid;
    grid-template-columns: 1fr 1fr;
}

</style>