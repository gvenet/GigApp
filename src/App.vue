<template>
   <div class="app-container">
      <TheHeader class="header" />
      <Shop class="shop" />
      <Cart class="cart" />
      <TheFooter class="footer" />
   </div>

</template>

<script setup lang="ts">
import TheHeader from "./components/Header.vue";
import TheFooter from "./components/Footer.vue";
import Cart from "./components/Cart/Cart.vue";
import Shop from "./components/Shop/Shop.vue";

</script>

<style lang="scss">
@import "./assets/base.scss";
@import "./assets/debug.scss";

.app-container {
   height: 100vh;
   display: grid;
   grid-template-columns: 80% 20%;
   grid-template-rows: 50px auto 50px;
   grid-template-areas: "header header" "shop cart" "footer footer";
}

.header {
   grid-area: header;
}

.shop {
   grid-area: shop;
}

.cart {
   grid-area: cart;
   min-width: 300px;
}

.footer {
   grid-area: footer;
}
</style>
