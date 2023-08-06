<script setup>
import AppProgressBar from '../components/AppProgressBar.vue'
import AppUploadForm from '../components/AppUploadForm.vue'
import AppUploadImage from '../components/AppUploadImage.vue'
import { useFileCheckStore } from '../stores/FileCheckStore'
import { useUploadImageStore } from '../stores/UploadImageStore'
import { useUploadFormStore } from '../stores/UploadFormStore'
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

// Upload to Firebase Storage and Firestore
const fileCheckStore = useFileCheckStore()
const { file } = storeToRefs(fileCheckStore)

const uploadImageStore = useUploadImageStore()
const { progress, URL } = storeToRefs(uploadImageStore)

const uploadFormStore = useUploadFormStore()
const { title, description } = storeToRefs(uploadFormStore)

const router = useRouter()

const handleSubmit = () => {
  uploadImageStore.uploadImage(file.value)
  watch(URL, () => {
    if (URL.value) {
      uploadFormStore.uploadForm(URL.value)
      // Reset view after upload
      file.value = ''
      progress.value = 0
      URL.value = ''
      title.value = ''
      description.value = ''
      router.push({ name: 'HomeView' })
    }
  })
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="text-left">
    <AppProgressBar />
    <AppUploadForm />
    <AppUploadImage />
    <button
      class="border-2 border-primary rounded leading-9 font-bold text-primary py-1 px-12 inline-flex items-center"
      :class="
        file
          ? ['cursor-pointer', 'hover:bg-primary', 'hover:text-white']
          : ['bg-secondary', 'cursor-not-allowed']
      "
      :disabled="!file"
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
          d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
        />
      </svg>
      <span class="ml-1">save</span>
    </button>
  </form>
</template>
