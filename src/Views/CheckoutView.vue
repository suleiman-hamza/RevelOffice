<script setup>
import { shallowRef, ref, onMounted } from 'vue';
import ShippingInfo from '@/components/ShippingInfo.vue';
import Paypal from '@/components/Paypal.vue';
import Stripe from '@/components/Stripe.vue';
import Creditcard from '@/components/Creditcard.vue';

onMounted(() => {
    const storedData = localStorage.getItem('submit');
    if (storedData) {
        formData = JSON.parse(storedData);
        formFilled.value = true;
    }
})

const formFilled = ref(false)
let formData = ref()
const paypal = shallowRef(Paypal)
const stripe = shallowRef(Stripe)
const credit = shallowRef(Creditcard)
const activeComponent = shallowRef(undefined) //check this out

function updated() {
    formFilled.value = true;
    console.log('something')
}

</script>
<template>
    <main class="checkout-main">
        <section class="shipping-info">
            <h2 class="mb-4">Shipping Info</h2>
            <ShippingInfo v-if="formFilled === false" @update="updated"/>
            <div class="showItem" v-if="formFilled === true">
                <p>The styff {{ formData.value }}</p>
                <!-- <p>{{ formData.lastName }}</p>
                <p>{{ formData.email }}</p>
                <p>{{ formData.address }}</p>
                <p>{{ formData.phone }}</p>
                <p>{{ formData.postalCode }}</p>
                <p>{{ formData.country }}</p> -->
            </div>
        </section>
        <section class="pay">
            <div class="payment-option space-y-2">
                <fieldset>
                    <legend>Choose Payment Method</legend>
                    <label for="paypal">
                        <span>PayPal</span>
                        <input type="radio" name="payment-option" id="paypal" :value="paypal" v-model="activeComponent" />
                    </label>
                    <label for="creditcard">
                        <span>Credit Card</span>
                        <input type="radio" name="payment-option" id="creditcard" :value="credit" v-model="activeComponent"/>
                    </label>
                    <label for="stripe">
                        <span>Stripe</span>
                        <input type="radio" name="payment-option" id="stripe" :value="stripe" v-model="activeComponent"/>
                    </label>
                </fieldset>
                <div class="mt-4 border-2 border-sky-500 px-4 py-4">
                    <component :is="activeComponent" />
                    <!-- <component :is="stripe" /> -->
                </div>
            </div>
        </section>
        <!-- <h4>Coming Soon</h4>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
        </svg> -->
    </main>
</template>

<style scoped>
    .checkout-main {
        /* display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh; */
        padding-top: 5rem;
}
/* .shipping-info > h2 {
    margin-bottom: 1rem;
} */
.payment-option label {
    border: 1px solid red;
    padding: 0.5rem;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
}
fieldset {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.2rem
}
.payment-section {
    margin-top: 1rem;
    border: 1px solid grey;
    border-radius: 10px;
    padding: 1rem
}
</style> 