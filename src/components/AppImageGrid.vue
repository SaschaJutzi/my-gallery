<script setup>
import { useFirestore, useCollection } from 'vuefire'
import { collection, query, orderBy } from '@firebase/firestore'
import AppImageCard from '@/components/AppImageCard.vue'
import AppSpinner from '@/components/AppSpinner.vue'

const db = useFirestore()
const q = query(collection(db, 'images'), orderBy('createdAt', 'desc'))
const imageCollection = useCollection(q)

// open modal
const emit = defineEmits(['handle-open-modal'])

const handleOpenModal = (i) => {
  emit('handle-open-modal', i)
}
</script>

<template>
  <TransitionGroup
    tag="div"
    appear
    enter-from-class="opacity-0"
    enter-to-class="opacity-1"
    enter-active-class="transition-all duration-500"
    move-class="transition-all duration-500"
    class="grid grid-cols-3 gap-4 p-5 md:gap-8 place-items-center"
  >
    <div
      v-for="img in imageCollection"
      :key="img.id"
      @click="handleOpenModal(img)"
    >
      <AppImageCard :img="img" />
    </div>
  </TransitionGroup>
  <div class="flex justify-center">
    <AppSpinner v-if="imageCollection.length === 0" />
  </div>
</template>
