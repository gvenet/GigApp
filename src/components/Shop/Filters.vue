<template>
   <div class="d-flex-center justify-space-between m-20">
      <div class="search-filter d-flex-center justify-start ml-10">
         <h5 class="material-icons">search</h5>
         <input class="input-search-filter ml-10" type="text" placeholder="Search Pokémon">
      </div>
      <div class="elem-filter-container d-flex-center flex-fill">
         <template v-for="(elemType,i) in elemTypes" :key="i">
            <input class="elem-filter" type="checkbox" :id=elemType :value=elemType v-model="checkedElements">
            <label :for=elemType>
               <div class="img-elem-filter-container d-flex-center">
                  <img class="img-elem-filter" :src="logoType[elemType as keyof typeof logoType]" alt="">
               </div>
            </label>
         </template>
      </div>
      <div class="stats-filter-container d-flex-center justify-start flex-fill">
         <div class="stats-filter d-flex-center pl-10">
            <div>Stats</div>
            <div class="material-icons">arrow_drop_down</div>
         </div>
      </div>
      <div class="reset-filter d-flex-center mr-10 pl-10">
         <div class="material-icons">refresh</div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { onUpdated, ref } from 'vue';
import type { LogoTypeInterface } from '../../interfaces/logoType.interface'

const props = defineProps<{
   logoType: LogoTypeInterface,
}>();

const emit = defineEmits<{
   (e: 'exportChecked', value: string[]): void,
}>();

onUpdated(() => emit('exportChecked', checkedElements.value))

const checkedElements = ref([])
const elemTypes = ref(["Bug", "Dragon", "Electric", "Fairy", "Fighting", "Fire", "Flying", "Ghost", "Grass", "Ground", "Ice", "Normal", "Poison", "Psychic", "Rock", "Steel", "Water"]);


</script>

<style lang="scss" scoped>
.elem-filter {
   display: none;

   &:checked+label>div>img {
      animation: rotating 2s linear infinite;
      width: 100%;
   }
}

.elem-filter-container {
   border-right: var(--border);
   height: 50px;
}

.img-elem-filter-container {
   width: 35px;
}

.img-elem-filter {
   width: 20px;

   &:hover {
      width: 100%;
      cursor: pointer;
   }
}

.search-filter {
   border-right: var(--border);
   height: 50px;
}

.input-search-filter {
   font-size: var(--font-size);
   width: 200px;

   &::-webkit-input-placeholder {
      color: var(--text-primary-color);
   }

   &:focus::-webkit-input-placeholder {
      color: var(--hover-text-color);
   }

   :focus {
      color: var(--hover-text-color);
   }
}

.stats-filter-container {
   height: 50px;
}

.reset-filter {
   border-left: var(--border);
   height: 50px;
   color: var(--text-secondary-color);

   &:hover {
      color: var(--text-primary-color);
      cursor: pointer;
   }
}

.stats-filter {
   height: 40px;
   &:hover {
      color: var(--hover-text-color);
      background-color: var(--hover-background-color-2);
      cursor: pointer;
   }
}
</style>