<!-- global layout for all pages -->
<!-- containing navigation, content, footer?, profile modal -->
<script setup lang="ts">
import BottomMenu from "@/components/02_molecules/BottomMenu.vue";
import {useUiStore} from "@/components/00_utilities/stores/uiStore";
import {computed, ref} from "vue";
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const uiStore = useUiStore();

const route = useRoute()
const isHome = computed(() => route.name === 'Home');
const { t } = useI18n()
let infoText = computed(() => t(`list.list-${uiStore.currentListData.type}`, uiStore.currentListData.count));

</script>

<template>
  <div class="app-layout">
    <header>
        <router-link :class="isHome ? `nav-link hidden`: `nav-link`" to="/">
          <Icon icon="ep:arrow-left-bold" />
        </router-link>
      <div class="title-wrapper">
        <h1 v-if="uiStore.currentTitle">{{ uiStore.currentTitle }}</h1>
        <p>{{infoText}}</p>
      </div>
      <span class="item-count">{{"1/" + uiStore.currentListCount.count}}</span>
    </header>
    <main>
      <slot/>
    </main>
    <footer>
    </footer>
    <BottomMenu v-if="uiStore.mobileButtons != null" :btns="uiStore.mobileButtons"/>
  </div>
</template>

<style lang="scss" scoped>
.title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: .5rem;

  h1, p {
    margin: 0;
  }
}

.item-count {
  font-weight: $font-weight-bolder;
  font-size: $font-size-big;
  margin-left: auto;
  margin-top: 3px;
}

header {
  margin: 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
}

.hidden {
  display: none;
}

.nav-link {
  background-color: var(--btn-color);
  padding: .5rem;
  border-radius: 100%;
  font-size: 1.5rem;
  color: var(--text-color-contrast);
}
</style>
