<script setup>
import { useUploadFormStore } from '../stores/UploadFormStore'
const UploadFormStore = useUploadFormStore()
</script>
<template>
  <div class="text-secondary">
    <p class="text-xl mb-2">Upload your image</p>
    <label for="title">Title:</label>
    <input
      type="text"
      name="title"
      v-model="UploadFormStore.title"
      class="block min-w-full p-1 mt-2.5 mb-5 border border-secondary rounded-md text-secondary"
    />
    <label for="description">Description:</label>
    <textarea
      name="description"
      v-model="UploadFormStore.description"
      class="block min-w-full p-1 mt-2.5 mb-5 border border-secondary rounded-md text-secondary"
    ></textarea>
  </div>
</template>
