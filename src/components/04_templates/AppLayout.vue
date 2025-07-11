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
<!--        language switch-->
    </header>
    <main class="layout-grid">
      <p>Profile</p>
      <PageHeader/>
      <slot/>
    </main>
    <footer>
    </footer>
    <BottomMenu v-if="uiStore.mobileButtons != null" :btns="uiStore.mobileButtons"/>
  </div>
</template>

<style lang="scss" scoped>

.layout-grid {
  @media(min-width: $breakpoint-md) {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: .5fr 1.5fr;
    grid-template-rows: auto auto;
    align-items: flex-start;
    grid-gap: 4rem;

    &::v-deep(.list-content-wrapper) {
      display: contents;
    }
  }
}
</style>
