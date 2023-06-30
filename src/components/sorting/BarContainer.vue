<script setup lang="ts">
import { computed } from 'vue';
import SortableBar from './SortableBar.vue';
const props = defineProps<{
  raw_values: number[]
}>();

const max_value = computed((): number => {
  return Math.max(...props.raw_values)
});
</script>

<template>
  <div
    class="
      w-fit
      h-full
      bg-yellow
      flex
      flex-row
      justify-center
      items-end 
      space-x-4
      border
      border-radius-5
      rounded
      p-5
      border-8
      border-lime-green"
    :style="{ height: '350px'}"
  >
    <SortableBar v-for="value in raw_values"
      v-bind:key="value" :quantity=value :max_quantity=max_value></SortableBar>
  </div>
</template>