<template>
   <div class="container">
      <div class="filter d-flex align-center justify-space-around p-30">
         <h5 class="m-10">FILTER1</h5>
         <h5 class="m-10">FILTER2</h5>
         <h5 class="m-10">FILTER3</h5>
         <h5 class="m-10">FILTER4</h5>
         <h5 class="m-10">FILTER5</h5>
      </div>
      <div class="shop-list p-30 d-flex justify-start align-center">
         <ShopProduct v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon"/>
      </div>
   </div>

</template>

<script setup lang="ts">
import type { PokemonInterface } from "@/interfaces/pokemon.interface";
import ShopProduct from "./ShopProduct.vue";

defineProps<{
   pokemons: []
}>()

</script>

<style scoped lang="scss">
.filter {
   height: 50px;
   border-bottom: var(--border);

}

.shop-list {
   flex-wrap: wrap;
}
</style>
