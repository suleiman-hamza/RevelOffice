<script setup>
import { useStore } from '@/store/cartStore';
const store = useStore();
</script>

<template>
    <section>
      <h2 class="headline">Elevate your seating experience, designed for ultimate comfort and lifestyle.{{ store.count }}</h2>
    <img src="@/assets/images/PIPER-C044-SIDE-FRONT4-200x300-removebg-preview.png" alt="">
    </section>
</template>
<style scoped>
section {
    /* border: 1px solid magenta; */
    padding-top: 4.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(216, 216, 216, 0.281);
    height: 100vh;
}
.headline {
  font-size: larger;
  text-align: center;
  margin-block: 2rem;
}
</style>