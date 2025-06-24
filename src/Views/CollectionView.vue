<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createReusableTemplate, useMediaQuery } from '@vueuse/core';
import ItemCard from '@/components/ItemCard.vue';
import { ref } from 'vue';

const [UseTemplate, GridForm] = createReusableTemplate()
const isDesktop = useMediaQuery('(min-width: 768px)')

const isOpen = ref(false)
</script>
<template>
  <section class="p-4">
    
    <h1>Collections</h1>
    <ItemCard />
    <section>
        <UseTemplate>
            <form class="grid items-start gap-4 px-4">
            <div class="grid gap-2">
                <Label html-for="email">Email</Label>
                <Input id="email" type="email" default-value="shadcn@example.com" />
            </div>
            <div class="grid gap-2">
                <Label html-for="username">Username</Label>
                <Input id="username" default-value="@shadcn" />
            </div>
            <div class="grid gap-2">
                <Label html-for="username">Username</Label>
                <Input id="username" default-value="@shadcn" />
            </div>
            <Button type="submit">
                Save changes
            </Button>
            </form>
        </UseTemplate>

  <Dialog v-if="isDesktop" v-model:open="isOpen">
    <DialogTrigger as-child>
      <Button variant="outline">
        Edit Profile
      </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Update Shipping Address</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <GridForm />
    </DialogContent>
  </Dialog>

  <Drawer v-else v-model:open="isOpen">
    <DrawerTrigger as-child>
      <Button variant="link">
        Shipping info
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader class="text-left">
        <DrawerTitle>Update Shipping Address</DrawerTitle>
        <DrawerDescription>
          Make changes to your profile here. Click save when you're done.
        </DrawerDescription>
      </DrawerHeader>
      <GridForm />
      <DrawerFooter class="pt-2">
        <DrawerClose as-child>
          <Button variant="outline">
            Cancelled
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
    </section>
    <div class="acc-terms flex items-center space-x-2">
      <Checkbox id="terms" />
      <label for="terms" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">I agree to the terms and conditions</label>
    </div>
  </section>
</template>
<style lang="css" scoped>
h1 {
    padding-top: 4.5rem;
}
.btn {
    display: flex;
    place-items: center;
    padding: 0.65rem;
    align-items: center;
    background-color: #fff;
    outline: 2px solid rgb(218, 218, 218);
}
</style>