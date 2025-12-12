<template>
  <!-- BERANDA -->
    <HeroSection :video-src="heroVideo">
        <template #title>
            JELAJAHI PULAU BERAS BASAH, <br />
            SURGA TROPIS DI BONTANG
        </template>
        <template #paragraph1>
            Jelajahi keindahan ikonik Bontang di Pulau Beras Basah. Pulau ini menawarkan
            pasir putih bersih, laut sebening kristal, dan sebuah mercusuar megah.
            Tempat ideal untuk liburan singkat, menikmati suasana pantai, dan
            keindahan bawah laut.
        </template>
        <template #paragraph2>
            Perjalanan menuju pulau dapat ditempuh dengan perahu dari pelabuhan di
            Bontang. Cocok untuk keluarga, teman, maupun pecinta fotografi yang ingin
            menangkap pesona laut tropis.
        </template>
    </HeroSection>


    <!-- ====== BAGIAN BIAYA ====== -->
    <section
      class="relative w-full bg-fixed bg-cover bg-center"
      :style="{ backgroundImage: `url(${fasilitasHero})` }"
    >
      <div class="bg-sky-900/60">
        <div class="max-w-4xl mx-auto px-4 py-12 md:py-16 flex items-center justify-center">
          <div class="bg-black/55 text-white rounded-xl px-6 md:px-10 py-8 text-center shadow-2xl">
            <h3 class="text-2xl md:text-3xl font-bold uppercase mb-3">
              BIAYA KE PULAU BERAS BASAH
            </h3>
            <p class="text-sm md:text-base mb-3">
              Nikmati keindahan Pulau Beras Basah dengan menyewa perahu dari
              pelabuhan terdekat. Biaya dihitung per perahu (pulang–pergi) dan bisa
              dibagi bersama rombongan.
            </p>
            <p class="text-base md:text-lg font-semibold mb-1">
              Sewa Perahu Rombongan: Mulai dari Rp 550.000
            </p>
            <p class="text-[11px] md:text-xs text-slate-200">
              *Harga bervariasi tergantung kapasitas perahu dan negosiasi.
            </p>
          </div>
        </div>
      </div>
    </section>


    <!-- ====== SECTION FASILITAS ====== -->
    <PageSection id="fasilitas">
      <template #title>FASILITAS</template>
      <template #subtitle>Fasilitas yang tersedia di Pulau Beras Basah.</template>

      <FacilityGrid :list="fasilitas" />
    </PageSection>


    <!-- TENTANG -->
    <section
      id="tentang"
      class="bg-slate-900 bg-fixed bg-cover bg-center"
      :style="{ backgroundImage: `url(${album1})` }"
    >
      <!-- overlay gelap di atas gambar -->
      <div class="bg-slate-900/80">
        <PageSection id="">
          <template #title>
            <span class="text-white">
              <span class="text-amber-400">T</span>ENTANG
              <span class="text-amber-400"> P</span>ULAU
              <span class="text-amber-400"> B</span>ERAS
              <span class="text-amber-400"> B</span>ASAH
            </span>
          </template>

          <template #subtitle>
            <span class="text-white">
              Mengapa memilih Pulau Beras Basah sebagai tujuan liburan?
            </span>
          </template>

          <!-- KONTEN: VIDEO KIRI, TEKS KANAN -->
          <div class="flex flex-col lg:flex-row gap-8 items-center">
            <!-- VIDEO DI KIRI -->
            <div class="w-full lg:w-[45%]">
              <div
                class="bg-black/40 rounded-xl h-64 md:h-80 lg:h-[420px]
                       overflow-hidden border border-white/10 shadow-2xl"
              >
                <video
                  :src="aboutVideo"
                  autoplay
                  muted
                  loop
                  playsinline
                  class="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <!-- TEKS DI KANAN -->
            <div class="w-full lg:w-[55%] space-y-4 text-sm md:text-base text-slate-100 leading-relaxed">
              <p>
                Pulau Beras Basah adalah ikon wisata bahari di Bontang,
                Kalimantan Timur. Kombinasi pasir putih, air laut jernih, dan
                mercusuar menjadikannya destinasi tropis yang ideal.
              </p>
              <p>
                Beragam aktivitas bisa kamu lakukan: berenang, snorkeling,
                berjalan di tepian pantai, hingga berburu foto di sekitar
                mercusuar. Setiap sudut pulau menyajikan pemandangan yang fotogenik.
              </p>
              <p>
                Meskipun terpisah dari daratan utama, Pulau Beras Basah dilengkapi
                fasilitas dasar seperti area teduh, warung kecil, dan toilet yang
                cukup bersih untuk mendukung kenyamanan pengunjung.
              </p>
              <p>
                Datanglah bersama keluarga dan teman–teman, dan rasakan sendiri
                suasana pantai yang menenangkan ditemani semilir angin laut.
              </p>
            </div>
          </div>
        </PageSection>
      </div>
    </section>

  <!-- ALBUM -->
  <PageSection id="album">
    <template #title>ALBUM</template>
    <template #subtitle>Kumpulan momen terbaik di Pulau Beras Basah.</template>

    <div
      ref="albumGridRef"
      class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <AlbumItem
        v-for="(photo, index) in photos"
        :key="photo.id"
        :image="photo.src"
        :alt="photo.alt"
        @open="openLightbox(index)"
      />
    </div>

    <Lightbox
      v-if="activeIndex !== null"
      :image="photos[activeIndex].src"
      :index="activeIndex"
      :total="photos.length"
      @prev="prevPhoto"
      @next="nextPhoto"
      @close="activeIndex = null"
    />
  </PageSection>

  <!-- ULASAN -->
  <section id="ulasan" class="bg-slate-900 bg-[url('../assets/underwater-bg.jpg')] bg-cover bg-center bg-fixed">
    <div class="bg-slate-900/80">
      <PageSection id="">
        <template #title>
                <span class="text-white">
                    <span class="text-amber-400">U</span>LASAN
                </span>
        </template>
        <template #subtitle>
          <span class="text-white">
            Pendapat pengunjung yang sudah menikmati Pulau Beras Basah.
          </span>
        </template>

        <div ref="reviewGridRef" class="grid md:grid-cols-3 gap-6">
        <ReviewCard
          v-for="(review, index) in reviews"
          :key="review.id"
          :name="review.authorName"
          :text="review.text"
          :rating="review.rate"
          :avatar="userImg"
          :link="review.authorUrl"
          :google-logo="googleLogo"
          :index="index"
          :inView="reviewsInView"
        />
        </div>
      </PageSection>
    </div>
  </section>

  <!-- KONTAK -->
  <PageSection id="kontak">
    <template #title>KONTAK</template>
    <template #subtitle>Informasi untuk menghubungi pengelola wisata.</template>

    <!-- MAP -->
    <div class="mb-8">
      <MapSection />
    </div>

    <!-- FORM KONTAK -->
    <div class="max-w-3xl mx-auto mb-10">
      <h3 class="text-lg md:text-xl font-semibold text-slate-800 mb-3 text-center">
        Kirim Pesan ke Pengelola
      </h3>
      <p class="text-sm text-slate-600 mb-4 text-center max-w-xl mx-auto">
        Tinggalkan pertanyaan atau rencana kunjunganmu melalui formulir di bawah ini.
        Kami akan berusaha merespons secepat mungkin.
      </p>

      <form
        @submit.prevent="handleSubmit"
        novalidate
        class="bg-white rounded-2xl shadow-md p-5 md:p-6 space-y-4"
      >
        <!-- Nama -->
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1">
            Nama Lengkap
          </label>
          <input
            v-model="formNama"
            type="text"
            class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm md:text-base
                   focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
            placeholder="Masukkan nama kamu"
          />
        </div>
      
        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1">
            E-mail
          </label>
          <input
            v-model="formEmail"
            type="email"
            class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm md:text-base
                   focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
            placeholder="contoh@email.com"
          />
        </div>
      
        <!-- Pesan -->
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1">
            Pesan
          </label>
          <textarea
            v-model="formPesan"
            rows="4"
            class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm md:text-base
                   focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 resize-none"
            placeholder="Tulis pertanyaan atau rencana kunjunganmu di sini..."
          ></textarea>
        </div>
      
        <!-- Tombol -->
        <div class="flex justify-center">
          <button
            type="submit"
            class="inline-flex items-center justify-center px-6 py-2.5 rounded-full
                   bg-sky-600 text-white text-sm md:text-base font-semibold
                   hover:bg-sky-700 active:bg-sky-800
                   shadow-md hover:shadow-lg
                   transition-all duration-200"
          >
            Kirim Pesan
          </button>
        </div>
      
        <!-- Pesan sukses -->
        <p
          v-if="formSuccess"
          class="mt-2 text-sm text-emerald-700 text-center bg-emerald-50
                 border border-emerald-200 rounded-lg px-4 py-2"
        >
          Terima kasih, pesan kamu sudah terkirim.
        </p>
      </form>
    </div>

    <!-- KARTU KONTAK -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <ContactCard
        v-for="item in kontak"
        :key="item.id"
        :label="item.label"
        :value="item.value"
        :icon="item.icon"
        :href="item.href"
      />
    </div>
  </PageSection>

  <!-- PAGE BARU -->
    <section
      id="cots"
      class="bg-slate-900 bg-fixed bg-cover bg-center"
      :style="{ backgroundImage: `url(${album4})` }"
    >
      <div class="bg-slate-900/80">
        <PageSection id="">
          <template #title>
            <span class="text-white">
              <span class="text-amber-400">A</span>BOUT ME
            </span>
          </template>

          <div class="flex flex-col lg:flex-row gap-8 items-center">
            <div class="lg:w-[50%] text-sm md:text-base text-slate-100 leading-relaxed">
              <h1 class="text-2xl md:text-3xl font-bold uppercase mb-3">
                  Muhammad Ardian Saputra
              </h1>
              <h2 class="text-sm mb-4">
                  11211055 - INFORMATIKA - ITK
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                
              </p>
            </div>
              <div class="lg:w-[50%]">
              <div
                class="bg-black/40 rounded-xl h-64 md:h-80 lg:h-[300px]
                       overflow-hidden shadow-2xl"
              >
              <img :src="fPantai" :alt="name" class="object-cover w-full h-full" />
              </div>
            </div>
          </div>
          <FacilityGrid :list="cotscard" />
        </PageSection>
      </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

