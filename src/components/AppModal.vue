<script setup>
const props = defineProps({
  img: {
    type: Object,
    required: true,
  },
})

// open modal
const emit = defineEmits(['handle-close-modal'])

const handleCloseModal = () => {
  emit('handle-close-modal', null)
}
</script>
<template>
  <Transition
    appear
    enter-from-class="opacity-0"
    enter-active-class="transition-opacity duration-500"
  >
    <div
      class="absolute w-full bg-black bg-opacity-80 h-screen top-0 left-0 flex justify-center px-8"
    >
      <Transition
        appear
        enter-from-class="translate-y-1/4"
        enter-active-class="transition-translate duration-500"
      >
        <div class="text-white self-start mt-32 max-w-screen-md">
          <div class="flex justify-end" @click="handleCloseModal">
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <img :src="props.img.url" />
          <p class="text-lg">{{ props.img ? props.img.title : '' }}</p>
          <p>{{ props.img ? props.img.description : '' }}</p>
        </div>
      </Transition>
    </div>
  </Transition>
</template>
