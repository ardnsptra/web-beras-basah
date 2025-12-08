<template>
  <section
    id="beranda"
    class="relative min-h-screen flex items-center justify-center"
  >
    <!-- VIDEO BACKGROUND (VERTIKAL OK, DIPOTONG TENGAH) -->
    <video
      v-if="videoSrc"
      :src="videoSrc"
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 w-full h-full object-cover -z-20"
    ></video>

    <!-- Fallback gambar kalau videoSrc kosong -->
    <div
      v-else
      class="absolute inset-0 -z-20 bg-cover bg-center"
      :style="heroImage ? { backgroundImage: `url(${heroImage})` } : {}"
    />

    <!-- Overlay gelap tipis seperti di Bukit Kebo -->
    <div
      class="absolute inset-0 -z-10 bg-black/30"
    ></div>

    <!-- CARD TRANSPARAN DI TENGAH -->
    <div class="relative max-w-5xl mx-auto px-4 md:px-6">
      <div
        class="bg-black/55 rounded-xl px-6 md:px-10 py-8 md:py-10 text-white shadow-2xl"
      >
        <h2 class="text-3xl md:text-5xl font-bold uppercase leading-tight mb-4">
          <slot name="title" />
        </h2>

        <p class="text-sm md:text-base leading-relaxed mb-3">
          <slot name="paragraph1" />
        </p>

        <p class="text-sm md:text-base leading-relaxed">
          <slot name="paragraph2" />
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  videoSrc: {
    type: String,
    default: ''
  },
  // optional fallback image
  heroImage: {
    type: String,
    default: ''
  }
})
</script>
