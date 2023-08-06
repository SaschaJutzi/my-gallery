<script setup>
import { RouterLink } from 'vue-router'
import { useCurrentUser } from 'vuefire'

const props = defineProps({
  img: {
    type: Object,
    required: true,
  },
})

const user = useCurrentUser()
</script>
<template>
  <div>
    <img
      class="w-full aspect-square rounded-lg shadow-md shadow-secondary cursor-pointer hover:scale-105"
      :src="props.img.url"
    />
    <RouterLink
      class="py-1 px-2 inline-flex items-center text-primary"
      :to="{ name: 'EditView', params: { id: img.id } }"
      v-if="user"
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
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
        />
      </svg>
      <span class="ml-1">edit</span>
    </RouterLink>
  </div>
</template>
