<template>
    <nav class="nav-body">
        <div class="cart" ref="target">
            <Button class="flex-initial btn" @click="toggleCart">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#202020" width="18px" >
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            </Button>
            <ul class="nav-menu" v-if="openMenu">
                <li>Menu 1</li>
                <li>Menu 2</li>
                <li>Menu 3</li>
                <li>Menu 4</li>
            </ul>
        </div>
        
        <span class="logo rounded-md">REVELOFFICE</span>

        <div class="hamburgerControl" ref="outsidemenu">
            <Toggle class="btn" @update:pressed="toggleMenu" v-model:pressed="toggleState">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#202020" width="18px" height="18px">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </Toggle>
            <div class="hamburgerMenu" v-if="toggleState" ref="outsidemenu">
                <span>Shop</span>
                <span>Track Orders</span>
                <span>Contact</span>
                <span><a href="#">Collections</a></span>
                <span>Help</span>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'
import { Button } from '@/components/ui/button'
import { Toggle } from '@/components/ui/toggle'
import { ref } from 'vue'

const target = ref(null);
const outsidemenu = ref(null);
const openMenu = ref(false);
const toggleState = ref(false)

onClickOutside(target, () => {
    openMenu.value = false;
})
onClickOutside(outsidemenu, () => {
    toggleState.value = false
})

function toggleCart() {
    openMenu.value = !openMenu.value
}

function toggleMenu() {
    toggleState.value = !toggleState.value
    console.log(toggleState.value)
}
</script>

<style lang="css" scoped>
.hidden {
    transform: scale(0);
    transition: all 1s ease-in;
}
.visible {
    transform: scale(1);
}
.nav-body {
    padding: 1px;
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    align-items: center;
    /* border: 1px solid grey; */
    margin-bottom: 1rem;
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
    width: 150px;
    border: 1px solid red;
}
.hamburgerControl {
    position: relative;
}
.hamburgerMenu {
    box-sizing: border-box;
    width: calc(90vw - 1rem);
    /* height: 100vh; */
    position: absolute;
    top: 50px;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #fff;
    padding: 1rem;
    border: 2px solid rgba(128, 128, 128, 0.274);
    border-radius: 10px;
    z-index: 100;
}

</style>