<script setup>
import { ref } from 'vue';
import { Input } from '@/components/ui/input'
import * as z from 'zod'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
  } from '@/components/ui/form'

const username = z.string().min(2, { message: 'minimum of 2 characters' })

function onSubmit(values) {
    console.log('Form submitted!', values)
  }
</script>
<template>
    <main class="checkout-main">
        <section class="shipping-info">
           <h2>ShippingAddress</h2>
           <form @submit="onSubmit">
           <div class="flex">
            <FormField v-slot="{ componentField }" name="username">
                <FormItem>
                    <FormLabel>FirstName</FormLabel>
                    <FormControl>
                        <Input placeholder="shadcn" type="text" v-bind="componentField" />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="username">
                <FormItem>
                    <FormLabel>Lastname</FormLabel>
                    <FormControl>
                        <Input placeholder="shadcn" type="text" v-bind="componentField" />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                </FormItem>
            </FormField>
           </div>
            
        </form>

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
    .flex > * {
        flex: 1;
    }
</style> 