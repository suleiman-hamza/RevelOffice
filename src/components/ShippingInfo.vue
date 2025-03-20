<template>
<Form @submit="onSubmit" :validation-schema="formSchema">
            <FormField v-slot="{ componentField }" name="firstName">
                <FormItem>
                    <FormLabel>Firstname</FormLabel>
                    <FormControl>
                        <Input placeholder="firstname" type="text" v-bind="componentField" class="px-2 w-full" v-model="submit.firstName"/>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="lastName">
                <FormItem>
                    <FormLabel>Lastname</FormLabel>
                    <FormControl>
                        <Input placeholder="lastname" type="text" v-bind="componentField" class="px-2 w-full" v-model="submit.lastName"/>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="email">
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input placeholder="Enter Valid Email" type="email" v-bind="componentField" class="px-2 w-full" v-model="submit.email"/>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="address">
                <FormItem>
                    <FormLabel>Home Address</FormLabel>
                    <FormControl>
                        <Input placeholder="Home Address" type="text" v-bind="componentField" class="px-2 w-full" v-model="submit.address"/>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="phone">
                <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                        <Input placeholder="Mobile Number" type="number" v-bind="componentField" class="px-2 w-full" v-model="submit.phone"/>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="postalCode">
                <FormItem>
                    <FormLabel>Postal Code</FormLabel>
                    <FormControl>
                        <Input placeholder="Postal Code" type="number" v-bind="componentField" class="px-2 w-full" v-model="submit.postalCode"/>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="country">
                <FormItem>
                    <FormLabel>Home Address</FormLabel>
                    <FormControl>
                        <Input placeholder="Country" type="text" v-bind="componentField" class="px-2 w-full" v-model="submit.country"/>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                </FormItem>
            </FormField>
            <Button>Submit</Button>
        </Form>
        
</template>

<script setup lang="js">
import { ref } from 'vue';
import { Input } from '@/components/ui/input'
import Button from '@/components/ui/button/Button.vue';
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

const emit = defineEmits(['update'])

const formSchema = toTypedSchema(z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2, {message: 'Lastname is required'}).max(50),
    email: z.string().email('Must be a valid email'),
    address: z.string().min(14, {message: 'Address should be compltete'}).max(50),
    phone: z.number().gt(10).positive(),
    postalCode: z.number().gt(5).positive(),
    country: z.any()
}))

const submit = ref({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phone: '',
        postalCode: '',
        country: ''
    })

// function onSubmit(values) {
//     console.log('Form submitted!', values)  
//     localStorage.setItem('submit', JSON.stringify(values))
//     emit('update')
//   }
</script>