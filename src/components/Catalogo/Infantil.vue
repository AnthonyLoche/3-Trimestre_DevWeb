<script>

</script>

<template>
    <div id="CatalogoInfantil">
        <div class="itemInf">
            <img src="../Catalogo/ImgsCatalogo/SapatoInfantil.png" width="80%" alt="">
            <h4>Sapato</h4>
            <p>lorem a</p>
            <button class="add">Add Cart</button>
        </div>
        <div class="itemInf">
            <img src="../Catalogo/ImgsCatalogo/SapatoInfantil.png" width="80%" alt="">
            <h4>Sapato</h4>
            <p>lorem a</p>
            <button class="add">Add Cart</button>
        </div>
        <div class="itemInf">
            <img src="../Catalogo/ImgsCatalogo/SapatoInfantil.png" width="80%" alt="">
            <h4>Sapato</h4>
            <p>lorem a</p>
            <button class="add">Add Cart</button>
        </div>
        <div class="itemInf">
            <img src="../Catalogo/ImgsCatalogo/SapatoInfantil.png" width="80%" alt="">
            <h4>Sapato</h4>
            <p>lorem a</p>
            <button class="add">Add Cart</button>
        </div>
        <div class="itemInf">
            <img src="../Catalogo/ImgsCatalogo/SapatoInfantil.png" width="80%" alt="">
            <h4>Sapato</h4>
            <p>lorem a</p>
            <button class="add">Add Cart</button>
        </div>
        <div class="itemInf">
            <img src="../Catalogo/ImgsCatalogo/SapatoInfantil.png" width="80%" alt="">
            <h4>Sapato</h4>
            <p>lorem a</p>
            <button class="add">Add Cart</button>
        </div>
        <div class="itemInf">
            <img src="../Catalogo/ImgsCatalogo/SapatoInfantil.png" width="80%" alt="">
            <h4>Sapato</h4>
            <p>lorem a</p>
            <button class="add">Add Cart</button>
        </div>
        <div class="itemInf">
            <img src="../Catalogo/ImgsCatalogo/SapatoInfantil.png" width="80%" alt="">
            <h4>Sapato</h4>
            <p>lorem a</p>
            <button class="add">Add Cart</button>
        </div>
    </div>
</template>

<style>
    #CatalogoInfantil{
        display: grid;
        max-width: 1024px;
        margin: auto;
        grid-template-columns: 1fr 1fr 1fr 1fr; 
        gap: 20px;
    }

    .itemInf{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
        border-bottom: 2px solid #282923;
        height: 300px;
    }

    button.add{
        border: 0;
        padding: 5px;
        border-radius: 10px;
        text-align: center;
        background-color: greenyellow;
        cursor: pointer;
    }
</style>