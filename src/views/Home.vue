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
/*

    <svg
      class="fill-secondary col-start-1 row-start-1 h-full w-full"
      width="1600"
      height="1000"
      viewBox="0 0 1600 595"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    > 
      <path
        d="M0 338L53.3 349.2C106.7 360.3 213.3 382.7 320 393.8C426.7 405 533.3 405 640 359.3C746.7 313.7 853.3 222.3 960 189.2C1066.7 156 1173.3 181 1280 159.2C1386.7 137.3 1493.3 68.7 1546.7 34.3L1600 0V595H1546.7C1493.3 595 1386.7 595 1280 595C1173.3 595 1066.7 595 960 595C853.3 595 746.7 595 640 595C533.3 595 426.7 595 320 595C213.3 595 106.7 595 53.3 595H0V338Z"
      />
    </svg>
*/
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
