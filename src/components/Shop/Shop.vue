<template>
   <div class="container">
      <div class="filter d-flex align-center justify-space-around p-30">
         <div class="d-flex-center" style="height: 100%">
            <div v-for="(elemType,i) in elemTypes" :key="i">
               <input class="elem-filter" type="checkbox" :id=elemType :value=elemType v-model="checkedElements">
               <label :for=elemType>
                  <div class="img-elem-filter-container d-flex-center">
                     <img class="img-elem-filter" :src="logoType[elemType]" alt="">
                  </div>
               </label>
            </div>
         </div>
         <h5 class="m-10">FILTER1</h5>
         <h5 class="m-10">FILTER2</h5>
      </div>
      <div class="shop-list p-30 d-flex-center justify-start">
         <div v-for="pokemon in pokemons" :key="pokemon.id">
            <div v-if="elementFound(pokemon.type)">
               <ShopProduct :pokemon="pokemon" :logos="logoType" />
            </div>
         </div>
      </div>
   </div>

</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import type { PokemonInterface } from "@/interfaces/pokemon.interface";
import ShopProduct from "./ShopProduct.vue";
import logoType from "../../data/Elements"

defineProps<{
   pokemons: PokemonInterface[]
}>();

const checkedElements = ref([])

const elemTypes = ref(["Bug", "Dragon", "Electric", "Fairy", "Fighting", "Fire", "Flying", "Ghost", "Grass", "Ground", "Ice", "Normal", "Poison", "Psychic", "Rock", "Steel", "Water"]);

const filterHover = ref(false);
const filterClick = ref(false);

const filterClass = reactive({
   width: '28px',
   height: '28px',
})

function testEnterLog() {
   filterHover.value = !filterHover.value;
   console.log(filterHover.value);
}

function testLeaveLog() {
   filterHover.value = !filterHover.value;
   console.log(filterHover.value);
}
function elementFound(pokemonTypes: string[]): boolean {
   for (let checkedElement of checkedElements.value) {
      if (!pokemonTypes.includes(checkedElement)) {
         return false;
      }
   }
   return true;
};

</script>



<style scoped lang="scss">
.filter {
   height: 50px;
   border-bottom: var(--border);
}

.shop-list {
   flex-wrap: wrap;
}

.elem-filter {
   display: none;
   height: 100%;
}

.elem-filter:checked+label>div {
   >img {
      animation: rotating 2s linear infinite;
      width: 35px;
      height: 35px;
   }
}

.img-elem-filter-container {
   width: 35px;
   height: 35px;
}

.img-elem-filter {
   width: 20px;
   height: 20px;

   &:hover {
      width: 35px;
      height: 35px;
   }
}
</style>
