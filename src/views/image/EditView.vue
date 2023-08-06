<script setup>
import { ref, watchEffect } from 'vue'
import { useFirestore } from 'vuefire'
import { doc, updateDoc } from 'firebase/firestore'

const props = defineProps({
  imageSource: {
    type: Object,
    required: true,
  },
})

const editImage = ref({})

watchEffect(() => {
  editImage.value = { ...props.imageSource }
})

const db = useFirestore()
const docRef = doc(db, 'images', props.imageSource.id)

const handleUpdate = async () => {
  await updateDoc(docRef, { ...editImage.value })
}
</script>
<template>
  <form @submit.prevent="handleUpdate">
    <div class="test-secondary">
      <p class="text-xl mb-2">Edit your image</p>
      <label for="title">Title: {{ props.imageSource.title }}</label>
      <input
        type="text"
        name="title"
        class="block min-w-full p-1 mt-2.5 mb-5 border border-secondary rounded-md"
        v-model="editImage.title"
      />
      <label for="description">Description:</label>
      <textarea
        name="description"
        class="block min-w-full p-1 mt-2.5 mb-5 border border-secondary rounded-md"
        v-model="editImage.description"
      ></textarea>
    </div>
    <button
      class="border-2 border-primary rounded leading-9 font-bold text-primary py-1 px-12 inline-flex items-center cursor-pointer hover:bg-primary hover:text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
        />
      </svg>
      <span class="ml-1">edit</span>
    </button>
  </form>
</template>
