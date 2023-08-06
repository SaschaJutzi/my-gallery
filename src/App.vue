<script setup>
import { RouterView } from 'vue-router'
import AppNavbar from './components/AppNavbar.vue'
</script>

<template>
  <div class="wrapper">
    <header>
      <AppNavbar />
    </header>

    <RouterView />
  </div>
</template>
