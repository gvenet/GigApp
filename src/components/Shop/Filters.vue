<template>
   <div class="d-flex-center justify-space-between m-20">
      <div class="d-flex-center">
         <div class="search-filter d-flex-center justify-start ml-10">
            <h5 class="material-icons">search</h5>
            <input class="input-search-filter ml-10" type="text" placeholder="Search" maxlength="6"
               v-model="searchedPokemon">
         </div>
         <div class="stats-filter-container d-flex-center justify-start ml-10">
            <DropdownStatsFilter class="ml-10 mr-10" @filter-emits="emit('filter-emits', $event)" />
         </div>
      </div>
      <div class="elem-filter-container d-flex-center flex-fill">
         <template v-if="windowSize > 950">
            <ListElemFilter @export-checked="emit('export-checked', $event)" :logoType="props.logoType"
               :checkedElements="checkedElements" />
         </template>
         <template v-else>
            <DropdownElemFilter />
         </template>
      </div>
      <div class="reset-filter d-flex-center mr-10 pl-10" @click="emit('refresh-filter')">
         <div class="material-icons">refresh</div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { onUpdated, onMounted, onUnmounted, ref, type Ref } from 'vue';
import type { LogoTypeInterface } from '../../interfaces/logoType.interface'
import type { statsInterface } from '@/interfaces/stats.interface'
import DropdownStatsFilter from '../Utils/DropdownStatsFilter.vue'
import DropdownElemFilter from '../Utils/DropdownElemFilter.vue'
import ListElemFilter from './ListElemFilter.vue'

const windowSize = ref(window.innerWidth)
onMounted(() => {
   window.addEventListener('resize', () => { windowSize.value = window.innerWidth })
})
onUnmounted(() => {
   window.removeEventListener('resize', () => { windowSize.value = window.innerWidth })
})

const props = defineProps<{
   logoType: LogoTypeInterface,
   searchedPokemon: string,
   checkedElements: string[],
}>();


const emit = defineEmits<{
   (e: 'export-checked', value: string[]): void,
   (e: 'searchedPokemon', value: string): void,
   (e: 'filter-emits', value: statsInterface[]): void,
   (e: 'refresh-filter'): void,
}>();

onUpdated(() => emit('searchedPokemon', props.searchedPokemon));

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
   width: 70px;

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
   border-right: var(--border);
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