<script setup lang="ts">
import { RouterLink} from 'vue-router'
defineProps<{
  text: string,
  url: string
}>()
</script>

<template>
  <li>
    <router-link
      :to="`${url}`"
      class="text-gray-900 dark:text-white hover:underline"
    >
      {{ text }}
    </router-link>
  </li>
</template>