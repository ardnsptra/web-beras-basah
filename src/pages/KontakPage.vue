<template>
  <PageSection>
    <template #title>Kontak</template>
    <template #subtitle>Hubungi kami untuk informasi lebih lanjut.</template>

    <!-- Map -->
    <div class="mb-8 rounded-xl overflow-hidden shadow-md h-72 bg-slate-800">
      <!-- TODO: ganti iframe map / gambar map -->
    </div>

    <!-- Cards kontak -->
    <div class="grid gap-6 md:grid-cols-4 text-sm">
      <div
        v-for="item in kontakItems"
        :key="item.id"
        class="bg-white text-slate-800 rounded-xl shadow-md p-4 text-center"
      >
        <h3 class="font-semibold mb-2">{{ item.label }}</h3>
        <p class="text-sm">
          <a :href="item.href" class="text-sky-600 hover:underline">
            {{ item.value }}
          </a>
        </p>
      </div>
    </div>
  </PageSection>
</template>

<script setup>
import PageSection from '../components/PageSection.vue'


const kontakItems = [
  {
    id: 1,
    label: 'Alamat',
    value: 'Bontang Laut, Kota Bontang, Kalimantan Timur',
    href: '#'
  },
  {
    id: 2,
    label: 'E-mail',
    value: 'pulauberasbasah@gmail.com',
    href: 'mailto:pulauberasbasah@gmail.com'
  },
  {
    id: 3,
    label: 'Telepon',
    value: '0812 111 2222',
    href: 'tel:08121112222'
  },
  {
    id: 4,
    label: 'Instagram',
    value: '@wisatapulauberasbasah_bontang',
    href: 'https://instagram.com'
  }
]
</script>
