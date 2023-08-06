<script setup>
import { useFileCheckStore } from '../stores/FileCheckStore'
import { storeToRefs } from 'pinia'

// Check File
const fileCheckStore = useFileCheckStore()
const { file, fileError } = storeToRefs(fileCheckStore)
</script>

<template>
  <label
    class="border-2 border-primary rounded leading-9 font-bold text-primary cursor-pointer hover:bg-primary hover:text-white py-1 px-7 inline-flex items-center"
  >
    <input
      @change="fileCheckStore.FileCheck"
      class="h-0 w-0 opacity-0"
      type="file"
    />
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
        d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
      />
    </svg>
    <span class="ml-1">attach file</span>
  </label>
  <div class="mb-5 text-sm">
    <div v-if="file">{{ file.name }}</div>
    <div v-if="fileError" class="text-error">
      {{ fileError }}
    </div>
  </div>
</template>
