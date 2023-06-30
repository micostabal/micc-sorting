<script setup lang="ts">
import BarContainer from '../components/sorting/BarContainer.vue'

const raw_values = [2, 45, 0, 34];

</script>

<template>
  <div class="h-full">
    <BarContainer :raw_values=raw_values></BarContainer>
  </div>
</template>
