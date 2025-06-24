<script setup lang="ts">
// import { MapPinHouse } from 'lucide-vue-next';
</script>

<template>
    <footer class="p-6 md:p-16">
        <section class="text-center mb-5">
            <h2 class="text-xl font-bold mb-2">
                Revel Office
            </h2>
            <p>Your one stop destination for quality workspace equipments</p>
        </section>
        <hr class="w-[200px] mx-auto mb-6">
        <section class="max-w-[500px] flex flex-row gap-12 mb-5">
            <div>
                <h4 class="font-bold text-[#aca9a9] underline">Menu</h4>
                <ul class="flex flex-col gap-2">
                    <li><RouterLink to="/supa">Supa DB Test</RouterLink></li>
                    <li>Collections</li>
                    <li>About Us</li>
                    <li>Payments</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <h4 class="font-bold text-[#aca9a9] underline">More info</h4>
                <ul class="flex flex-col gap-2">
                    <li>FAQ</li>
                    <li>Return Policy</li>
                    <li>Customer Support</li>
                    <li>Return Policy</li>
                </ul>
            </div>
        </section>
        <section class="mb-5">
            <div class="flex gap-2 items-start">
                <span>
                    <h5 class="font-semibold text-[#aca9a9]">Corporate Office:</h5>
                    <p>Suit 3, 207 Regent Street <br> London, W18 3HH, UK</p>
                </span>
            </div>
            <div class="mt-4 flex gap-2 items-start">
                <span>
                    <h5 class="font-semibold text-[#aca9a9]">Operations Office:</h5>
                    <p>Flat 7, Plot 1, 74 Patience Offiong Street, <br> Katampe, Abuja, Nigeria</p>
                </span>
            </div>
        </section>
        <hr>
        <section>
            <p class="mt-1 text-center">Copyright @ 2025, All right reserved.</p>
        </section>
    </footer>
</template>