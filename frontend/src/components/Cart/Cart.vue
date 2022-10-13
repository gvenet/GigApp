<template>
   <div class="container p-20" >
      <div class="product p-10 m-5" v-for="n of 10">
         cart-product
      </div>
      
   </div>

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
   border-left: var(--border);
}

.product {
   border: var(--border);
   border-radius: var(--border-radius);
}

</style>
