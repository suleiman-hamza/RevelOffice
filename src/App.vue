<script setup>
import Header from '@/components/Header.vue'
import { Toaster } from '@/components/ui/sonner'
import HeroSection from '@/components/HeroSection.vue'
import Collection from './components/Collection.vue';
</script>

<template>
    <Header />
    <RouterView />
    <Toaster />
</template>

<style scoped>
main {
  padding: 1rem;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.grid {
  grid-template-rows: min-content;
  background-color: rgb(216, 216, 216, 0.281);
}


</style>
