<template>
  <div id="main">
    <div class="container">
      <Navbar />
      <router-view />
      <p>Hi, i'm {{ store.$state.name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import { useMainStore } from '@/store/main';

const store = useMainStore();
</script>

<style scoped lang="scss">
  #main {
    height: 100vh;
    width: 100vw;
    background-image: radial-gradient($background-1 50%, $background-2 100%);
  }
</style>
