<script setup lang="ts">
import { ref } from 'vue';
import { Building, BedDouble, Gem, Route, ChevronsRight } from 'lucide-vue-next';
const count = ref(45);
</script>

<template>
    <section class="p-4 sm:p-8">
        <h2 class="text-sky-500 text-2xl mb-4 text-center">Features</h2>
        <p class="mb-8 text-center max-w-[400px] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam adipisci official</p>

        <div class="flex gap-4 flex-col sm:flex-row max-w-[750px] mx-auto flex-wrap justify-center items-center sm:items-stretch">
            <div class="border p-4 flex flex-col max-w-[300px] w-full rounded-md h-[350px] bg-zinc-100/90">
                <span class="bg-teal-100 rounded-md flex size-min p-2 mb-2">
                    <Building />
                </span>
                <h3 class="mb-2 text-2xl">Comfortable</h3>
                <p class="mb-auto">How do think they found out, i will do anything if the reports comes How do think they found out, i will do anything if the reports comes out.</p>
                <a href="/" class="border mt-auto size-max flex items-center gap-1" alt="some link">
                    <span>Some link</span>
                    <ChevronsRight />
                </a>
            </div>
             <div class="border p-4 flex flex-col max-w-[300px] w-full rounded-md h-[350px] bg-zinc-100/90">
                <span class="bg-pink-100 rounded-md flex size-min p-2 mb-2">
                    <BedDouble />
                </span>
                <h3 class="mb-2 text-2xl">Accomodative</h3>
                <p>How do think they found out, i will do anything if the reports comes How do think they found out, i will do anything if the reports comes out.</p>
                <a href="/" class="border mt-auto size-max flex items-center gap-1" alt="some link">
                    <span>Some link</span>
                    <ChevronsRight />
                </a>
            </div>
            <div class="border p-4 flex flex-col max-w-[300px] w-full rounded-md h-[350px] bg-zinc-100/90">
                <span class="bg-sky-100 rounded-md flex size-min p-2 mb-2">
                    <Gem />
                </span>
                <h3 class="mb-2 text-2xl">Luxury</h3>
                <p>How do think they found out, i will do anything if the reports comes How do think they found out, i will do anything if the reports comes out.</p>
                <a href="/" class="border mt-auto size-max flex items-center gap-1" alt="some link">
                    <span>Some link</span>
                    <ChevronsRight />
                </a>
            </div>
            <div class="border p-4 flex flex-col max-w-[300px] w-full rounded-md h-[350px] bg-zinc-100/90">
                <span class="bg-indigo-100 rounded-md flex size-min p-2 mb-2">
                    <Route />
                </span>
                <h3 class="mb-2 text-2xl">Flexible</h3>
                <p>How do think they found out, i will do anything if the reports comes How do think they found out, i will do anything if the reports comes out.</p>
                <a href="/" class="border mt-auto size-max flex items-center gap-1" alt="some link">
                    <span>Some link</span>
                    <ChevronsRight />
                </a>
            </div>
        </div>
    </section>
</template>