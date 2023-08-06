<script setup>
import { useUploadImageStore } from '../stores/UploadImageStore'
import { storeToRefs } from 'pinia'

//Upload to Firebase Storage
const UploadImageStore = useUploadImageStore()
const { progress } = storeToRefs(UploadImageStore)
</script>
<template>
  <div
    class="block h-1 bg-primary rounded-md my-5 transition-{width} ease-out"
    :style="{ width: progress * 100 + '%' }"
  ></div>
</template>
