<template>
  <v-app>
    <v-main class="dark-theme">
      <component :is="currentView" />
    </v-main>
  </v-app>
</template>

<script setup>
  import {ref, computed} from 'vue';
  import Home from './components/Home.vue';
  import Austin from './components/Austin.vue';

  const routes = {
    '/':Home,
    '/austin':Austin
  }
  const currentPath = ref(window.location.hash)

  window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash
  })

  const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/']
  })
</script>

<style scoped>
  /* component styles */
  .dark-theme {
    background-color: #3a3f55;
  }
</style>
