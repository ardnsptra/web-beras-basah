<template>
  <teleport to="body">
    <!-- BACKDROP -->
    <div
      class="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center px-4"
    >
      <!-- POPUP UTAMA -->
      <div
        class="relative w-full max-w-6xl max-h-[90vh] my-4
               bg-slate-900 rounded-2xl shadow-2xl
               flex flex-col overflow-hidden"
      >
        <!-- TOMBOL CLOSE -->
        <button
          class="absolute top-4 right-4
                 w-10 h-10 md:w-11 md:h-11
                 rounded-full bg-white/10 border border-white/40
                 flex items-center justify-center
                 text-white text-2xl md:text-3xl
                 hover:bg-white hover:text-slate-900
                 transition-all duration-200"
          @click="$emit('close')"
          aria-label="Tutup"
        >
          ×
        </button>

        <!-- AREA GAMBAR (FRAME SAMA UNTUK SEMUA) -->
        <div class="flex-1 flex items-center justify-center p-4 md:p-8 overflow-hidden">
          <div
            class="w-full max-w-4xl max-h-[65vh]
                   aspect-[16/9]
                   bg-black/40 rounded-xl overflow-hidden
                   flex items-center justify-center"
          >
            <img
              :src="image"
              alt="Foto album"
              class="w-full h-full object-contain"
            />
          </div>
        </div>

        <!-- KONTROL BAWAH -->
        <div
          class="flex-none flex items-center justify-between
                 px-4 md:px-6 py-3 md:py-4
                 border-t border-slate-700/60
                 text-slate-100 text-xs md:text-sm bg-slate-900"
        >
          <button
            @click="$emit('prev')"
            class="px-3 md:px-4 py-1.5 rounded-full border border-slate-500
                   hover:bg-slate-800 hover:border-slate-300
                   flex items-center gap-2 transition-colors duration-200"
          >
            <span class="text-lg">←</span>
            <span class="hidden sm:inline">Sebelumnya</span>
          </button>

          <span class="tracking-[0.25em] uppercase">
            {{ index + 1 }} / {{ total }}
          </span>

          <button
            @click="$emit('next')"
            class="px-3 md:px-4 py-1.5 rounded-full border border-slate-500
                   hover:bg-slate-800 hover:border-slate-300
                   flex items-center gap-2 transition-colors duration-200"
          >
            <span class="hidden sm:inline">Selanjutnya</span>
            <span class="text-lg">→</span>
          </button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
defineProps({
  image: String,
  index: Number,
  total: Number
})
</script>
