<!-- component template -->
<script setup lang="ts">
import {useUiStore} from "@/components/00_utilities/stores/uiStore";
import {useRoute} from "vue-router";
import {computed} from "vue";
import {useI18n} from "vue-i18n";

const uiStore = useUiStore();

const route = useRoute()
const isHome = computed(() => route.name === 'Home');
const {t} = useI18n()
const currentListData = computed(() =>
    uiStore.activeContext === 'overview'
        ? uiStore.currentListOverview ?? {count: 0, type: 'task', title: ''}
        : uiStore.currentListData ?? {count: 0, checkedCount: 0, type: 'task', title: ''}
);

let infoText = computed(() => {
  if (uiStore.activeContext === 'overview') {
    if (currentListData.value.type !== 'recipe') {
      return t(`list.list-list`, currentListData.value.count)
    } else {
      return t(`list.list-recipe`, currentListData.value.count)
    }
  }
  return t(`list.list-${currentListData.value.type}`, currentListData.value.count)
})
</script>

<template>
  <div class="header">
    <router-link :class="isHome ? `nav-link hidden`: `nav-link`" to="/">
      <Icon icon="ep:arrow-left-bold"/>
    </router-link>
    <div class="title-wrapper">
      <h1 v-if="currentListData.title">{{ currentListData.title }}</h1>
      <p>{{ infoText }}</p>
    </div>
    <span v-if="currentListData.checkedCount != undefined"
          class="item-count">{{ currentListData.checkedCount + "/" + currentListData.count }}</span>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
  border-radius: $border-radius-mobile;

  @media(min-width: $breakpoint-md) {
    background-color: var(--component-bg);
    padding: 1rem 2rem;
    max-width: 65rem;
    width: 100%;
  }
}

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
