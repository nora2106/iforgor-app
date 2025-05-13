<!-- global layout for all pages -->
<!-- containing navigation, content, footer?, profile modal -->
<script setup lang="ts">

</script>

<template>
  <div class="app-layout">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      <p>Footer</p>
    </footer>
  </div>
</template>

<style scoped>

</style>
