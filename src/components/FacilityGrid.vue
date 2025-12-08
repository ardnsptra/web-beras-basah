<template>
  <div ref="gridRef" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <FacilityCard
      v-for="(item, idx) in list"
      :key="item.id"
      :title="item.title"
      :description="item.description"
      :image="item.image"
      :index="idx"
      :inView="inView"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import FacilityCard from './FacilityCard.vue'

defineProps({
  list: {
    type: Array,
    default: () => []
  }
})

const gridRef = ref(null)
const inView = ref(false)
let observer

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      inView.value = entry.isIntersecting
    },
    { threshold: 0.2 }
  )
  if (gridRef.value) observer.observe(gridRef.value)
})

onBeforeUnmount(() => {
  if (observer && gridRef.value) observer.unobserve(gridRef.value)
})

</script>
