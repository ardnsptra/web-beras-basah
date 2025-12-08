<!-- AlbumItem.vue -->
<template>
  <button
    @click="$emit('open')"
    class="rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-[1.02] transition duration-700"
  >
    <img :src="image" class="h-40 w-full object-cover" :alt="alt" />
  </button>
</template>

<script setup>
defineProps({
  image: String,
  alt: {
    type: String,
    default: ''
  }
})
</script>
