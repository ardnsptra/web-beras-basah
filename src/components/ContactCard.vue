<template>
  <article
    class="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center"
  >
    <img v-if="icon" :src="icon" :alt="label" class="w-10 h-10 mb-3" />
    <h3 class="font-semibold mb-1 text-sm md:text-base">{{ label }}</h3>
    <p class="text-xs md:text-sm text-slate-600">
      <a v-if="href" :href="href" target="_blank" class="text-sky-600 hover:underline">
        {{ value }}
      </a>
      <span v-else>{{ value }}</span>
    </p>
  </article>
</template>

<script setup>
defineProps({
  label: String,
  value: String,
  icon: String,
  href: {
    type: String,
    default: ''
  }
})
</script>
