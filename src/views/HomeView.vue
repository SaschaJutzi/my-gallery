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
    <Transition
      leave-to-class="opacity-0"
      leave-active-class="transition-opacity duration-500"
    >
      <AppModal
        v-if="selectedImg"
        :img="selectedImg"
        @handle-close-modal="handleToggleModal"
      />
    </Transition>
  </main>
</template>
