<script setup lang="ts">
import { ref } from 'vue';
const count = ref(45);
</script>

<template>
    <section class="p-4">
        <h2 class="text-sky-500 text-2xl mb-4">Features</h2>
        <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam adipisci officia ipsam possimus magnam velit, eveniet expedita cumque minus earum repellat praesentium quisquam, non exercitationem? Ducimus quibusdam voluptate quidem cupiditate!</p>
        <div class="border-2 border-indigo-700 p-4 flex gap-4 flex-col sm:flex-row max-w-[750px] mx-auto">
            <div class="border p-4">
                <h3>Card One</h3>
                <p>How do think they found out, i will do anything if the reports comes out.</p>
                <p>How do think they found out, i will do anything if the reports comes out.</p>
                <p>How do think they found out, i will do anything if the reports comes out.</p>
            </div>
            <div class="border p-4">
                <h3>Card One</h3>
                <p>How do think they found out, i will do anything if the reports comes out.</p>
                <p>How do think they found out, i will do anything if the reports comes out.</p>
                <p>How do think they found out, i will do anything if the reports comes out.</p>
            </div>
            <div class="border p-4">
                <h3>Card One</h3>
                <p>How do think they found out, i will do anything if the reports comes out.</p>
                <p>How do think they found out, i will do anything if the reports comes out.</p>
                <p>How do think they found out, i will do anything if the reports comes out.</p>
            </div>
        </div>
    </section>
</template>