<script setup>
import { ref } from 'vue'
import AsideT from '../components/AsideT.vue'
import FooterT from '../components/FooterT.vue'
import SectionT from '../components/SectionT.vue'
import NavT from '../components/NavT.vue'
import HeaderT from '../components/HeaderT.vue'
import testView from '../components/testView.vue'
</script>

<template>
  <main class="hero min-h-screen bg-base-300">
    <div class="hero-content mx-auto max-w-md text-center md:max-w-full">
      <NavT />
      <SectionT />
      <AsideT />
    </div>
  </main>
  <FooterT />
</template>
