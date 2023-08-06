<script setup>
import { useFirebaseAuth } from 'vuefire'
import { signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { useCurrentUser } from 'vuefire'
import { ref } from 'vue'
const toggle = ref('true')

const user = useCurrentUser()
const router = useRouter()

const auth = useFirebaseAuth()

const handleSignOut = async () => {
  //toggle color of sign out buttom
  toggle.value = !toggle.value
  signOut(auth)
    .then(() => {
      router.push({ name: 'HomeView' })
      toggle.value = true
    })
    .catch((error) => {
      console.log('Errormessage is: ', error.message)
    })
}
</script>
<template>
  <nav class="flex justify-end flex-wrap space-x-1 text-secondary py-4">
    <RouterLink
      class="py-1 px-2 inline-flex items-center"
      :to="{ name: 'HomeView' }"
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
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
      <span class="ml-1">home</span>
    </RouterLink>
    <!-- for signed in users -->
    <div v-if="user">
      <RouterLink
        class="py-1 px-2 inline-flex items-center"
        :to="{ name: 'UploadView' }"
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
        <span class="ml-1">upload</span>
      </RouterLink>
      <button
        class="py-1 px-2 inline-flex items-center cursor-pointer"
        :class="toggle ? [] : ['text-primary']"
        @click="handleSignOut"
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
        <span class="ml-1">sign out</span>
      </button>
    </div>
    <!-- for signed out users -->
    <div v-if="!user">
      <RouterLink
        class="py-1 px-2 inline-flex items-center"
        :to="{ name: 'SignInView' }"
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
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
          />
        </svg>
        <span class="ml-1">sign in</span>
      </RouterLink>
    </div>
  </nav>
  <div class="text-secondary" v-if="user">Hello {{ user.email }}</div>
</template>

<style scoped>
nav a.router-link-exact-active {
  @apply text-primary;
}
</style>
