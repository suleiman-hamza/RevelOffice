<script setup>
import { ref } from 'vue';
import { Input } from '@/components/ui/input'
import * as z from 'zod'
import { toTypedSchema } from '@vee-validate/zod';

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import Button from '@/components/ui/button/Button.vue';

const formSchema = toTypedSchema(z.object({
    firstName: z.string().min(2).max(50),
    lastname: z.string().min(2).max(50),
    email: z.string().email('Must be a valid email'),
    address: z.string().min(14, {message: 'Address should be compltete'}).max(50),
    phone: z.number().gte(5).lte(5).positive().max(6),
    postalCode: z.number().gt(5).positive(),
    country: z.any()
}))

function onSubmit(values) {
    console.log('Form submitted!', values)
  }
</script>
<template>
    <main class="checkout-main">
        <section class="shipping-info">
        <h2>ShippingAddress</h2>
        <Form @submit="onSubmit" :validation-schema="formSchema">
            <FormField v-slot="{ componentField }" name="firstName">
                <FormItem>
                    <FormLabel>Firstname</FormLabel>
                    <FormControl>
                        <Input placeholder="firstname" type="text" v-bind="componentField"/>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="lastName">
                <FormItem>
                    <FormLabel>Lastname</FormLabel>
                    <FormControl>
                        <Input placeholder="lastname" type="text" v-bind="componentField"/>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="email">
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input placeholder="Enter Valid Email" type="email" v-bind="componentField"/>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="address">
                <FormItem>
                    <FormLabel>Home Address</FormLabel>
                    <FormControl>
                        <Input placeholder="Home Address" type="text" v-bind="componentField"/>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="phone">
                <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                        <Input placeholder="Mobile Number" type="number" v-bind="componentField"/>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="postalCode">
                <FormItem>
                    <FormLabel>Postal Code</FormLabel>
                    <FormControl>
                        <Input placeholder="Postal Code" type="number" v-bind="componentField"/>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="country">
                <FormItem>
                    <FormLabel>Home Address</FormLabel>
                    <FormControl>
                        <Input placeholder="Country" type="text" v-bind="componentField"/>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                </FormItem>
            </FormField>
            <Button>Submit</Button>
        </Form>

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
</style> 