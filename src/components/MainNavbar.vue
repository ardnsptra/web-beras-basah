<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-colors duration-300',
      headerClass
    ]"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div
      class="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center relative"
    >
      <!-- Brand kiri -->
      <a
        href="#beranda"
        class="font-semibold text-lg flex items-center gap-1"
      >
        Wisata
        <span
          :class="[
            'font-bold transition-colors',
            isTop && !isHovered ? 'text-sky-300' : 'text-sky-600'
          ]"
        >
          Pulau Beras Basah
        </span>
      </a>

      <!-- Menu desktop di tengah -->
      <nav class="hidden md:block absolute left-1/2 -translate-x-1/2">
        <ul
          class="flex gap-8 text-sm md:text-base font-semibold tracking-wide uppercase"
        >
          <li v-for="link in links" :key="link.name" class="relative">
            <RouterLink
              :to="link.to"
              class="pb-1 transition-colors"
              :class="isActive(link) ? activeClass : ''"
            >
              {{ link.label }}
              <span
                class="absolute left-0 -bottom-0.5 h-[2px] transition-all duration-300"
                :class="isActive(link) ? underlineClass : 'w-0 bg-transparent'"
              />
            </RouterLink>
          </li>
        </ul>
      </nav>

      <!-- Toggle mobile di kanan -->
      <button
        class="md:hidden p-2 rounded ml-auto focus:outline-none focus:ring-2 focus:ring-sky-400"
        @click="isMenuOpen = !isMenuOpen"
        aria-label="Toggle menu"
      >
        <span v-if="!isMenuOpen">☰</span>
        <span v-else>✕</span>
      </button>
    </div>

    <!-- Menu mobile -->
    <transition name="fade">
      <nav
        v-if="isMenuOpen"
        class="md:hidden bg-white/95 text-slate-900 border-t border-slate-200"
      >
        <ul
          class="flex flex-col gap-3 px-4 py-4 text-sm font-semibold uppercase"
        >
          <li v-for="link in links" :key="link.name">
            <RouterLink
              :to="link.to"
              class="block py-1"
              @click="isMenuOpen = false"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)
const isTop = ref(true)
const isHovered = ref(false)

const handleScroll = () => {
  isTop.value = window.scrollY < 80
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const links = [
  { name: 'beranda',   label: 'Beranda',   to: '/beranda' },
  { name: 'fasilitas', label: 'Fasilitas', to: '/fasilitas' },
  { name: 'tentang',   label: 'Tentang',   to: '/tentang' },
  { name: 'album',     label: 'Album',     to: '/album' },
  { name: 'ulasan',    label: 'Ulasan',    to: '/ulasan' },
  { name: 'kontak',    label: 'Kontak',    to: '/kontak' },
  { name: 'About Me',    label: 'AboutMe',    to: '/cots' }
]

const isActive = (link) => route.name === link.name

// === MODE HERO TRANSPARAN ===
const heroTransparent = computed(() => isTop.value && !isHovered.value)

// transparan di hero, putih di luar hero / saat di-hover
const headerClass = computed(() => {
  if (heroTransparent.value) return 'bg-transparent text-white'
  return 'bg-white/95 text-slate-900 shadow'
})

// link aktif
const activeClass = computed(() =>
  heroTransparent.value ? 'text-white' : 'text-sky-500'
)

// underline aktif
const underlineClass = computed(() =>
  heroTransparent.value ? 'w-full bg-white' : 'w-full bg-sky-500'
)
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
