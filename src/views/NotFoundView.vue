<template>
  <div class="text-3xl text-center mt-10 mb-5">
    <p class="text-secondary">Oops, we couldn´t find that page! Try going</p>
    <p class="text-primary">
      <RouterLink :to="{ name: 'HomeView' }">home</RouterLink>
    </p>
  </div>
</template>
