<template>
  <div class="dropdown">
    <div class="d-flex-center" :class="{clicked: toggle}" @click="toggle = !toggle;">
      <span>Stats</span>
      <div class="material-icons">arrow_drop_down</div>
    </div>
    <div :class="{'dropdown-content': !toggle , 'dropdown-content-display': toggle}">
      <template v-for="(content, index) of contents" :key="index">
        <div>
          <input class="elem-filter" type="checkbox" :id=content :value=content>
          <label :for=content>{{content}}</label>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const toggle = ref(false);
const contents = ref(['HP', 'At', 'Def', 'Sp.At', 'Sp.Def'])



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

  >div:first-child:hover {
    @extend .clicked;
  }
}

.dropdown-content {
  display: none;
}

.dropdown-content-display {
  display: block;
  position: absolute;
  background-color: var(--hover-background-color-2);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}

// .dropdown:hover .dropdown-content {
//   display: block;
// }
</style>
