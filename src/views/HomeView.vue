<script setup>
import AppTitle from '../components/AppTitle.vue'
import AppImageGrid from '../components/AppImageGrid.vue'
import AppModal from '../components/AppModal.vue'
import { ref } from 'vue'

// show modal
const selectedImg = ref(null)

const handleToggleModal = (i) => {
  selectedImg.value = i
}
</script>

<template>
  <main>
    <AppTitle />
    <AppImageGrid @handle-open-modal="handleToggleModal" />
    <AppModal
      v-if="selectedImg"
      :img="selectedImg"
      @handle-close-modal="handleToggleModal"
    />
  </main>
</template>
