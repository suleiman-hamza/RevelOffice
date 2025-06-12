<template>
  <HeroSection />
  <Collection />
  <!--Ripple was added here from inspira ui-->
  <section class="newsletter bg-background p-4">
    <div
      class="relative flex h-[450px] md:h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-lg lg:w-full md:w-full">
      <p class="mb-4 whitespace-pre-wrap text-center text-4xl font-medium tracking-tighter text-black dark:text-white">
        Build your ideal workspace today. <br> Let's do it.
      </p>
      <div>
        <ul class="flex gap-2 p-4 flex-wrap justify-center">
          <li class="text-red-400 border-dashed border border-indigo-950 rounded-md p-1">Modern</li>
          <li class="text-indigo-400 border-dashed border border-indigo-950 rounded-md p-1">Minimalist</li>
          <li class="text-emerald-500 border-dashed border border-indigo-950 rounded-md p-1">Classic</li>
          <li class="text-rose-700 border-dashed border border-indigo-950 rounded-md p-1">Industrial</li>
          <li class="text-yellow-900 border-dashed border border-indigo-950 rounded-md p-1">Interior</li>
        </ul>
      </div>
      <Ripple class="bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)] border-2 rounded-md z-[-1]"
        circle-class="border-[hsl(var(--primary))] bg-[#0000]/25 dark:bg-[#fff]/25 rounded-full" />
    </div>
  </section>
  <Testimonies />
  <Footer />
</template>

<script setup>
import Collection from '@/components/Collection.vue';
import HeroSection from '@/components/HeroSection.vue';
import Footer from '@/components/Footer.vue';
import Ripple from '@/components/Ripple/Ripple.vue';
import Testimonies from '@/components/Testimonies.vue';
</script>

<style scoped>
.newsletter {
  /* border: 1px solid red; */
  background-color: rgb(216, 216, 216, 0.281);
}
</style>