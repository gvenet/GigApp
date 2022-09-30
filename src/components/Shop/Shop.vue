<template>
   <div class="container">
      <div class="filter d-flex align-center justify-space-around p-30">
         <h5 class="m-10">FILTER1</h5>
         <h5 class="m-10">FILTER2</h5>
         <h5 class="m-10">FILTER3</h5>
         <h5 class="m-10">FILTER4</h5>
         <h5 class="m-10">FILTER5</h5>
      </div>
      <div class="shop-list p-30 d-flex justify-start align-center">
         <div class="product p-10 m-5" v-for="n of 30">
            shop-product
         </div>
      </div>
   </div>

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
   
}

.filter {
   height: 50px;
   border-bottom: var(--border);

}

.shop-list {
   flex-wrap: wrap;
}

.product {
   width: 150px;
   height: 150px;
   border: var(--border);
   border-radius: var(--border-radius);
}
</style>
