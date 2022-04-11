<script setup>
import { ref,Teleport } from "vue";
const open = ref(false);
</script>
<template>
  <div class="hero min-h-screen">
    <div class="mx-auto max-w-md md:max-w-full">
      <button class="btn" @click="open = true">Open Modal</button>

      <Teleport to="body">
        <div v-if="open" class="modal">
          <p>Hello from the modal!</p>
          <button @click="open = false">Close</button>
        </div>
      </Teleport>
    </div>
  </div>
</template>