import HeroSection from '../components/HeroSection.vue'
import PageSection from '../components/PageSection.vue'
import FacilityGrid from '../components/FacilityGrid.vue'
import AlbumItem from '../components/AlbumItem.vue'
import Lightbox from '../components/Lightbox.vue'
import ReviewCard from '../components/ReviewCard.vue'
import ContactCard from '../components/ContactCard.vue'
import MapSection from '../components/MapSection.vue'

// ASSETS
// video
import heroVideo from '../assets/video/video2.mp4'
import aboutVideo from '../assets/video/video.mp4'
// foto
import fasilitasHero from '../assets/photo/fasilitas-hero.jpg'
import fMercusuar from '../assets/photo/fasilitas-mercusuar.jpg'
import fPantai from '../assets/photo/fasilitas-pantai.jpg'
import fSnorkeling from '../assets/photo/fasilitas-snorkeling.jpg'
import fSewaAlat from '../assets/photo/fasilitas-sewa-alat.jpg'
import fGazebo from '../assets/photo/fasilitas-gazebo.jpg'
import fWarung from '../assets/photo/fasilitas-warung.jpg'
import fToilet from '../assets/photo/fasilitas-toilet.jpg'
import fSpotFoto from '../assets/photo/fasilitas-spot-foto.jpg'

