<template>
  <div class="space-y-4">
    <!-- Tulisan di atas peta -->
    <p class="text-sm md:text-base text-slate-600 text-center">
      Pulau Beras Basah terletak di lepas pantai Bontang, Kalimantan Timur. 
      Gunakan peta di bawah ini untuk melihat lokasi dan rute perjalanan terbaik.
    </p>


    <!-- Peta -->
    <div class="rounded-xl overflow-hidden shadow-lg">
      <iframe
        width="100%"
        height="380"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        class="w-full"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6222.950451747736!2d117.55789360442623!3d0.06330981673835316!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x320a750ec20daeed%3A0xab8b758035d7562b!2sPulau%20Beras%20Basah!5e1!3m2!1sid!2sid!4v1764252336349!5m2!1sid!2sid"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
</script>
