<script setup>
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

<template>
    <section class="testimonies border-y-stone-200 border border-dashed">
        <div class="flex flex-col items-center justify-center py-4">
            <h5 class="text-2xl font-semibold mb-4">Client Testimonies</h5>
        </div>

        <!--Marque was added here from inspira ui-->
        <div class="relative flex h-[280px] w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
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
</template>

<style lang="css" scoped>
.testimonies {
    background-color: rgb(216, 216, 216, 0.281);
    padding-bottom: 2rem;
}
</style>