import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFileCheckStore = defineStore('FileCheckStore', () => {
  const file = ref(null)
  const fileError = ref('')

  const FileCheck = (e) => {
    // allowed file types
    let types = ['image/png', 'image/jpeg']

    let selected = e.target.files[0]

    if (selected && types.includes(selected.type)) {
      file.value = selected
      fileError.value = ''
    } else {
      file.value = null
      fileError.value = 'Please select an image file (png or jpg)'
    }
  }

  return { file, fileError, FileCheck }
})
