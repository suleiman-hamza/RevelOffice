<script setup>
import { cn } from '@/lib/utils';
import {
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaViewport,
} from 'radix-vue';
import { computed } from 'vue';
import ScrollBar from './ScrollBar.vue';
import { useStore } from '@/store/cartStore';
const store = useStore();

const props = defineProps({
  type: { type: String, required: false },
  dir: { type: String, required: false },
  scrollHideDelay: { type: Number, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false },
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <ScrollAreaRoot
    v-bind="delegatedProps"
    :class="cn('relative overflow-hidden', props.class)"
  >
    <ScrollAreaViewport class="h-full w-full rounded-[inherit]">
      <!-- {/* <p>{{ store.cart }}</p> */} -->
       <slot></slot>
    </ScrollAreaViewport>
    <ScrollBar />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
