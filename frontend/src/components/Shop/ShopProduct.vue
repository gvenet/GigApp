<template>
   <div class="container p-10 m-5 d-flex justify-space-between ">
      <div class="">
         <h2 class="mb-10">{{pokemon.name.english}}</h2>
         <ProductElement name="HP" :def="pokemon.base.HP" />
         <ProductElement name="Attack" :def="pokemon.base.Attack" />
         <ProductElement name="Defense" :def="pokemon.base.Defense" />
         <ProductElement name="SP. Attack" :def="pokemon.base.SpAttack" />
         <ProductElement name="SP. Defense" :def="pokemon.base.SpDefense" />
         <ProductElement name="Speed" :def="pokemon.base.Speed" />
         <!-- <div class="d-flex-center">
            <h3 class="mr-10">add to cart:</h3>
            <button class="btn-primary material-icons mr-5" @click="">remove</button>
            <button class="btn-primary material-icons" @click="">add</button>
         </div> -->
      </div>
      <div class="">
         <div class="d-flex-center justify-end mb-20">
            <div class="d-flex-center">
               <template v-for="logoType of pokemon.type">
                  <img class="element-logo ml-10" :src="logoTypes[logoType as keyof typeof logoTypes]" alt="">
               </template>
            </div>
         </div>
         <div class="pokemon-img-container d-flex-center" @click="popupTrigger=!popupTrigger">
            <img class="pokemon-img" :src="pokemon.image.thumbnail">
            <Popup v-if="popupTrigger" :fullImg="pokemon.image.hires" />
         </div>
      </div>
   </div>

</template>

<script setup lang="ts">
import { ref, inject} from "vue";
import ProductElement from "./ProductElement.vue";
import type { PokemonInterface } from "@/interfaces";
import Popup from "../Utils/Popup.vue";
import { pokemonTypesKeys } from "@/provideKeys/provideKeys";

defineProps<{
   pokemon: PokemonInterface,
}>()

const popupTrigger = ref(false);

const { logoTypes } = inject(pokemonTypesKeys)!;

</script>

<style scoped lang="scss">
.container {
   flex-basis: 100%;
   min-width: 300px;
   border: var(--border);
   border-radius: var(--border-radius);
   background-color: var(--hover-background-color-2);
}

.pokemon-img {
   width: 95%;

   &:hover {
      width: 100%;
      cursor: pointer;
   }

}

.pokemon-img-container {
   width: 140px;
   height: auto;
}

.element-logo {
   width: 30px;
   height: 30px;
}
</style>
