<template>
  <div
    class="bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition duration-500 ease-out"
    :class="inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
    :style="{ transitionDelay: `${index * 120}ms` }"
  >
    <!-- Avatar -->
    <div class="flex justify-center -mt-10">
      <div class="w-20 h-20 rounded-full overflow-hidden border-4 border-emerald-500 bg-white">
        <img :src="avatar" :alt="name" class="object-cover w-full h-full" />
      </div>
    </div>

    <div class="p-6">
      <!-- Nama -->
      <h2 class="text-center text-xl font-semibold mb-4">
        {{ name }}
      </h2>

      <!-- Teks review -->
      <p class="text-gray-700 text-sm text-center mb-4">
        {{ text }}
      </p>

      <!-- Bintang -->
      <div class="flex justify-center items-center space-x-1 mb-3">
        <svg
          v-for="i in 5"
          :key="i"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          :class="[
            'w-5 h-5',
            i <= rating ? 'fill-yellow-400 stroke-yellow-400' : 'fill-transparent stroke-yellow-400'
          ]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      </div>

      <!-- Logo Google + link -->
      <div class="text-center mt-2">
        <a
          :href="link"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center text-blue-500 hover:underline text-sm"
        >
          <img
            :src="googleLogo"
            alt="Google Logo"
            class="w-5 h-5 mr-2"
          />
          Posted on Google
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
  text: { type: String, required: true },
  rating: { type: Number, required: true },
  avatar: { type: String, required: true },
  link: { type: String, required: true },
  googleLogo: { type: String, required: true },
  index: { type: Number, default: 0 },
  inView: { type: Boolean, default: false }
})
</script>
