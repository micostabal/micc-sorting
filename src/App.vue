<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/navbar/NavBar.vue';
</script>

<template>
    <NavBar></NavBar>
    <div class="flex flex-row justify-center items-center mt-20">
        <router-view></router-view>
    </div>
</template>
