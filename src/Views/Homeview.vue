<template>
    <HeroSection />
    <Collection />
    <section class="testimonies">
        <div class="flex flex-col items-center justify-center space-y-4">
            <h5 class="text-2xl font-semibold mb-4">Client Testimonies</h5>
        </div>

        <div class="relative flex h-[280px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <!-- First Marquee -->
        <Marquee
            pauseOnHover
            class="[--duration:20s]"
        >
            <ReviewCard
            v-for="review in firstRow"
            :key="review.username"
            :img="review.img"
            :name="review.name"
            :username="review.username"
            :body="review.body"
            />
        </Marquee>
  
        <!-- Second Marquee (reverse) -->
        <Marquee
            reverse
            pauseOnHover
            class="[--duration:20s]"
        >
            <ReviewCard
            v-for="review in secondRow"
            :key="review.username"
            :img="review.img"
            :name="review.name"
            :username="review.username"
            :body="review.body"
            />
        </Marquee>
  
        <!-- Left Gradient -->
        <div
            class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
        ></div>
    
        <!-- Right Gradient -->
        <div
            class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
        ></div>
        </div>
    </section>
    <section class="newsletter border-2 mb-4 bg-background p-2">
      <div
        class="relative flex h-[550px] w-full flex-col items-center justify-center overflow-hidden rounded-lg lg:w-full md:w-full border border-red-500"
      >
        <p
          class="z-10 whitespace-pre-wrap text-center text-4xl font-medium tracking-tighter text-black dark:text-white"
        >
          Ripple Stuff built with inspira-ui...
        </p>
        <Ripple
          class="bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]"
          circle-class="border-[hsl(var(--primary))] bg-[#0000]/25 dark:bg-[#fff]/25 rounded-full"
        />
      </div>
    </section>
    <Footer />
</template>

<script setup>
import Collection from '@/components/Collection.vue';
import HeroSection from '@/components/HeroSection.vue';
import Footer from '@/components/Footer.vue';
import Ripple from '@/components/Ripple/Ripple.vue';

import { ref } from 'vue';
import Marquee from '@/components/Marquee.vue';
import ReviewCard from '@/components/ReviewCard.vue';
  // Reviews data
  const reviews = [
    {
      name: "Adekunle",
      username: "@ade",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Hamza",
      username: "@anonxi",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "John",
      username: "@john",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Jane",
      username: "@janegree",
      body: "Perfect Addition to My Home Office!",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      name: "Evan Yu",
      username: "@youuxi",
      body: "The materials feel premium, and the soft grey finish adds a touch of elegance to my workspace.",
      img: "https://avatar.vercel.sh/jenny",
    },
    {
      name: "James",
      username: "@james",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/james",
    },
  ];
  
  // Split reviews into two rows
  const firstRow = ref(reviews.slice(0, reviews.length / 2));
  const secondRow = ref(reviews.slice(reviews.length / 2));
</script>

<style scoped>
.testimonies {
    background-color: rgb(216, 216, 216, 0.281);
    padding-bottom: 2rem;
}
.newsletter {
    background-color: rgb(216, 216, 216, 0.281);
}
</style>