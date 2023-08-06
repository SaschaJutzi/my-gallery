import { defineStore } from 'pinia'
//Upload to Firebase Storage
import { ref as storageRef } from 'firebase/storage'
import { useFirebaseStorage, useStorageFile } from 'vuefire'
import { ref, watchEffect } from 'vue'

export const useUploadImageStore = defineStore('UploadImageStore', () => {
  const progress = ref(0)
  const URL = ref('')

  const uploadImage = (file) => {
    // references of storage bucket
    const storage = useFirebaseStorage()
    const imageFileRef = storageRef(storage, 'images/' + file.name)
    const { upload, uploadProgress, url } = useStorageFile(imageFileRef)
    //Upload to Firebase Storage
    upload(file)
    //Progress
    watchEffect(() => {
      progress.value = uploadProgress.value
      URL.value = url.value
    })
  }
  return { progress, URL, uploadImage }
})
