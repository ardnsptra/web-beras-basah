<template>
  <PageSection>
    <template #title>Album</template>
    <template #subtitle>Kumpulan momen terbaik di Pulau Beras Basah.</template>

    <div class="grid gap-4 md:grid-cols-3">
      <button
        v-for="(photo, index) in photos"
        :key="photo.id"
        type="button"
        class="bg-slate-800 rounded-xl overflow-hidden shadow-md hover:scale-[1.01] transition"
        @click="openLightbox(index)"
      >
        <div class="h-40 bg-slate-700">
          <!-- TODO: <img :src="photo.src" class="w-full h-full object-cover" /> -->
        </div>
      </button>
    </div>

    <!-- TODO: lightbox/modal implement nanti -->
    <div
      v-if="activeIndex !== null"
      class="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    >
      <div class="bg-slate-900 rounded-xl max-w-3xl w-full mx-4 p-4">
        <header class="flex justify-between items-center mb-4">
          <button @click="prev" class="px-2">&lt;</button>
          <button @click="close" class="px-2 text-xl">&times;</button>
          <button @click="next" class="px-2">&gt;</button>
        </header>

        <div class="h-72 bg-slate-800 mb-3">
          <!-- TODO: gambar utama -->
        </div>

        <p class="text-center text-sm text-slate-300">
          {{ activeIndex + 1 }}/{{ photos.length }}
        </p>
      </div>
    </div>
  </PageSection>
</template>

<script setup>
import { ref } from 'vue'
import PageSection from '../components/PageSection.vue'


const photos = [
  { id: 1, src: 'album1.jpg' },
  { id: 2, src: 'album2.jpg' },
  { id: 3, src: 'album3.jpg' },
  { id: 4, src: 'album4.jpg' },
  { id: 5, src: 'album5.jpg' },
  { id: 6, src: 'album6.jpg' }
]

const activeIndex = ref(null)

const openLightbox = (index) => {
  activeIndex.value = index
}

const close = () => {
  activeIndex.value = null
}

const prev = () => {
  if (activeIndex.value === null) return
  activeIndex.value =
    (activeIndex.value - 1 + photos.length) % photos.length
}

const next = () => {
  if (activeIndex.value === null) return
  activeIndex.value = (activeIndex.value + 1) % photos.length
}
</script>
