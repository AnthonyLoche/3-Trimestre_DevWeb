<script setup>
import { livros } from '@/_data/livros.js'
import { adicionarAoCarrinho } from '@/_data/carrinho.js'

import CardLivro from '../Carrinho/CardLivro.vue'
</script>

<template>
  <div class="listagem-livros">
    <card-livro v-for="livro in livros" v-bind:key="livro.id" v-bind:livro="livro"
      @adicionarAoCarrinho="adicionarAoCarrinho" />
  </div>
</template>

<style scoped>
.listagem-livros {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

@media screen and (max-width: 1024px) {
  .listagem-livros {
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
    padding: 8px;
  }

}
</style>
