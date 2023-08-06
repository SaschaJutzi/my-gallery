import { defineStore } from 'pinia'
import { useFirestore } from 'vuefire'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { ref } from 'vue'

export const useUploadFormStore = defineStore('UploadFormStore', () => {
  const title = ref('')
  const description = ref('')

  const uploadForm = async (u) => {
    const db = useFirestore()
    const imageCollection = collection(db, 'images')
    await addDoc(imageCollection, {
      title: title.value,
      description: description.value,
      url: u,
      createdAt: serverTimestamp(),
    })
  }
  return { title, description, uploadForm }
})
