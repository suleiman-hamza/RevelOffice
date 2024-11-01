<script setup>
import Header from '@/components/Header.vue'
import HeroSection from '@/components/HeroSection.vue'
import { Button } from '@/components/ui/button'
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

function addCart(index) {
  console.log(index)
}
</script>

<template>
    <Header />
  <main class="grid grid-cols-1 min-h-screen auto-rows-auto">
    <HeroSection />
  </main>
  <section class="collections">
    <div class="title">
      <h3>Our Collections</h3>
      <hr class="hre">
    </div>
    <div class="all-collection">
      <article class="collection" v-for="(item, index) in collections">
        <img src="@/assets/images/PIPER-C044-SIDE-FRONT4-200x300-removebg-preview.png" height="300" width="200">
        <hr>
        <div class="detail">
          <div>
            <h4>{{ item.name }}</h4>
            <h5>{{ item.price }} USD</h5>
          </div>
          <Button @click="addCart(index)">Cart</Button>
        </div>
      </article>
      <RouterLink to="/test" >Test Route</RouterLink>
      <RouterView />
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
  background-color: rgb(216, 216, 216, 0.281);
}

.collections {
  padding: 1rem;
  background-color: rgb(216, 216, 216, 0.281);
}
.title {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  h3 {
    white-space: nowrap;
  }

  .hre {
    width: 100%;
    height: 2px;
    border: none;
    background-color: grey;
    border-radius: 10px;
}
}

.collection {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background-color: #ffffffe8;
  max-width: 400px;
  margin-inline: auto;
  margin-bottom: 1rem;
  border-radius: 10px;

  img {
    margin-inline: auto;
  }
}
.detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

hr {
    background-color: brown;
    height: 2px;
    width: 100%;
}
</style>
