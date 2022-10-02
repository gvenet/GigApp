<template>
   <header class="container d-flex justify-space-between align-center" >
      <div class="pl-30 d-flex align-center">
         <img class="mr-10 logo" :src="test" alt="">
         <h4 class="mr-10">Gig<span class="app-logo">App</span></h4>
      </div>
      <div class="pr-30 d-flex align-center">
         <button class="btn btn-header">Buy</button>
         <button class="btn btn-header">Account</button>
         <button class="btn btn-header">Sign in</button>
         <button class="btn btn-header">Sign up</button>
      </div>
   </header>

</template>

<script setup lang="ts">
import test from "../assets/logo.svg"
</script>

<style scoped lang="scss">
.container {
   border-bottom: var(--border);
}
.logo {
   height: 25px;
}

.app-logo {
   color: var(--gray-3);
   font-weight: 100;
}
</style>
