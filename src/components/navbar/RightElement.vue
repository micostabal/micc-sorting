<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps<{
  text: string,
  url: string
}>()
</script>

<template>
  <router-link
    :to="`${url}`"
    class="text-sm mr-6 text-blue-600 dark:text-blue-500 hover:underline"
  >
    {{ text }}
  </router-link>
</template>