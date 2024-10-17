<script setup>
import Header from '@/components/Header.vue'
import HeroSection from '@/components/HeroSection.vue'
import { ref } from 'vue';

const collections = ref([
  {
    name: 'Knoll reGeneration',
    price: 480,
    id: 434
  },
  {
    name: 'Furniture Group G20',
    price: 136,
    id: 442
  },
  {
    name: 'Gaming ErgoChair2',
    price: 480,
    id: 434
  }
])
</script>

<template>
  <main class="grid grid-cols-1 min-h-screen auto-rows-auto">
    <Header />
    <HeroSection />
  </main>
  <section class="collections">
    <div class="title">
      <h3>Our Collections</h3>
      <hr>
    </div>
    <div class="all-collection">
      <article class="collection" v-for="(item, index) in collections">
        <img src="@/assets/images/PIPER-C044-SIDE-FRONT4-200x300-removebg-preview.png" alt="">
        <hr>
        <div class="detail">
          <h4>{{ item.name }}</h4>
          <h5>{{ item.price }} USD</h5>
          <button>Cart</button>
        </div>
      </article>
    </div>
  </section>
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
  background-color: rgba(216, 216, 216, 0.281);
}

.collections {
  background-color: rgba(216, 216, 216, 0.281);
  padding: 1rem;
}
.title {
  display: flex;

  
}
hr {
    min-width: 60%;
    height: 4px;
  }
</style>
