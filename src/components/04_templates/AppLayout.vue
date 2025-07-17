<!-- global layout for all pages -->
<!-- containing navigation, content, footer?, profile modal -->
<script setup lang="ts">
import BottomMenu from "@/components/02_molecules/BottomMenu.vue";
import PageHeader from "@/components/03_organisms/PageHeader.vue";
import {useUiStore} from "@/components/00_utilities/stores/uiStore";
import ProfileLink from "@/components/01_atoms/ProfileLink.vue";

const uiStore = useUiStore();
</script>

<template>
  <div class="app-layout">
    <header>
    </header>
    <main class="layout-grid">
      <ProfileLink/>
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
  display: flex;
  flex-direction: column;
  margin: $spacer;
  gap: 2rem;

  @media(min-width: $breakpoint-md) {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: min-content minmax(auto, $max-content-with-desktop) min-content;
    grid-template-rows: min-content auto;
    align-items: flex-start;
    grid-gap: 4rem;
    margin-left: 4rem;

    &::v-deep(.list-content-wrapper) {
      display: contents;
    }
  }
}
</style>
