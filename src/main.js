import { createApp } from 'vue'
import { VueFire, VueFireAuth, useFirebaseAuth } from 'vuefire'
import { firebaseApp } from '@/firebase'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/tailwind.css'

import { onAuthStateChanged } from 'firebase/auth'

const auth = useFirebaseAuth()

onAuthStateChanged(auth, () => {
  const app = createApp(App)

  app.use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth()],
  })

  app.use(createPinia())
  app.use(router)

  app.mount('#app')
})
