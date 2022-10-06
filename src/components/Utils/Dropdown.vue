<template>
  <div class="dropdown">
    <div class="dropdown-title d-flex-center mb-5 mt-5" :class="{clicked: toggle}" @click="toggle = !toggle;">
      <span>Statistiques</span>
      <div v-if="toggle" class="material-icons">arrow_drop_up</div>
      <div v-else class="material-icons">arrow_drop_down</div>
    </div>
    <div :class="{'dropdown-content': !toggle , 'dropdown-content-display': toggle}">
      <template v-for="(stat, index) of stats" :key="index">
        <div class="d-flex-center justify-space-between">
          <div class="content-hover">
            <input class="content-checkbox" type="checkbox" :id=stat.name :value=stat.name v-model="stat.isChecked">
            <label :for=stat.name>{{stat.name}}</label>
          </div>
          <input class="stat-value" type="number" min="0" max="255" v-model="stat.value">
          <input type="range" style="width: 150px" min="0" max="255" v-model="stat.value">
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onUpdated, ref, reactive,  } from 'vue';
import type { statsInterface } from '@/interfaces/stats.interface'


const toggle = ref(false);


const stats = reactive([
  { isChecked: false, name: 'HP', value: 0 },
  { isChecked: false, name: 'At', value: 0 },
  { isChecked: false, name: 'Def', value: 0 },
  { isChecked: false, name: 'Sp.At', value: 0 },
  { isChecked: false, name: 'Sp.Def', value: 0 },
  { isChecked: false, name: 'Speed', value: 0 },
])

const emit = defineEmits<{
   (e: 'filter-emits', value: statsInterface[]): void,
}>();

onUpdated(() => emit('filter-emits', stats));


</script>

<style scoped lang="scss">
.clicked {
  color: var(--hover-text-color);
  background-color: var(--hover-background-color-2);
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
}

.dropdown-content-display {
  display: block;
  position: absolute;
  background-color: var(--hover-background-color-3);
  border-radius: 15px;
  width: 350px;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}

.content-hover {
  width: 100px;

  &:hover {
    background-color: var(--hover-background-color-1);
  }
}

input,
input+label {
  cursor: pointer;
  
  &:checked+label {
    color: var(--hover-text-color);
  }
}

.stat-value {
  background-color: var(--hover-background-color-3);
  font-size: 15px;
}

.dropdown-title:hover{
  color: var(--hover-text-color);
  background-color: var(--hover-background-color-2);
  cursor: pointer;
}

</style>
