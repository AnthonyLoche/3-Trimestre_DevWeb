<script setup>
import MButton from './MButton.vue'

const props = defineProps({
  livro: Object
})

const emit = defineEmits(['adicionarAoCarrinho'])

function formatarPreco(preco) {
  return 'R$ ' + preco.toFixed(2).replace('.', ',')
}
</script>

<template>
  <div class="card-livro">
    <div class="card-info-livro">
      <div class="wrap-livro">
        <img :src="props.livro.img" alt="Capa do livro" class="capa-livro" />
      </div>
      <p class="titulo-livro">{{ props.livro.title }}</p>
      <p class="autor-livro">{{ props.livro.author }}</p>
      <p class="preco-livro">{{ formatarPreco(props.livro.price) }}</p>
    </div>
    <div class="card-buttons-livros">
      <div class="center">
      <m-button
        @click="emit('adicionarAoCarrinho', props.livro)"
        text="Adicionar ao carrinho"
      ></m-button>
    </div>
      <div class="center">
      <m-button text="Compartilhar" />
    </div>
    </div>
  </div>
</template>

<style scoped>
.card-livro {
  margin: 5px 10px;
  padding: 10px;
  background-color: #282923;
  border-radius: 10px;
  width: 100%;
  color: white;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;
}

.wrap-livro {
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  width: 100%;
  height: 270px;
  margin: auto;
}
.capa-livro {
  width: 90%;
  max-height: 100%;
  margin: auto;
}

.card-livro p {
  margin: 0;
}

.card-livro .titulo-livro {
  font-weight: bold;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;  
  padding: 3px 0;  
}

.preco-livro{

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.center{
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
