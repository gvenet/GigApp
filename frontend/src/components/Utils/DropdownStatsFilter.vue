<template>
  <div class="dropdown">
    <div class="dropdown-title d-flex-center mb-5 mt-5" :class="{clicked: toggle}" @click="toggle = !toggle;">
      <span>Stats</span>
      <div v-if="toggle" class="material-icons">arrow_drop_up</div>
      <div v-else class="material-icons">arrow_drop_down</div>
    </div>
    <div :class="{'dropdown-content': !toggle , 'dropdown-content-display': toggle}">
      <template v-for="(stat, index) of props.stats" :key="index">
        <div class="d-flex-center justify-space-between">
          <div class="content-hover">
            <input class="content-checkbox" type="checkbox" :id=stat.name :value=stat.name v-model="stat.isChecked">
            <label :for=stat.name>{{stat.name}}</label>
          </div>
          <input class="stat-value" type="number" min="0" max="255" v-model="stat.value">
          <input type="range" style="width: 100px" min="0" max="255" v-model="stat.value">
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onUpdated, ref, reactive, } from 'vue';
import type { StatsInterface } from '@/interfaces'


const toggle = ref(false);

const props = defineProps<{
  stats: StatsInterface[],
}>();

const emit = defineEmits<{
  (e: 'filter-emits', value: StatsInterface[]): void,
}>();

onUpdated(() => emit('filter-emits', props.stats));


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
  width: 300px;
  left: -119px;
  padding: 10px 5px;
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

.dropdown-title:hover {
  color: var(--hover-text-color);
  background-color: var(--hover-background-color-2);
  cursor: pointer;
}
</style>
