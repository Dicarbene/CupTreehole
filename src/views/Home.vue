<script setup>
import { ref } from 'vue'
import AsideT from '../components/AsideT.vue'
import FooterT from '../components/FooterT.vue'
import SectionT from '../components/SectionT.vue'
import NavT from '../components/NavT.vue'
import HeaderT from '../components/HeaderT.vue'

</script>

<template>
  <main class="flex flex-row">
    <NavT />
    <SectionT />
    <AsideT />
  </main>
  <FooterT />
</template>
