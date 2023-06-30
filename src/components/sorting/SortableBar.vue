<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  quantity: number,
  max_quantity: number
}>()

const computed_height = computed((): number => {
  return Math.round(300 * (props.quantity / props.max_quantity)) + 17;
})

</script>

<template>
  <div
    class="bg-sky-500/75 w-24 shadow rounded flex items-center justify-center"
    :style="{ height: `${computed_height}px`}"
    >
    <p><b>{{ quantity }}</b></p>
  </div>
</template>