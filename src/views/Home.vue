<script setup>
import { ref } from 'vue'
import AsideT from '../components/AsideT.vue'
import FooterT from '../components/FooterT.vue'
import SectionT from '../components/SectionT.vue'
import NavT from '../components/NavT.vue'
import HeaderT from '../components/HeaderT.vue'
import testView from '../components/testView.vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter();
const route = useRoute();
const toBoard = () =>{
  router.push('/board');
}
</script>

<template>
  <main class="hero from-primary to-secondary bg-gradient-to-br text-primary-content min-h-screen h-auto">
    <div class="hero-content text-center text-neutral">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
      <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary" @click="toBoard()">Get Started</button>
    </div>
  </div>
  </main>
  
  <FooterT />
</template>
