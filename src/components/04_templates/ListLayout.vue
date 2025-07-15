<!-- layout for all list displays -->
<!-- contains list overview, title bar, tab selector sidebar-->
<script setup lang="ts">
import TabSelector from "@/components/02_molecules/TabSelector.vue";
import {ListType} from "@/components/00_utilities/types/list";

const props = defineProps<{
  showTabs: boolean,
  selection: (value: ListType) => void,
  title: string,
  options?: { name: string; value: ListType }[]
}>();

</script>

<template>
  <div class="list-content-wrapper">
    <div class="list__tab-wrapper">
      <TabSelector v-if="showTabs" @select="props.selection" :options="options"/>
    </div>
    <div class="list__list-wrapper">
      <slot/>
    </div>
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

  @media(min-width: $breakpoint-md) {
    background-color: var(--component-bg);
    max-width: 65rem;
    align-items: flex-start;
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
  }
}

</style>
