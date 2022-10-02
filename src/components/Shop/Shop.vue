<template>
   <div class="container d-flex-center column justify-start">
      <div class="container-shop-list d-flex-center column">
         <Filters class="filter " @export-checked="defCheckedElements" :logoType="logoTypeBind" />
         <div class="shop-list d-flex-center">
            <div v-for="pokemon in pokemons" :key="pokemon.id">
               <div v-if="elementFound(pokemon.type)">
                  <ShopProduct :pokemon="pokemon" :logos="logoTypeBind" />
               </div>
            </div>
         </div>
      </div>
   </div>

</template>

<script setup lang="ts">
import { ref, reactive, computed, type Ref } from 'vue';
import type { PokemonInterface } from "@/interfaces/pokemon.interface";
import type { LogoTypeInterface } from '@/interfaces/logoType.interface'
import ShopProduct from "./ShopProduct.vue";
import logoTypeImport from "@/data/Elements"
import Filters from "./Filters.vue"

defineProps<{
   pokemons: PokemonInterface[]
}>();

const logoTypeBind: LogoTypeInterface = logoTypeImport;
const checkedElements: Ref<string[]> = ref([])

function defCheckedElements(value: string[]) {
   checkedElements.value = value;
}

function elementFound(pokemonTypes: [(string | undefined)?, (string | undefined)?] | undefined): boolean {
   for (let checkedElement of checkedElements.value) {
      if (!pokemonTypes?.includes(checkedElement)) {
         return false;
      }
   }
   return true;
};

</script>



<style scoped lang="scss">
.container-shop-list {
   max-width: 1500px;
}

.shop-list {
   flex-wrap: wrap;
}

.shop-list>div {
   // flex: 1 1 auto;
   flex-grow: 1;
}

.filter {
   height: 50px;
   border: var(--border);
   border-radius: 50px;
   width: calc(100% - 10px);
}
</style>
