<template>
   <div class="app-container">
      <TheHeader class="header" />
      <Shop class="shop" :pokemons="state" />
      <!-- <Cart class="cart" /> -->
      <TheFooter class="footer" />
   </div>

</template>

<script setup lang="ts">
import TheHeader from "./components/Header.vue";
import TheFooter from "./components/Footer.vue";
import Cart from "./components/Cart/Cart.vue";
import Shop from "./components/Shop/Shop.vue";
import { reactive } from "vue";
import type { PokemonInterface } from "./interfaces/pokemon.interface";
import pokemonsData from "./data/pokemons.json"

const state = reactive<PokemonInterface[]>(pokemonsData);

</script>

<style lang="scss">
@import "./assets/base.scss";
@import "./assets/debug.scss";

.app-container {
   height: 100vh;
   display: grid;
   // grid-template-columns: 80% 20%;
   grid-template-columns: 100%;
   grid-template-rows: 50px auto 50px;
   // grid-template-areas: "header header" "shop cart" "footer footer";
   grid-template-areas: "header" "shop" "footer";
}

.header {
   grid-area: header;
}

.shop {
   grid-area: shop;
}

.cart {
   grid-area: cart;
}

.footer {
   grid-area: footer;
}
</style>
