<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const instruments = ref([])

async function getInstruments() {
  const { data, error } = await supabase.from('instruments').select('*');
    if (error) {
        console.error('Error fetching instruments:', error)
        return
    }
  instruments.value = data || []
  console.log('Fetched instruments:', instruments.value)
}

onMounted(() => {
   getInstruments()
})

</script>

<template>
    <p class="bg-blue-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quis doloribus perferendis cum, consequuntur aliquid cumque incidunt, excepturi pariatur quidem delectus odit quos officia deleniti labore, eos minus reiciendis nihil!</p>
  <ul class="p-4 border m-2">
    <a href="#">href</a>
    <li v-for="instrument in instruments" :key="instrument.id">- {{ instrument.name }}</li>
  </ul>
  <p class="bg-pink-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quis doloribus perferendis cum, consequuntur aliquid cumque incidunt, excepturi pariatur quidem delectus odit quos officia deleniti labore, eos minus reiciendis nihil!</p>
</template>