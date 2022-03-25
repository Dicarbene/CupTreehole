<script setup>
import { ref } from 'vue'
import AsideT from './components/AsideT.vue'
import FooterT from './components/FooterT.vue'
import SectionT from './components/SectionT.vue'
import NavT from './components/NavT.vue'


</script>

<template>
  <div class="dark:bg-slate-900 flex flex-col">
    <header class="bg-blur shadow-white-100 flex flex-row">
      <div class="mr-auto px-3 py-1 sm:px-6 lg:px-8">
        <h1
          class="text-3xl font-mono font-extrabold leading-loose text-slate-900 dark:text-white"
        >Treehole</h1>
      </div>
    </header>
    <main class="flex flex-row">
      <NavT />
      <SectionT />
      <AsideT />
    </main>
    <FooterT />
  </div>
</template>
