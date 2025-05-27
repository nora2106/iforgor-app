<!-- layout for all list displays -->
<!-- contains list overview, title bar, tab selector sidebar-->
<script setup lang="ts">
import TabSelector from "@/components/02_molecules/TabSelector.vue";
import {useUiStore} from "@/components/00_utilities/stores/uiStore";

const props = defineProps<{selection: Function, title: string, options: {name: string; value: string}[]}>();

const uiStore = useUiStore();
uiStore.setCurrentTitle(props.title);
</script>

<template>
    <div class="list-wrapper">
      <TabSelector :onSelection="selection" :defaultOption="defaultOption" :options="options"/>
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
  padding-block: 2rem;
}

</style>
