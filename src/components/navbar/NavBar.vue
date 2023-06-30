<script setup lang="ts">
import RightElement from './RightElement.vue'
import BelowElement from './BelowElement.vue'
</script>

<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
      <a href="/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
      </a>
      <div class="flex items-center">
          <RightElement text="Sign Up" url="/sign-up"></RightElement>
          <RightElement text="Sign In" url="/sign-in"></RightElement>
      </div>
    </div>
  </nav>
  <nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
      <div class="flex items-center">
        <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
          <BelowElement
            text="Home"
            url="/"
          />
          <BelowElement
            text="Sort"
            url="/sort"
          />
          <BelowElement
            text="About"
            url="/about"
          />
        </ul>
      </div>
    </div>
  </nav>
</template>