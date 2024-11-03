<template>
    <nav class="nav-body">
        <div class="cart" ref="target">
            <Button class="flex-initial btn" @click="toggleCart">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#202020" width="18px" >
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            </Button>
            <div class="nav-menu" v-if="openMenu">
                <ScrollArea class="h-[200px] w-[220px] rounded-md border p-4">
                    <div>
                        <table>
                            <tr>
                                <th>Products</th>
                                <th>Qty</th>
                            </tr>
                            <tr v-for="item in store.cart">
                                <td>{{ item.name }}</td>
                                <td>{{ item.quantity }}</td>
                            </tr>
                        </table>
                    </div>
                    <div class="total">
                        <span>Items: {{ store.total }}</span>
                        <span>Total: ${{ store.totalcart }}</span>
                    </div>
                    <div class="checkout">
                        <Button>Checkout</Button>
                    </div>
                </ScrollArea>
            </div>
                
        </div>
        
        <span class="logo rounded-md">REVELOFFICE</span>

        <div class="hamburgerControl" ref="outsidemenu">
            <Button class="btn" @click="toggleMenu">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#202020" width="18px" height="18px">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </Button>
            <Transition name="scaleup">
                <div class="hamburgerMenu" v-if="toggleState" ref="outsidemenu">
                    <span><RouterLink to="/">Home</RouterLink></span>
                    <span><RouterLink to="/trackorders">Track Orders</RouterLink></span>
                    <span><RouterLink to="/test">Shop test</RouterLink></span>
                    <span><RouterLink to="/collections">Collections</Routerlink></span>
                </div>
            </Transition>
        </div>
    </nav>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ref, watch } from 'vue'


import { useStore } from '@/store/cartStore';
const store = useStore();
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()

const target = ref(null);
const outsidemenu = ref(null);
const openMenu = ref(false);
const toggleState = ref(false)

watch(route, () => {
    toggleState.value = false
    console.log('kinda')
})

onClickOutside(target, () => {
    openMenu.value = false;
})
// onClickOutside(outsidemenu, () => {
//     toggleState.value = false
// })

function toggleCart() {
    openMenu.value = !openMenu.value
    console.log('trybsomething')
}

function toggleMenu() {
    toggleState.value = !toggleState.value
    console.log(toggleState.value)
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
    transition: transform 0s;
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

</style>