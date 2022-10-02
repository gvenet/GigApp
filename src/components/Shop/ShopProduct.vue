<template>
   <div class="container p-10 m-5 d-flex justify-space-between">
      <div>
         <h2 class="mb-10">{{pokemon.name.french}}</h2>
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
      <div>
         <div class="d-flex-center justify-end mb-20">
            <div class="d-flex-center">
               <h4 class="ml-10" v-for="typ in pokemon.type">
                  <img class="element-logo" :src="logos[typ]" alt="">
               </h4>
            </div>
         </div>
         <div class="d-flex-center">
            <img class="pokemon-img" :src="pokemon.image.thumbnail">
         </div>
      </div>
   </div>

</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import ProductElement from "./ProductElement.vue";
import type { PokemonInterface } from "../../interfaces/pokemon.interface";

defineProps < { pokemon: PokemonInterface, logos: any}>()
const typ = ref('');

</script>

<style scoped lang="scss">
.container {
   width: 400px;
   border: var(--border);
   border-radius: var(--border-radius);
   background-color: var(--hover-background-color-2);
}

.pokemon-img {
   width: 150px;
   height: 150px;
   &:hover {
      width: 149px;
      height: 149px;
   }

}

.buttons {
   width: 100%;
}

.element-logo{
   width: 30px;
   height: 30px;
}
</style>
