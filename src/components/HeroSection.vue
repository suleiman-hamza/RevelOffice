<script setup>
import HeroImageSlide from './HeroImageSlide.vue';
import image1 from '@/assets/images/image-1.jpg';
import image2 from '@/assets/images/image-2.jpg';

</script>

<template>
    <section>
      <HeroImageSlide
        :images='[image1, image2]'
        :autoplay="true"
        :enter-active-class="'transition-all duration-1000 ease-in-out'"
        :leave-active-class="'transition-all duration-1000 ease-in-out'"
        :enter-from-class="'opacity-0 scale-95'"
        :leave-to-class="'opacity-0 scale-95'">
        :perspective="'1000px'"
      <p>Elevate your working experience, designed for ultimate comfort and lifestyle.</p>
      </HeroImageSlide>
      <!-- <div class="p-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
          <path fill-rule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd" />
        </svg>

        <h2 class="headline">Elevate your working experience, designed for ultimate comfort and lifestyle.</h2>
    
       </div> -->
    </section>
</template>
<style scoped>

.headline {
  font-size: clamp(1.75rem, 0.3585rem + 3.0189vw, 3rem);
  text-align: center;
  margin-block: 1rem;
  max-width: 450px;
}
</style>