<template>
   <div class="container d-flex-center column justify-start">
      <div class="container-shop-list d-flex-center column">
         <Filters class="filter " @export-checked="defCheckedElements" @searched-pokemon="defSearchPokemon"
            @filter-emits="defStats" @refresh-filter="refreshFilter" :logoType="logoTypeBind"
            :searchedPokemon="state.searchedPokemon" :checkedElements="state.checkedElements" />
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

const props = defineProps<{
   pokemons: PokemonInterface[]
}>();

const logoTypeBind: LogoTypeInterface = logoTypeImport;

function defCheckedElements(value: string[]) {
   state.checkedElements = value;
}

function defSearchPokemon(value: string) {
   state.searchedPokemon = value;
}

function defStats(value: statsInterface[]) {
   state.stats = value;
}

function searchStringNorm(str: string): string {
   return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function refreshFilter(value: boolean): void {
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
   max-width: 1500px;
   width: 100%;
}

.shop-list {
   flex-wrap: wrap;
   width: 100%;
}

.filter {
   height: 50px;
   border: var(--border);
   border-radius: 50px;
   width: calc(100% - 10px);
}
</style>
