<template>
  <section class="max-w-6xl mx-auto px-6 py-10">
    <header class="text-center mb-8">
      <h2 class="text-2xl md:text-3xl font-bold tracking-wide">
        <slot name="title" />
      </h2>
      <p class="text-sm md:text-base text-slate-300 mt-2">
        <slot name="subtitle" />
      </p>
    </header>

    <slot />
  </section>
</template>

<script setup>
</script>
