<!-- global layout for all pages -->
<!-- containing navigation, content, footer?, profile modal -->
<script setup lang="ts">
import BottomMenu from "@/components/02_molecules/BottomMenu.vue";
import {useUiStore} from "@/components/00_utilities/stores/uiStore";
import {computed} from "vue";
import { useRoute } from 'vue-router'

const uiStore = useUiStore();
const titleKey = computed(() => `list.title-${uiStore.activeListType}`)

const route = useRoute()
const isHome = computed(() => route.path === '/')
</script>

<template>
  <div class="app-layout">
    <header>
      <router-link :class="isHome ? `nav-link hidden`: `nav-link`" to="/">
        <Icon icon="ep:arrow-left-bold" />
      </router-link>
      <h1>{{ $t(titleKey) }}</h1>
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

<style lang="scss">
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin-inline: 1rem;
}
.nav-link {
  background-color: var(--btn-color);
  padding: .5rem;
  border-radius: 100%;
  font-size: 1.5rem;
  color: var(--text-color-contrast);

  &.hidden {
    display: none;
  }
}
</style>
