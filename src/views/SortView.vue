<script setup lang="ts">
import { ref, watch } from 'vue';
import BarContainer from '../components/sorting/BarContainer.vue'

const DEFAULT_VALUES = [ 0, 10, 45, 34, 100, 66];

const message = ref<string>("");
const values = ref<number[]>(DEFAULT_VALUES);

watch(message, (newMessage: string, oldMessage: string): void => {
  if (!newMessage) {
    values.value = DEFAULT_VALUES;
  }
  const split_result: number[] = newMessage.split(',').map(el => parseInt(el));
  
  values.value = split_result.length > 1 ? split_result
   : DEFAULT_VALUES;
});

const sort_values = () => {
  [values.value[0], values.value[1]] = [values.value[1], values.value[0]];
  // values.value.sort();
}

</script>

<template>
  <div class="h-full flex flex-col justify-center items-center">
    <span>Enter non negative integers separated by commas:</span>
    <p class="mb-3" style="white-space: pre-line;"></p>
    <textarea class="mb-3" v-model="message" placeholder="add multiple lines"></textarea>
    <BarContainer :raw_values=values></BarContainer>
    <button
      class="
      m-4
      p-3
      rounded-md
      bg-red
      border-2
      hover:border-red-800"
      v-on:click="sort_values"
    >
      Start sorting!
    </button>
  </div>
</template>
