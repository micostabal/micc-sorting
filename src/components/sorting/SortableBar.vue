<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  quantity: number,
  max_quantity: number,
  in_transition: boolean
}>()

const DIFFERENCE :number = 25;
const TOTAL_HEIGHT: number = 300;

const computed_height = computed((): number => {
  return Math.round(
    DIFFERENCE + (TOTAL_HEIGHT - DIFFERENCE)
     * ( props.quantity / props.max_quantity)
  );
});

</script>

<template>
  <div
    class="
      bg-sky-500/75
      w-20
      shadow
      rounded
      flex
      items-center
      justify-center
      border-2"
    :class="{ 'border-red-800': in_transition }"
    :style="{ height: `${computed_height}px`}"
    >
    <p><b>{{ quantity }}</b></p>
  </div>
</template>