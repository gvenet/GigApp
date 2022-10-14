<template>
   <div class="container d-flex-center column justify-start">
      <div class="container-shop-list d-flex-center column">
         <Filters class="filter " @export-checked="defCheckedElements" @filter-emits="defStats"
            @refresh-filter="refreshFilter" v-model:searchedPokemon="state.searchedPokemon"
            :checkedElements="state.checkedElements"
            :stats="state.stats" />
         <div class="shop-list d-flex">
            <template v-for="pokemon of pokemons" :key="pokemon.id">
               <div class="flex-fill" v-if="filters(pokemon)">
                  <ShopProduct :pokemon="pokemon" />
               </div>
            </template>
         </div>
      </div>
   </div>

</template>

<script setup lang="ts">
import { readonly, provide, reactive,} from 'vue';
import type { InjectionKey } from "vue";
import type { PokemonInterface } from "@/interfaces/pokemon.interface";
import type { LogoTypeInterface } from '@/interfaces/logoType.interface'
import ShopProduct from "./ShopProduct.vue";
import logoTypesImport from "@/data/logoTypes"
import elemTypesImport from "@/data/elemTypes"
import Filters from "./Filters.vue"
import type { statsInterface } from '@/interfaces/stats.interface';
import { elemTypesKeys, logoTypesKeys } from '@/provideKeys/provideKeys';

const state = reactive<{
   stats: statsInterface[],
   searchedPokemon: string,
   checkedElements: string[],
}>({
   stats: [
      { isChecked: false, name: 'HP', value: 0 },
      { isChecked: false, name: 'At', value: 0 },
      { isChecked: false, name: 'Def', value: 0 },
      { isChecked: false, name: 'Sp.At', value: 0 },
      { isChecked: false, name: 'Sp.Def', value: 0 },
      { isChecked: false, name: 'Speed', value: 0 },
   ],
   searchedPokemon: '',
   checkedElements: [],
});

defineProps<{
   pokemons: PokemonInterface[]
}>();


provide(elemTypesKeys, { elemTypes: readonly(elemTypesImport) });
// injected in DropdownElemFiler, ListElemFilter
provide(logoTypesKeys, { logoTypes: readonly(logoTypesImport) });
// injected in DropdownElemFiler, ListElemFilter, ShopProduct

function defCheckedElements(value: string[]) {
   state.checkedElements = value;
}

function defStats(value: statsInterface[]) {
   state.stats = value;
}

function searchStringNorm(str: string): string {
   return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function refreshFilter(): void {
   for (const stat of state.stats) {
      stat.isChecked = false;
      stat.value = 0;
   };
   state.checkedElements = [];
   state.searchedPokemon = '';
}

function filters(pokemon: PokemonInterface): boolean {
   const pokemonStats = [
      pokemon.base.HP,
      pokemon.base.Attack,
      pokemon.base.Defense,
      pokemon.base.SpAttack,
      pokemon.base.SpDefense,
      pokemon.base.Speed
   ];
   for (const [index, stat] of state.stats.entries()) {
      if (stat.isChecked && stat.value > pokemonStats[index]) {
         return false;
      }
   }
   if (!searchStringNorm(pokemon.name.english).startsWith(searchStringNorm(state.searchedPokemon))) {
      return false;
   }
   for (let checkedElement of state.checkedElements) {
      if (!pokemon.type?.includes(checkedElement)) {
         return false;
      }
   }
   return true;
};

</script>



<style scoped lang="scss">
.container-shop-list {
   max-width: 1350px;
   width: 100%;
}

.shop-list {
   flex-wrap: wrap;
   width: 100%;
}

.filter {
   min-width: 340px;
   height: 50px;
   border: var(--border);
   border-radius: 50px;
   width: calc(100% - 10px);
}
</style>
