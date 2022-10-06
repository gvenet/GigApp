<template>
   <div class="container d-flex-center column justify-start">
      <div class="container-shop-list d-flex-center column">
         <Filters class="filter " @export-checked="defCheckedElements" @searched-pokemon="defSearchPokemon" @filter-emits="defStats"
            :logoType="logoTypeBind" />
         <div class="shop-list d-flex">
            <template v-for="pokemon in props.pokemons" :key="pokemon.id">
               <div class="flex-fill" v-if="filters(pokemon)">
                  <ShopProduct :pokemon="pokemon" :logos="logoTypeBind" />
               </div>
            </template>
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
import type { statsInterface } from '@/interfaces/stats.interface';

let stats = reactive<statsInterface[]>([
  { isChecked: false, name: 'HP', value: 0 },
  { isChecked: false, name: 'At', value: 0 },
  { isChecked: false, name: 'Def', value: 0 },
  { isChecked: false, name: 'Sp.At', value: 0 },
  { isChecked: false, name: 'Sp.Def', value: 0 },
  { isChecked: false, name: 'Speed', value: 0 },
])

function defStats(value: statsInterface[]) {
   stats = value;
}

const props = defineProps<{
   pokemons: PokemonInterface[]
}>();

const logoTypeBind: LogoTypeInterface = logoTypeImport;
const checkedElements: Ref<string[]> = ref([])

function defCheckedElements(value: string[]) {
   checkedElements.value = value;
}

const searchedPokemon = ref('');
function defSearchPokemon(value: string) {
   searchedPokemon.value = value;
}

function filters(pokemon: PokemonInterface): boolean {
   if (!pokemon.name.french.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").startsWith(searchedPokemon.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) {
      return false;
   }
   for (let checkedElement of checkedElements.value) {
      if (!pokemon.type?.includes(checkedElement)) {
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

.filter {
   height: 50px;
   border: var(--border);
   border-radius: 50px;
   width: calc(100% - 10px);
}
</style>
