<template>
  <section
    ref="sectionRef"
    class="max-w-7xl mx-auto px-4 md:px-6 py-16 scroll-mt-24"
    :id="id"
  >
    <header
      :class="[
        'text-center mb-10 transition-all duration-700',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      ]"
    >
      <h2 class="text-2xl md:text-3xl font-bold uppercase tracking-wide">
        <slot name="title" />
      </h2>
      <p class="mt-2 text-sm md:text-base text-slate-600">
        <slot name="subtitle" />
      </p>
    </header>

    <div
      :class="[
        'transition-all duration-700 delay-150',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      ]"
    >
      <slot />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  id: {
    type: String,
    default: ''
  }
})

const sectionRef = ref(null)
const inView = ref(false)
let observer

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      inView.value = entry.isIntersecting
    },
    { threshold: 0.25 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})

onBeforeUnmount(() => {
  if (observer && sectionRef.value) observer.unobserve(sectionRef.value)
})
</script>
