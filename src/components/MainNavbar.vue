<template>
  <header class="bg-slate-950 text-slate-100 border-b border-slate-800">
    <div class="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
      <RouterLink to="/" class="font-semibold tracking-wide">
        Wisata <span class="text-sky-400">Pulau Beras Basah</span>
      </RouterLink>

      <nav>
        <ul class="flex gap-6 text-sm uppercase tracking-wide">
          <li>
            <RouterLink
              to="/"
              class="hover:text-sky-400"
              active-class="text-sky-400 border-b border-sky-400 pb-1"
              exact
            >
              Beranda
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/fasilitas"
              class="hover:text-sky-400"
              active-class="text-sky-400 border-b border-sky-400 pb-1"
            >
              Fasilitas
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/tentang"
              class="hover:text-sky-400"
              active-class="text-sky-400 border-b border-sky-400 pb-1"
            >
              Tentang
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/album"
              class="hover:text-sky-400"
              active-class="text-sky-400 border-b border-sky-400 pb-1"
            >
              Album
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/ulasan"
              class="hover:text-sky-400"
              active-class="text-sky-400 border-b border-sky-400 pb-1"
            >
              Ulasan
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/kontak"
              class="hover:text-sky-400"
              active-class="text-sky-400 border-b border-sky-400 pb-1"
            >
              Kontak
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
