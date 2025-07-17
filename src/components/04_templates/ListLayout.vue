<!-- layout for all list displays -->
<!-- contains list overview, title bar, tab selector sidebar-->
<script setup lang="ts">
import TabSelector from "@/components/02_molecules/TabSelector.vue";
import {ListType} from "@/components/00_utilities/types/list";
import {useUiStore} from "@/components/00_utilities/stores/uiStore";
import ButtonIcon from "@/components/01_atoms/ButtonIcon.vue";
import ShareLink from "@/components/01_atoms/ShareLink.vue";
import {computed} from "vue";

const props = defineProps<{
  showTabs: boolean,
  selection: (value: ListType) => void,
  title: string,
  options?: { name: string; value: ListType }[]
}>();
const emit = defineEmits<{
  (e: 'toggleAdd'): void;
  (e: 'toggleShare'): void;
}>();
const uiStore = useUiStore();

function toggleOverlay() {
  emit('toggleAdd');
}

function toggleShareOverlay() {
  emit('toggleShare');
}

</script>

<template>
  <div class="list-content-wrapper">
    <div class="list__tab-wrapper">
      <TabSelector v-if="showTabs" @select="props.selection" :options="options"/>
    </div>
    <div class="list__list-wrapper">
      <!-- @todo add search feature and search button component -->
      <div class="list__list-buttons">
        <div v-if="uiStore.activeContext === 'overview'" class="list-search">
          <ButtonIcon :action="uiStore.toggleSettings" icon="ion:search"/>
        </div>
        <ButtonIcon v-if="uiStore.activeContext === 'overview' || (uiStore.activeListType === 'task' || uiStore.activeListType === 'shopping')" :action="toggleOverlay" icon="ph:plus-bold"/>
        <!-- @todo add recipe edit -->
        <ButtonIcon v-if="uiStore.activeContext !== 'overview' && uiStore.activeListType === 'recipe'" :action="uiStore.toggleSettings" icon="solar:settings-bold"/>
        <ButtonIcon :action="uiStore.toggleSettings" icon="solar:settings-bold"/>
      </div>
      <slot/>
    </div>
    <ShareLink @open-overlay="toggleShareOverlay" v-if="uiStore.activeContext !== 'overview'"/>
  </div>
</template>

<style lang="scss" scoped>

.list-content-wrapper {
  background-color: var(--component-bg);
  border-radius: $border-radius-mobile;

  @media(min-width: $breakpoint-md) {
    margin: 1rem;
  }
}

.list__list-wrapper {
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: $border-radius-mobile;
  padding: 2rem;
  grid-column: 2;

  @media(min-width: $breakpoint-md) {
    background-color: var(--component-bg);
    max-width: $max-content-with-desktop;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
}

.list__list-buttons {
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  gap: $spacer;

  button {
    display: none;
  }

  @media(min-width: $breakpoint-md) {
    align-self: auto;

    button {
      display: block;
    }
  }
}

.list-search {
  button {
    display: block !important;
  }
}

.list__tab-spacer {
  width: 100%;
  flex: 1;
}

.list__tab-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: $border-radius-mobile;
  margin-left: auto;

  @media(min-width: $breakpoint-md) {
    background-color: var(--component-bg);
    max-width: 16rem;
    grid-column: 1;
  }
}
</style>
