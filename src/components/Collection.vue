<template>
    <section class="p-8 md:p-16 lg:p-32 bg-[#d8d8d848] border">
        <div class="flex justify-between mb-4 items-center">
        <h3 class="text-2xl">Featured Collections</h3>
        <RouterLink to="/collections" class="text-indigo-500">View all </RouterLink>
        </div>
        <div class="flex justify-center align-center flex-wrap gap-4">
        <article class="flex border basis-[200px] md:basis-[220px] max-w-[260px] justify-between flex-col gap-2 p-2 bg-[#ffffffe8] rounded-md" v-for="(item, index) in store.items" :key="item.id">
          <div class="flex items-center justify-center">
            <img src="@/assets/images/PIPER-C044-SIDE-FRONT4-200x300-removebg-preview.png" class="w-[120px]">
          </div>
          <!-- <hr> -->
            <div class="p-2 border flex justify-between bg-[#d8d8d848] rounded-md">
            <div>
                <h4>{{ item.name }}</h4>
                <h5 class="text-[#aca9a9]">${{ item.price }} USD</h5>
            </div>
            <button @click="store.addStuff(item)"
            class="w-[28px] h-[28px] border flex items-center justify-center rounded-md bg-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#202020" class="w-[18px] h-[18px] p-0">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </button>
            </div>
        </article>
        </div>
    </section>
</template>

<script setup>
import { Button } from '@/components/ui/button'
import { useStore } from '@/store/cartStore';
const store = useStore();

</script>

<style scoped>
.collections {
  padding: 1rem;
  background-color: #d8d8d848;
}
</style>