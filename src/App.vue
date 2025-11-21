<template>
  <div class="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
    <MainNavbar />

    <main class="flex-1">
      <RouterView />
    </main>

    <MainFooter />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import MainNavbar from './components/MainNavbar.vue'
import MainFooter from './components/MainFooter.vue'
</script>
