<script lang="ts" setup>
  import { computed } from '@vue/reactivity'
  import { useModal } from './composables/modal'
  import { useUsers } from './stores/users'
  import Navbar from './components/Navbar.vue'

  const modal = useModal()
  const usersStore = useUsers()
  const modalStyle = computed(() => {
    return {
      display: modal.show.value ? 'block' : 'none',
    }
  })

  usersStore.authenticate()
</script>

<template>
  <div class="modal" style="color: white" :style="modalStyle">
    <div class="modal-background">
      <div class="modal-content">
        <div id="modal"></div>
      </div>
    </div>
    <button
      class="modal-close is-large"
      @click="modal.hideModal()"></button>
  </div>

  <div class="section">
    <div class="container">
      <Navbar />
      <RouterView />
    </div>
  </div>
</template>

<style>
  @import 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css';
  @import 'highlight.js/styles/base16/solarized-dark.css';
  @import './style.css';
</style>
