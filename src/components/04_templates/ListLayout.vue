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
  <div class="list-wrapper">
    <div class="list__tab-wrapper">
      <TabSelector v-if="showTabs" @select="props.selection" :options="options"/>
    </div>
    <div class="list__list-wrapper">
      <slot/>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.list-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--component-bg);
  min-height: 75%;
  border-radius: $border-radius-mobile;
  margin-inline: 1rem;

  @media(min-width: $breakpoint-sm) {
    width: 80%;
    margin: 0 auto;
  }

  @media(min-width: $breakpoint-md) {
    background-color: transparent;
    flex-direction: row;
    gap: 4rem;
    margin: 4rem;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .list__list-wrapper {
    width: 100%;
    height: 75vh;
    min-height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: $border-radius-mobile;
    padding: 2rem;

    @media(min-width: $breakpoint-md) {
      background-color: var(--component-bg);
      max-width: 65rem;
      margin: 0 auto;
      align-items: flex-start;
    }
  }

  .list__tab-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: $border-radius-mobile;
    flex: 1;

    @media(min-width: $breakpoint-md) {
      background-color: var(--component-bg);
      max-width: 16rem;
    }
  }
}

</style>
