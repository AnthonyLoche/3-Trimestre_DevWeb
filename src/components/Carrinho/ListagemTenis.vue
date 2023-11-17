<script setup>
import { itens } from '@/_data/itens.js'
import { adicionarAoCarrinho } from '@/_data/carrinho.js'

import CardTenis from '../Carrinho/CardTenis.vue'
</script>

<template>
  <div class="listagem-tenis">
    <card-tenis v-for="tenis in itens" v-bind:key="tenis.id" v-bind:tenis="tenis"
      @adicionarAoCarrinho="adicionarAoCarrinho" />
  </div>
</template>

<style scoped>
.listagem-tenis {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

@media screen and (max-width: 1024px) {
  .listagem-tenis {
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
    padding: 8px;
  }

}
</style>