import album1 from '../assets/photo/album-1.jpg'
import album2 from '../assets/photo/album-2.jpg'
import album3 from '../assets/photo/album-3.jpg'
import album4 from '../assets/photo/album-4.jpg'
import album5 from '../assets/photo/album-5.jpg'
import album6 from '../assets/photo/album-6.jpg'

import userImg from '../assets/photo/user.png'
import googleLogo from '../assets/photo/google-img.png'

import iconAddress from '../assets/photo/icon-address.png'
import iconEmail from '../assets/photo/icon-email.png'
import iconPhone from '../assets/photo/icon-phone.png'
import iconInstagram from '../assets/photo/icon-instagram.png'

// DATA FASILITAS
const fasilitas = [
  {
    id: 1,
    title: 'Mercusuar Ikonik',
    description:
      'Mercusuar putih yang menjadi ikon pulau dan spot foto favorit pengunjung.',
    image: fMercusuar
  },
  {
    id: 2,
    title: 'Pasir Putih & Pantai',
    description:
      'Hamparan pasir putih lembut dan laut biru jernih yang menenangkan.',
    image: fPantai
  },
  {
    id: 3,
    title: 'Spot Snorkeling',
    description:
      'Nikmati keindahan bawah laut dengan terumbu karang dan ikan berwarna-warni.',
    image: fSnorkeling
  },
  {
    id: 4,
    title: 'Sewa Alat Snorkeling',
    description:
      'Tidak membawa peralatan? Tersedia penyewaan alat snorkeling di pulau.',
    image: fSewaAlat
  },
  {
    id: 5,
    title: 'Gazebo & Area Teduh',
    description:
      'Area untuk bersantai, makan bersama, dan berteduh dari terik matahari.',
    image: fGazebo
  },
  {
    id: 6,
    title: 'Warung & Makanan',
    description:
      'Tersedia warung kecil yang menjual makanan ringan dan minuman segar.',
    image: fWarung
  },
  {
    id: 7,
    title: 'Toilet Umum',
    description: 'Fasilitas toilet umum yang cukup bersih untuk pengunjung.',
    image: fToilet
  },
  {
    id: 8,
    title: 'Spot Foto Terbaik',
    description:
      'Berbagai sudut pulau yang instagramable untuk mengabadikan momen.',
    image: fSpotFoto
  }
]

