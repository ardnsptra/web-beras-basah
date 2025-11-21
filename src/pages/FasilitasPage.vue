<template>
  <div>
    <!-- Banner biaya -->
    <section class="relative bg-slate-800 text-white">
      <!-- TODO: background image + gradient -->
      <div class="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 class="text-2xl md:text-3xl font-bold mb-3">
          Biaya ke Pulau Beras Basah
        </h1>
        <p class="text-sm md:text-base text-slate-100 mb-6">
          Nikmati keindahan Pulau Beras Basah dengan menyewa perahu dari pelabuhan terdekat.
        </p>
        <p class="font-semibold text-lg">Sewa Perahu Rombongan: Mulai dari Rp 550.000</p>
        <p class="text-xs mt-2 text-slate-200">
          *Harga bervariasi tergantung kapasitas perahu dan negosiasi.
        </p>
      </div>
    </section>

    <!-- Grid fasilitas -->
    <PageSection>
      <template #title>Fasilitas</template>
      <template #subtitle>
        Berbagai fasilitas tersedia untuk membuat liburanmu makin nyaman.
      </template>

      <div class="grid gap-6 md:grid-cols-3">
        <!-- Nanti bisa di-loop dari array -->
        <article
          v-for="item in fasilitas"
          :key="item.id"
          class="bg-slate-800 rounded-xl overflow-hidden shadow-md"
        >
          <div class="h-36 bg-slate-700">
            <!-- TODO: ganti dengan <img :src="item.image" /> -->
          </div>
          <div class="p-4">
            <h3 class="font-semibold mb-1">{{ item.title }}</h3>
            <p class="text-sm text-slate-300">
              {{ item.description }}
            </p>
          </div>
        </article>
      </div>
    </PageSection>
  </div>
</template>

<script setup>
import PageSection from '../components/PageSection.vue'

const fasilitas = [
  { id: 1, title: 'Mercusuar Ikonik', description: 'Spot terbaik menikmati pemandangan 360 derajat.' },
  { id: 2, title: 'Pasir Putih & Pantai', description: 'Area pantai luas untuk bermain dan bersantai.' },
  { id: 3, title: 'Spot Snorkeling', description: 'Nikmati keindahan bawah laut yang menakjubkan.' },
  { id: 4, title: 'Sewa Alat Snorkeling', description: 'Tersedia penyewaan alat untuk snorkeling.' },
  { id: 5, title: 'Gazebo & Area Teduh', description: 'Tempat beristirahat dengan suasana sejuk.' },
  { id: 6, title: 'Penyewaan Tenda', description: 'Cocok untuk rombongan besar dan acara.' },
  { id: 7, title: 'Toilet Umum', description: 'Fasilitas umum yang terjaga kebersihannya.' },
  { id: 8, title: 'Spot Foto Terbaik', description: 'Banyak spot instagramable di berbagai sudut pulau.' },
  { id: 9, title: 'Warung & Makanan', description: 'Nikmati aneka makanan ringan dan minuman segar.' }
]
</script>
