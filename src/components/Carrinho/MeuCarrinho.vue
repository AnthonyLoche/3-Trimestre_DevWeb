<script setup>
import { carrinho, removerItemCarrinho, atualizaQuantidadeItem } from '@/_data/carrinho.js'
import MButton from './MButton.vue'
import CarrinhoVazio from './CarrinhoVazio.vue'
import { limparCarrinho } from '../../_data/carrinho';

function formatarPreco(preco) {
  return 'R$ ' + preco.toFixed(2).replace('.', ',')
}

</script>

<template>  
  <div class="carrinho">
    <h2>Meu carrinho</h2>
    <div class="wrap-carrinho">
      <carrinho-vazio v-if="carrinho.itens.length === 0" />
      <div v-else>
        <div class="item-carrinho" v-for="(item, index) in carrinho.itens" :key="index">
          <div class="info-tenis">
            <div class="imagem-tenis">
              <img :src="item.img" class="icon-capa-tenis" />
            </div>
            <div class="detalhes-tenis">
              <div>
                <p>{{ item.title }}</p>
                <p class="info-tenis-preco">{{ formatarPreco(item.price) }}/un</p>
              </div>
              <div>
                <p>
                  Quantidade:
                  <input type="number" v-model="item.quantidade" @change="atualizaQuantidadeItem(item)" min="1" />
                </p>
                <button @click="removerItemCarrinho(item)">&#128465;</button>
                <p>Total: {{ formatarPreco(item.total) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <m-button text="Limpar carrinho" id="limpa" @click="limparCarrinho(item)" />
      <m-button text="Finalizar compra" id="finaliza" />
      <p class="carrinho-total">Total: {{ formatarPreco(carrinho.total) }}</p>
    </div>
  </div>
 
</template>

<style scoped>
#limpa,
#finaliza {
  background-color: #282923;
  color: white;
}

.wrap-carrinho .carrinho-total {
  position: fixed;
  bottom: 11%;
  font-size: 1.5rem;
  font-weight: bold;
}

.item-carrinho .info-tenis {
  display: flex;
  margin-bottom: 10px;
}

.detalhes-tenis {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.detalhes-tenis p {
  margin: 0;
}

.detalhes-tenis div {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.detalhes-tenis input[type='number'] {
  width: 50px;
  text-align: center;
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  margin-left: 10px;
}

.detalhes-tenis button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: black;
  padding: 0;
  margin: 0;
}

.info-tenis-preco {
  margin-left: auto;
}

.icon-capa-tenis {
  width: 30px;
  margin-right: 10px;
}

.carrinho {
  margin-left: 100px;
  width: 250px;
}


@media screen and (max-width: 1024px) {
  .carrinho {
    margin-left: 10px;
    padding: 20px 0;
    width: 100%;
  }

  .carrinho-total {
    display: none;
  }
}


</style>
