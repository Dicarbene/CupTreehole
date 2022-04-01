<script setup>
import HeaderT from './components/HeaderT.vue'
</script>
<template>
  <div data-theme="cupcake" class="flex flex-col">
    <headerT />
    <router-view></router-view>
  </div>
</template>
