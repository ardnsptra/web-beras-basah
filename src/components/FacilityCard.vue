<template>
  <article
    class="relative bg-white rounded-xl shadow-lg overflow-hidden group
           transform transition-all duration-500
           hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.03]"
  >
    <!-- Gambar -->
    <img
      :src="image"
      :alt="title"
      class="w-full h-48 md:h-56 object-cover
             transition-transform duration-700
             group-hover:scale-110"
    />

    <!-- Overlay teks -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
      <div class="p-4 md:p-5 text-white">
        <h3 class="text-base md:text-lg font-semibold mb-1">
          {{ title }}
        </h3>
        <p class="text-xs md:text-sm opacity-90">
          {{ description }}
        </p>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
})
</script>
