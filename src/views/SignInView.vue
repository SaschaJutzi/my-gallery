<script setup>
import { ref } from 'vue'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useFirebaseAuth } from 'vuefire'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const myError = ref(null)

const auth = useFirebaseAuth()

const router = useRouter()

const handleSignIn = async () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      router.push({ name: 'HomeView' })
      myError.value = null
    })
    .catch((error) => {
      myError.value = error.message
    })
}
</script>
<template>
  <form @submit.prevent="handleSignIn">
    <div class="text-secondary mt-8">
      <p class="text-xl mb-2">Login</p>
      <label for="email">email:</label>
      <input
        type="email"
        name="email"
        class="block min-w-full p-1 mt-2.5 mb-5 border border-secondary rounded-md"
        v-model="email"
        placeholder="e-mail"
      />
      <label for="password">Password:</label>
      <input
        type="password"
        name="title"
        class="block min-w-full p-1 mt-2.5 mb-5 border border-secondary rounded-md"
        v-model="password"
        placeholder="password"
      />
    </div>
    <button
      class="border-2 border-primary rounded leading-9 font-bold text-primary py-1 px-12 inline-flex items-center cursor-pointer hover:bg-primary hover:text-white"
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
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
        />
      </svg>

      <span class="ml-1">sign in</span>
    </button>
  </form>
  <div v-if="myError" class="text-error">Error: {{ myError }}</div>
</template>
