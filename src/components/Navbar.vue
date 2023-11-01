<script>
</script>

<template>
    <nav>
        <a href="" class="navbar">Tenis</a>
        <!-- <ul>
            <li><a href="" >Item 1</a></li>
            <li><a href="" >Item 2</a></li>
            <li><a href="" >Item 3</a></li>
            <li><a href="" >Item 4</a></li>
            <li><a href="" >Item 5</a></li>
        </ul> -->
        <a href="" class="navbar">Esportes</a>
        <a href="" class="navbar">Masculinos</a>
        <a href="" class="navbar">Femininos</a>
        <a href="" class="navbar">Roupas</a>
        <a href="" class="navbar">Marcas</a>
        <a href="" class="navbar">Infantil</a>
        <a href="" class="navbar">Acessórios</a>
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

a.navbar{
    color: white;
    text-decoration: none;
    opacity: 0.5;
    border-bottom: 2px solid white;
}

a.navbar:hover{
    opacity: 1;
    transition: 0.5s;
}

/* ul{
    display: none;
}

a.navbar:hover + ul{
    display: block;
} */

</style>