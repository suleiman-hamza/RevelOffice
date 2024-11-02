import { defineStore } from 'pinia'
import { ref } from 'vue'

export const cartStore = defineStore('cart', () => {
    const price = ref(800);

    return price
})