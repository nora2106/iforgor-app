<!-- layout for all list displays -->
<!-- contains list overview, title bar, tab selector sidebar-->
<script setup lang="ts">
import TabSelector from "@/components/02_molecules/TabSelector.vue";
import {ListType} from "@/components/00_utilities/types/list";

const props = defineProps<{showTabs: boolean, selection: (value: ListType) => void, title: string, options?: {name: string; value: ListType}[]}>();

</script>

<template>
    <div class="list-wrapper">
      <TabSelector v-if="showTabs" @select="selection" :options="options"/>
      <slot/>
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
}

</style>
