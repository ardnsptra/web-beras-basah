<template>
  <div>
    <section class="relative bg-slate-800 text-white py-12">
      <!-- TODO: background image underwater -->
      <div class="max-w-6xl mx-auto px-6">
        <h1 class="text-center text-2xl md:text-3xl font-bold mb-8">
          Ulasan
        </h1>

        <div class="grid gap-6 md:grid-cols-3">
          <article
            v-for="review in reviews"
            :key="review.id"
            class="bg-white text-slate-800 rounded-xl shadow-md p-5 text-sm"
          >
            <header class="mb-3">
              <h3 class="font-semibold text-base">
                {{ review.name }}
              </h3>
              <p class="text-xs text-slate-500">
                Posted on Google
              </p>
            </header>

            <p class="mb-3 text-slate-700 line-clamp-4">
              {{ review.text }}
            </p>

            <p class="text-yellow-400 text-sm">
              ★★★★★
            </p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const reviews = [
  {
    id: 1,
    name: 'Muhammad Ardian Saputra',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulau yang indah dengan air laut jernih...'
  },
  {
    id: 2,
    name: 'Muhammad Ardian Saputra',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sangat cocok untuk liburan singkat...'
  },
  {
    id: 3,
    name: 'Muhammad Ardian Saputra',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fasilitas cukup lengkap dan terjaga...'
  }
]
</script>
