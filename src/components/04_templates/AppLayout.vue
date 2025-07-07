<!-- global layout for all pages -->
<!-- containing navigation, content, footer?, profile modal -->
<script setup lang="ts">
import BottomMenu from "@/components/02_molecules/BottomMenu.vue";
import PageHeader from "@/components/03_organisms/PageHeader.vue";
import {useUiStore} from "@/components/00_utilities/stores/uiStore";

const uiStore = useUiStore();
</script>

<template>
  <div class="app-layout">
    <header>
<!--        profile button-->
<!--        language switch-->
    </header>
    <main>
      <PageHeader/>
      <slot/>
    </main>
    <footer>
    </footer>
    <BottomMenu v-if="uiStore.mobileButtons != null" :btns="uiStore.mobileButtons"/>
  </div>
</template>

<style lang="scss" scoped>
</style>
