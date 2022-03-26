<script setup>
import HeaderT from './components/HeaderT.vue'
</script>
<template>
  <div class="dark:bg-slate-900 flex flex-col">
    <headerT />
    <router-view></router-view>
  </div>
</template>
