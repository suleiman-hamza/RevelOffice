<script setup lang="ts">
import { reactive } from 'vue';

const props = defineProps<{
    name: string,
    price: number,
    description: string,
    itemsLeft: number
}>()

interface itemInfo {
    name: string
    price: number | null
    description: string
}

const itemInfo = reactive<itemInfo>({
    name: "Item name or the shop",
    price: null,
    description: "Items description"
})

</script>

<template>
    <section class="max-w-[120px] mb-4">
        <div
        class="flex border justify-between flex-col gap-2 bg-[#ffffffe8] rounded-md shadow relative">
        <div class="flex items-center justify-center border">
            <img src="@/assets/images/PIPER-C044-SIDE-FRONT4-200x300-removebg-preview.png" class="w-[80px]">
        </div>
        <!--absolute favouritebutton-->
        <button @click="" class="w-[28px] h-[28px] border flex items-center justify-center rounded-full bg-white absolute right-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="#202020" class="w-[18px] h-[18px] p-0">
                    <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            </button>
            <!--absolute favouritebutton-->
    </div>
     <div class="items-center flex justify-between border">
            <div>
                <h4 class="truniicate">{{ props.name }}</h4>
                <div class="flex items-center justify-between">
                    <span class="flex flex-col">
                        <h5 class="text-[#aca9a9] text-[0.8rem]">${{ props.price }}</h5>
                    <h5 class="text-[#aca9a9] text-[0.8rem]">{{ props.itemsLeft }}</h5>
                    </span>
                    <button @click="" class="w-[28px] h-[28px] border flex items-center justify-center rounded-md bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="#202020" class="w-[18px] h-[18px] p-0">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            </button>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="css" scoped></style>