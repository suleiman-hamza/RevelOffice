<script setup>
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { shallowRef, ref, onMounted } from 'vue';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-vue-next';

const cartItems = ref([
    {
        itemName: 'Furniture Group G20 Gaming Chair',
        description: 'A very durable and convinient fashion item, the yeezy boot sneakers combines fashion and sports vibez to your shoe collection', 
        itemImg: 'src/assets/images/PIPER-C044-SIDE-FRONT4-200x300-removebg-preview.png',
        quantity: 1,
        price: 900
    },
    {
        itemName: 'Piper Ergonomics office chair',
        description: 'A very durable and convinient fashion item, the yeezy boot sneakers combines fashion and sports vibez to your shoe collection', 
        itemImg: 'src/assets/images/PIPER-C044-SIDE-FRONT4-200x300-removebg-preview.png',
        quantity: 1,
        price: 200
    },
    {
        itemName: 'New Adidas 350 Yeezy Boost Sneakers',
        description: 'A very durable and convinient fashion item, the yeezy boot sneakers combines fashion and sports vibez to your shoe collection', 
        itemImg: "src/assets/images/U574LGIL.webp",
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
            <div class="subtotal flex justify-between mb-4 bg-[#80808046] p-2 rounded-sm">
                <h2>Subtotal</h2>
                <h3>#Amount</h3>
            </div>
            <div class="summary-items border rounded-sm border-solid p-4 mb-4" v-for="(product, index) in cartItems" :key="index">
                <div class="flex gap-4 mb-2">
                    <img :src="product.itemImg" alt="some pics" width="100px" height="100px" class="aspect-square object-contain bg-[#80808046] rounded-md">
                    <div class="flex flex-col justify-between">
                        <p class="truniicate">{{ product.itemName }}</p>
                        <p class="font-medium">${{ product.price }}</p>
                        <div class="flex justify-between items-center">
                            <div class="flex gap-4 items-center">
                                <h3>Qty</h3>
                                <Select>
                                    <SelectTrigger class="w-18">
                                    <SelectValue placeholder="1" />
                                    </SelectTrigger>
                                    <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="1">1</SelectItem>
                                        <SelectItem value="2">2</SelectItem>
                                        <SelectItem value="3">3</SelectItem>
                                        <SelectItem value="4">4</SelectItem>
                                        <SelectItem value="5">5</SelectItem>
                                    </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button variant="secondary" class="self-start flex items-center p-2">
                                <Trash2 size="20" />
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                        <AccordionTrigger class="p-2 border bg-gray-50 rounded-sm">Description:</AccordionTrigger>
                        <AccordionContent class="p-2 border">
                            {{ product.description }}
                        </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
        <section class="order-summary">
            <div class="order-sum-head flex justify-between mb-4 bg-[#80808046] p-2 rounded-sm">
                <h3>Order Summary</h3>
                <h5>#Order Id</h5>
            </div>
            <div class="border p-4 text-[#7a7c81] flex flex-col gap-3 rounded-sm">
                <span class="subtotal flex justify-between">
                    <p>Subtotal</p>
                    <h4>$1200</h4>
                </span>
                <span class="shipping-charge flex justify-between">
                    <p>Shipping Charge</p>
                    <h4>$25.00</h4>
                </span>
                <span class="tax flex justify-between">
                    <p>Tax</p>
                    <h4>$12.99</h4>
                </span>
                <span class="total flex justify-between">
                    <p>Total</p>
                    <h4>$1560</h4>
                </span>
                <Button class="w-full">Proceed to Payment</Button>
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
    h1 {
        font-size: 1.125rem;
    }
}
/*multiline ellipsis: truncates text after multiplr lines, should work in modern browsers. src: deepseek ai*/
.truniicate {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    text-overflow: ellipsis;
    width: 100%;
}
</style> 