//data card
const cotscard = ref([
  {
    id: 1,
    title: 'Ngoding',
    description:
      'Kadang Kadang Bisa, Kadang2 YTTA',
    image: album3
  },
  {
    id: 2,
    title: 'Bermain Game',
    description:
      'Selalu Bisa dalam kondisi apapun',
    image: album4
  },
    {
    id: 3,
    title: 'Game Developer',
    description:
      'Unity, Unreal Engine, Roblox Studio',
    image: album5
  }
])

// DATA ALBUM
const photos = [
  { id: 1, src: album1, alt: 'Pemandangan Pulau Beras Basah 1' },
  { id: 2, src: album2, alt: 'Pemandangan Pulau Beras Basah 2' },
  { id: 3, src: album3, alt: 'Pemandangan Pulau Beras Basah 3' },
  { id: 4, src: album4, alt: 'Pemandangan Pulau Beras Basah 4' },
  { id: 5, src: album5, alt: 'Pemandangan Pulau Beras Basah 5' },
  { id: 6, src: album6, alt: 'Pemandangan Pulau Beras Basah 6' }
]

const activeIndex = ref(null)

const openLightbox = (index) => {
  activeIndex.value = index
}

const prevPhoto = () => {
  if (activeIndex.value === null) return
  activeIndex.value =
    (activeIndex.value - 1 + photos.length) % photos.length
}

const nextPhoto = () => {
  if (activeIndex.value === null) return
  activeIndex.value = (activeIndex.value + 1) % photos.length
}

