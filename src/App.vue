<script lang="ts" setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="modal" style="display: block; color: white;">
    <div class="modal-background">
      <div class="modal-content">
        <div id="modal"></div>
      </div>
    </div>
    <button class="modal-close is-large"></button>
  </div>

  <div class="section">
    <div class="container">
      <Navbar />
      <RouterView />
    </div>
  </div>
</template>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
@import "highlight.js/styles/base16/solarized-dark.css";
@import "./style.css";
</style>