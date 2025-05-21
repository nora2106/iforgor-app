<!-- global layout for all pages -->
<!-- containing navigation, content, footer?, profile modal -->
<script setup lang="ts">
import BottomMenu from "@/components/02_molecules/BottomMenu.vue";
import {useUiStore} from "@/components/00_utilities/stores/uiStore";

const uiStore = useUiStore();
</script>

<template>
  <div class="app-layout">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
      </nav>
    </header>
    <main>
      <slot/>
    </main>
    <footer>
      <p>Footer</p>
    </footer>
    <BottomMenu v-if="uiStore.mobileButtons != null" :btns="uiStore.mobileButtons"/>
  </div>
</template>

<style scoped>

</style>