// DATA ULASAN
const reviews = [
  {
    id: 1,
    authorName: 'SHAFA TOURS Kalimantan Timur',
    text: 'Tempat yang indah, air laut yang sangat jernih, kalau sebelum dhuhur air surut, tempat wisata yang sangat cocok untuk berbagai acara, semoga ke depan makin banyak fasilitas yang bisa mendukung disini. Alhamdulillah... Aamiin yra',
    rate: 5,
    authorUrl: 'https://maps.app.goo.gl/g4HLkaUct5wojSeg9'
  },
  {
    id: 2,
    authorName: 'Tanoss Erpan',
    text: 'jangan ragu jangan bimbang ke bontang udah pasti senang, beras basah banyak banget bulu babinya guys sempat nangkap juga bintang laut kalo kesini wajib bawa kacawa mata renang biar bisa ala ala snorkling cuma pelabuhan kapal nya kotor banget banyak sampah ya ga mengecewakan lah beras basah akses air bersih itu ada cuman beli satu dirigen itu 5k cukup lah ya, saran kalo mau kesini vawa powerbank karena listrik disini bayar jadi kalo mau cas hp misalnya itu bayar 10k guys harus prepare banget lah pokoknya jangan modal nekat',
    rate: 4,
    authorUrl: 'https://maps.app.goo.gl/Q8cKQnfYbNwoYben7'
  },
  {
    id: 3,
    authorName: 'Evi',
    text: 'Bagus bangeeet,biota laut terlihat jelas dari jembatan,kyk aquarium tapi bentuk raksasa masyaAllah. Anakku udah persiapan bawa pancing dr rumah,mancing disana dapet juga ikannya. Walau memang ada titik2 banyak sampah,lautnya juga beberapa bersampah tapi tetap aku suka tempat ini. Hanya akses air bersih saja yg kurang,disana beli air bersih 5rb 1 tenki kecil.akses ke beras basah mesti naik kapal dulu krn letaknya di tengah laut ya. Tp worth it banget,gak nyesel jauh2 dari tabalong kalsel kesana',
    rate: 5,
    authorUrl: 'https://maps.app.goo.gl/XbBieW7BDX8EifXk8'
  }
]
// animasi ulasan (intersection)
const reviewGridRef = ref(null)
const reviewsInView = ref(false)
let reviewObserver

const formNama = ref('')
const formEmail = ref('')
const formPesan = ref('')
const formSuccess = ref(false)

const handleSubmit = () => {
  if (
    !formNama.value.trim() ||
    !formEmail.value.trim() ||
    !formPesan.value.trim()
  ) {
    alert('Harap isi nama, email, dan pesan terlebih dahulu.')
    return
  }

  formSuccess.value = true

  formNama.value = ''
  formEmail.value = ''
  formPesan.value = ''

  setTimeout(() => {
    formSuccess.value = false
  }, 4000)
}

// KONTAK
const kontak = [
  {
    id: 1,
    label: 'Alamat',
    value: 'Pulau Beras Basah, Bontang, Kalimantan Timur',
    icon: iconAddress,
    href: 'https://www.google.com/maps/search/Pulau+Beras+Basah'
  },
  {
    id: 2,
    label: 'E-mail',
    value: 'pulauberasbasah@gmail.com',
    icon: iconEmail,
    href: 'mailto:pulauberasbasah@gmail.com'
  },
  {
    id: 3,
    label: 'Telepon',
    value: '0812 0000 0000',
    icon: iconPhone,
    href: 'https://wa.me/6281200000000'
  },
  {
    id: 4,
    label: 'Instagram',
    value: '@wisata_pulau_berasbasah',
    icon: iconInstagram,
    href: 'https://instagram.com/@wisata_pulau_berasbasah'
  }
]

const albumGridRef = ref(null)
let albumObserver

onMounted(() => {
  // observer untuk grid ulasan
  reviewObserver = new IntersectionObserver(
    ([entry]) => {
      reviewsInView.value = entry.isIntersecting
    },
    { threshold: 0.2 }
  )
  if (reviewGridRef.value) reviewObserver.observe(reviewGridRef.value)

  albumObserver = new IntersectionObserver(
    ([entry]) => {
    },
    { threshold: 0.2 }
  )
  if (albumGridRef.value) albumObserver.observe(albumGridRef.value)
})

onBeforeUnmount(() => {
  if (reviewObserver && reviewGridRef.value)
    reviewObserver.unobserve(reviewGridRef.value)
  if (albumObserver && albumGridRef.value)
    albumObserver.unobserve(albumGridRef.value)
})
</script>
