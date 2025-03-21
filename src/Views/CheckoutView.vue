<script setup>
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { shallowRef, ref, onMounted } from 'vue';
import ShippingInfo from '@/components/ShippingInfo.vue';
import Paypal from '@/components/Paypal.vue';
import Stripe from '@/components/Stripe.vue';
import Creditcard from '@/components/Creditcard.vue';

const paypal = shallowRef(Paypal)
const stripe = shallowRef(Stripe)
const credit = shallowRef(Creditcard)
const activeComponent = shallowRef(undefined) //check this out

const cartItems = ref([
    {
        itemName: 'New Adidas 350 Yeezy Boost Sneakers',
        description: 'A very durable and convinient fashion item, the yeezy boot sneakers combines fashion and sports vibez to your shoe collection', 
        itemImg: './src/assets/images/PIPER-C044-SIDE-FRONT4-200x300-removebg-preview.png',
        quantity: 1,
        price: 200
    },
    {
        itemName: 'New Adidas 350 Yeezy Boost Sneakers',
        description: 'A very durable and convinient fashion item, the yeezy boot sneakers combines fashion and sports vibez to your shoe collection', 
        itemImg: './src/assets/images/PIPER-C044-SIDE-FRONT4-200x300-removebg-preview.png',
        quantity: 1,
        price: 200
    },
    {
        itemName: 'New Adidas 350 Yeezy Boost Sneakers',
        description: 'A very durable and convinient fashion item, the yeezy boot sneakers combines fashion and sports vibez to your shoe collection', 
        itemImg: "./src/assets/images/U574LGIL.webp",
        quantity: 1,
        price: 600
    }
])


</script>
<template>
    <main class="cart-summary">
        <div class="ghost-elem"></div>
        <h1 class="mb-4">Cart Summary</h1>

        <section class="cart-summary-main">
            <div class="subtotal flex justify-between mb-4 border-2 border-solid bg-[#80808046] p-2">
                <h2>Subtotal</h2>
                <h3>#Amount</h3>
            </div>
            <div class="summary-items border-2 border-solid" v-for="(product, index) in cartItems" :key="index">
                <!-- <img :src="" alt="img" width="100px" height="100px"> -->
                <div class="flex ">
                    <img :src=product.itemImg alt="some pics" width="100px" height="100px">
                    <div class="">
                        <p>{{ product.itemName }}</p>
                        <p>{{ index }}</p>
                    </div>
                </div>
                <div class="p-2">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                        <AccordionTrigger>Description:</AccordionTrigger>
                        <AccordionContent>
                            {{ product.description }}
                        </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <!-- <p>Description: {{ product.description }}</p> -->
            </div>
        </section>
    </main>
</template>

<style scoped>
.ghost-elem {
    width: 100%;
    height: 60px;
}
.cart-summary {
    border: 1px solid red;
    h1 {
        font-size: 1.125rem;
    }
}

</style> 