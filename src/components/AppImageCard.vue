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
      class="py-1 px-2 mt-2 inline-flex items-center text-primary"
      :to="{ name: 'EditView', params: { id: props.img.id } }"
      v-if="user"
      >edit or delete
    </RouterLink>
  </div>
</template>
