<script setup>
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  const backToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    })
  }
</script>
<template>
  <ul class="menu bg-base-100 w-24 rounded-box">
    <li>
      <a @click="backToTop()">Top</a>
    </li>
    <li>
      <a @click="backToBottom()">Bottom</a>
    </li>
  </ul>
</template>