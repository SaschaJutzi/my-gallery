import { defineStore } from 'pinia'
import { useDocument, useFirestore } from 'vuefire'
import { useRoute } from 'vue-router'
import { doc } from 'firebase/firestore'
import { watchEffect } from 'vue'

export const useImageSourceStore = defineStore('ImageSourceStore', () => {
  watchEffect(() => {
    const db = useFirestore()
    const route = useRoute()
    const docRef = doc(db, 'images', route.params.id)
    const imageSource = useDocument(docRef)
    return { imageSource }
  })
})
