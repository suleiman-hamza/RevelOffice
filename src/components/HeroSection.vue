<script setup>
import HeroImageSlide from './HeroImageSlide.vue';
import image1 from '@/assets/images/image-1.jpg';
import image2 from '@/assets/images/image-2.jpg';
import image3 from '@/assets/images/image-3.jpg';
import image4 from '@/assets/images/image-4.jpg';
import image5 from '@/assets/images/image-5.jpg';

</script>

<template>
  <section class="h-screen">
    <div class="relative h-full">
      <HeroImageSlide :images="[image1, image2, image3, image4, image5, image5]" :autoplay="4000">
        <div
          class="flex size-full items-end justify-center bg-gradient-to-b from-transparent via-transparent to-black/80 p-8">
          <div class="max-w-prose text-center">
            <h1 class="mb-8 text-5xl text-white max-md:text-2xl">
              Elevate your working experience, designed for ultimate comfort and lifestyle.
            </h1>
            <button
              class="rounded-full border border-emerald-500/20 bg-emerald-300/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              Join Now
            </button>
          </div>
        </div>
      </HeroImageSlide>
    </div>
  </section>
  <!-- <h2 class="headline">Elevate your working experience, designed for ultimate comfort and lifestyle.</h2> -->
</template>
<style scoped>
.headline {
  font-size: clamp(1.75rem, 0.3585rem + 3.0189vw, 3rem);
  text-align: center;
  margin-block: 1rem;
  max-width: 450px;
}
</style>