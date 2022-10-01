<template>
   <div class="container p-10 m-5 d-flex justify-space-between">
      <div>
         <h2 class="mb-10">{{pokemon.name.french}}</h2>

         <div class="mb-10 d-flex-center justify-start">
            <div class="d-flex-center mr-10">
               <h4 class="mr-10">Type:</h4>
               <h4 class="mr-10" v-for="typ in pokemon.type">{{typ}}</h4>
            </div>
         </div>
         <ProductElement name="HP" :def="pokemon.base.HP" />
         <ProductElement name="Attack" :def="pokemon.base.Attack" />
         <ProductElement name="Defense" :def="pokemon.base.Defense" />
         <ProductElement name="SP. Attack" :def="pokemon.base.SpAttack" />
         <ProductElement name="SP. Defense" :def="pokemon.base.SpDefense" />
         <ProductElement name="Speed" :def="pokemon.base.SpDefense" />
         <div class="d-flex-center">
            <h3 class="mr-10">add to cart:</h3>
            <button class="btn-primary material-icons mr-5" @click="">remove</button>
            <button class="btn-primary material-icons" @click="">add</button>
         </div>
      </div>
      <img :src="pokemon.image.thumbnail">
   </div>

</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import ProductElement from "./ProductElement.vue";
import type { PokemonInterface } from "../../interfaces/pokemon.interface"

const pokemon = reactive<{pokemon: PokemonInterface}>()

</script>

<style scoped lang="scss">
.container {
   border: var(--border);
   border-radius: var(--border-radius);
}

img {
   width: 150px;
   height: 150px;
}

.buttons {
   width: 100%;
}
</style>
