<template>
    <nav class="nav-body">
        <Sheet>
                <SheetTrigger as-child>
                    <Button class="flex-initial btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#202020" width="18px" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    </Button>
                </SheetTrigger>
            <SheetContent>
            <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                    <div>
                        <h2 class="cart-preview">Cart Preview</h2>
                        <table>
                            <thead>
                                <tr class="t-head">
                                    <th>Product</th>
                                    <th>Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in store.cart">
                                    <td>{{ item.name }} </td>
                                    <td>{{ item.quantity }} </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="total">
                        <div><span>Items: {{ store.total }}</span></div>
                        <span>Total: ${{ store.totalcart }}</span>
                    </div>
                    <div class="checkout">
                        <Button @click="checkoutRoute" class="check-btn">
                            <span>Checkout</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16px" height="16px">
                            <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                            <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                            <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                            </svg>
                        </Button>
                    </div>
                    <span class="absoluteTotal" v-if="store.total > 0">{{ store.total }}</span>
                </SheetDescription>
            </SheetHeader>
            </SheetContent>
        </Sheet>
        
        <span class="logo rounded-md">REVELOFFICE</span>

        <div class="hamburgerControl" ref="outsidemenu">
            <Button class="btn" @click="toggleMenu">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#202020" width="18px" height="18px">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </Button>
            <Transition name="scaleup">
                <div class="hamburgerMenu" v-if="toggleState">
                    <span><RouterLink to="/">Home</RouterLink></span>
                    <span class="comingsoon"><RouterLink to="/test">Track Orders</RouterLink></span>
                    <span><RouterLink to="/checkout">Checkout</RouterLink></span>
                    <span class="comingsoon"><RouterLink to="/collections">Collections</Routerlink></span>
                </div>
            </Transition>
        </div>
    </nav>
</template>

<script setup>
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { onClickOutside } from '@vueuse/core'
import { Button } from '@/components/ui/button'
import { ref, watch } from 'vue'


import { useStore } from '@/store/cartStore';
const store = useStore();
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter();

// const target = ref(null);
const outsidemenu = ref(null);
// const openMenu = ref(false);
const toggleState = ref(false)

// watch(route, () => {
//     toggleState.value = false
//     console.log('kinda')
// })

// onClickOutside(target, () => {
//     openMenu.value = false;
// })

onClickOutside(outsidemenu, () => {
    toggleState.value = false
    console.log(toggleState.value)
})

// function toggleCart() {
//     openMenu.value = !openMenu.value
//     console.log('trybsomething')
// }

function toggleMenu() {
    toggleState.value = !toggleState.value;
    console.log(toggleState.value)
}

function checkoutRoute() {
    router.push('/checkout')
}

</script>

<style lang="css" scoped>
.scaleup-enter-to {
    transform: scale(1);
}
.scaleup-enter-from {
    transform: scale(0.5);
}
.scaleup-leave-to {
    transform: scale(0.5);
}
.scaleup-leave-from {
    transform: scale(1);
}
.scaleup-enter-active {
    transition: transform 0.3s;
}
.scaleup-leave-active {
    transition: transform 0.3s;
}
.nav-body {
    padding: 0.75rem 1rem;
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    align-items: center;
    position: fixed;
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 2;
    /* border: 1px solid grey; */
    /* margin-bottom: 1rem; */
}
.logo {
    border: 2px solid rgba(128, 128, 128, 0.274);
    flex: auto;
    text-align: center;
    height: fit-content;
    padding-block: 0.45rem;
    background-color: #fff;
    font-size: 0.85rem;
    color: rgb(37, 37, 37);
    font-weight: 600;
    letter-spacing: 1px;
}
.btn {
    display: flex;
    place-items: center;
    padding: 0.65rem;
    align-items: center;
    background-color: #fff;
    outline: 2px solid rgb(218, 218, 218);
}
.cart {
    position: relative;
}
.nav-menu {
    position: absolute;
    border: 2px solid rgba(128, 128, 128, 0.274);
    background-color: #fff;
    border-radius: 10px;
    z-index: 1000;
    top: 50px;
}
.hamburgerControl {
    /* position: relative; */
    box-sizing: border-box;
}
.hamburgerMenu {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #fff;
    padding: 1rem;
    border: 2px solid rgba(128, 128, 128, 0.274);
    border-radius: 10px;
    z-index: 1000;
    left: 20px;
    right: 20px;
    top: 70px;
    bottom: 0;
    /* margin: auto; */
    height: fit-content;
}
.absoluteTotal {
    display: flex;
    place-items: center;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: burlywood;
    font-size: 0.65rem;
    padding: 0.35rem;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    top: 4px;
    right: 2px;
    pointer-events: none;
}
.checkout .check-btn {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 0.5rem 0.85rem;
}

.cart-preview {
    text-align: center;
    margin-bottom: 1rem;
}
.t-head {
    text-align: left;
}
table {
    margin-bottom: 1rem;
}
td {
    padding-right: 1rem;
}
.total {
    margin-bottom: 0.5rem;
}
.comingsoon::after {
    position: absolute;
    content: "Coming Soon";
    left: 100px;
    /* bottom: 10px; */
    margin-left: 1rem;
    font-size: 0.85rem;
    background-color: violet;
    border-radius: 10px;
}
</style>