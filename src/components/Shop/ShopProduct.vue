<template>
   <div class="container p-10 m-5 d-flex justify-space-between">
      <div>
         <h2 class="mb-10">{{name}}</h2>
         <div class="mb-10 d-flex">
            <h3 class="mr-20">Lvl: {{level}}</h3>
            
         </div>

      </div>
      <img :src="image">

   </div>

</template>

<script setup lang="ts">
import { ref } from "vue";
import img from "../../assets/nidoran.png"

const image = ref(img);
const name = ref('Nidoran');
const level = ref(0);

</script>

<style scoped lang="scss">
.container {
   width: 300px;
   height: 300px;
   border: var(--border);
   border-radius: var(--border-radius);
}

img {
   width: 70px;
   height: 70px;
}
</style>
