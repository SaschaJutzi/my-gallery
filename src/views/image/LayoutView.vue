<script setup>
import { useDocument, useFirestore } from 'vuefire'
import { useRoute, RouterView } from 'vue-router'
import { doc } from 'firebase/firestore'
import AppSubNavbar from '../../components/AppSubNavbar.vue'

const db = useFirestore()
const route = useRoute()
const docRef = doc(db, 'images', route.params.id)

const imageSource = useDocument(docRef)
</script>
<template>
  <div>
    <AppSubNavbar :imageSource="imageSource" />
    <RouterView :imageSource="imageSource" />
  </div>
</template>
