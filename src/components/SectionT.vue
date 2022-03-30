<script setup>
import { usePostStore } from '../stores/posts'
import { faker } from '@faker-js/faker';
import { ref } from 'vue';
const postData = usePostStore;
const para = ref(faker.lorem.paragraph(2));
const title = ref(faker.lorem.sentence());
console.log(postData);
</script>
<template>
  <section class="bg-base-100">
    <div class="card lg:card-side bg-base-300 shadow-xl">
      <figure>
        <img src="https://api.lorem.space/image/album?w=200&h=200" alt="Album" />
      </figure>
      <div class="card-body container flex-wrap">
        <h2 class="card-title">{{ title }}</h2>
        <p>{{ para }}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">More</button>
        </div>
      </div>
    </div>
  </section>
</template>
