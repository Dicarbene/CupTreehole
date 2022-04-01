<script setup>
import { usePostStore } from '../stores/posts'
import { faker } from '@faker-js/faker';
import { ref } from 'vue';
const postData = usePostStore;
const para = ref(faker.lorem.paragraph(3));
const title = ref(faker.lorem.sentence());
console.log(postData);
</script>
<template>
  <section class="p-5">
    <div class="card lg:card-side bg-base-200 card-compact shadow-xl">
      <figure class="p-2">
        <img src="https://api.lorem.space/image/album?w=200&h=200" alt="Album" />
      </figure>
      <div class="card-body container">
        <h2 class="card-title">{{ title }}</h2>
        <p class="text-left">{{ para }}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">More</button>
        </div>
      </div>
    </div>
  </section>
</template>

