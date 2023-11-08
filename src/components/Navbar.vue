<script>
</script>

<template>
    <nav>
        <div class="divNavs">
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
        <div class="divNavs">
            <a href="" class="navbar" id="Masculinos">Masculinos</a>
            <ul id="Masculinos">
                <div class="item">
                    <li><h4>Calçados Masculinos Mais buscados</h4></li>
                    <div class="containerLis">
                    <li>Botas de Trabalho</li>
                    <li>Tenis para Esportes</li>
                    <li>Tenis Casual</li>
                </div>
                </div>
            </ul>
        </div>
        <div class="divNavs">
            <a href="" class="navbar" id="Feminino">Femininos</a>
            <ul id="Femininos">
                <div class="item">
                    <li><h4>Calçados Mais Buscados</h4></li>
                    <div class="containerLis">
                    <li>Calçados Masculinos</li>
                    <li>Calçados Femininos</li>
                    <li>Calçados Infantis</li>
                </div>
            </div>
            </ul>
        </div>
        <div class="divNavs">
            <a href="" class="navbar" id="Marca">Marcas</a>
            <ul id="Marcas">
                <div class="item">
                    <li><h4>Genero</h4></li>
                    <li>Calçados Masculinos</li>
                    <li>Calçados Femininos</li>
                    <li>Calçados Infantis</li>
                </div>
        
            </ul>
        </div>
        <div class="divNavs">
            <a href="" class="navbar" id="Infantil">Infantil</a>
            <ul id="Infantil">
                <div class="item">
                    <li><h4>Genero</h4></li>
                    <li>Calçados Masculinos</li>
                    <li>Calçados Femininos</li>
                    <li>Calçados Infantis</li>
                </div>
            </ul>
        </div>
        <div class="divNavs">
            <a href="" class="navbar" id="Acessorios">Acessórios</a>
            <ul id="Acessorios">
                <div class="item">
                    <li><h4>Genero</h4></li>
                    <li>Calçados Masculinos</li>
                    <li>Calçados Femininos</li>
                    <li>Calçados Infantis</li>
            </div>
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
    display: inline-block;
    color: white;
    text-decoration: none;
    opacity: 0.5;
    border-bottom: 2px solid white;
    margin-top: 12px;

}

a.navbar:hover {
    opacity: 1;
    transition: 0.5s;
}

li{
    list-style: none;
}

.divNavs{
    flex-grow: 1;
    height: 100%;
    text-align: center;
}
.divNavs:hover ul#Tenis, 
.divNavs:hover ul#Masculinos, 
.divNavs:hover ul#Femininos, 
.divNavs:hover ul#Marcas, 
.divNavs:hover ul#Infantil , 
.divNavs:hover ul#Acessorios{
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
    padding: 5px;}

.containerLis{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
}

@media screen and (max-width: 1024px) {
    nav{
        display: none;
    }
}

</style>