<script setup>
import MButton from './MButton.vue'

const props = defineProps({
  tenis: Object
})

const emit = defineEmits(['adicionarAoCarrinho'])

function formatarPreco(preco) {
  return 'R$ ' + preco.toFixed(2).replace('.', ',')
}

</script>

<template>
  <div class="card-tenis">
    <div class="card-info-tenis">
      <div class="wrap-tenis">
        <img :src="props.tenis.img" alt="Capa do tenis" class="capa-tenis" />
      </div>
      <p class="titulo-tenis">{{ props.tenis.title }}</p>
      <p class="autor-tenis">{{ props.tenis.author }}</p>
      <p class="preco-tenis">{{ formatarPreco(props.tenis.price) }}</p>
    </div>
    <div class="card-buttons-tenis">
      <div class="center">
      <m-button @click="emit('adicionarAoCarrinho', props.tenis), adicionado()"
        text="Adicionar ao carrinho"></m-button>
    </div>
   </div>
  </div>
</template>

<style scoped>
.card-tenis {
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

.wrap-tenis {
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  width: 100%;
  height: 270px;
  margin: auto;
}
.capa-tenis {
  width: 90%;
  max-height: 100%;
  margin: auto;
}

.card-tenis p {
  margin: 0;
}

.card-tenis .titulo-tenis {
  font-weight: bold;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;  
  padding: 3px 0;  
}

.preco-tenis{

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
