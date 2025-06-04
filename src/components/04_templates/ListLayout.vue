<!-- layout for all list displays -->
<!-- contains list overview, title bar, tab selector sidebar-->
<script setup lang="ts">
import TabSelector from "@/components/02_molecules/TabSelector.vue";
import {useUiStore} from "@/components/00_utilities/stores/uiStore";
import {ListType} from "@/components/00_utilities/types/list";

const props = defineProps<{hide?: boolean, selection: (value: ListType) => void, title: string, options?: {name: string; value: ListType}[]}>();
const uiStore = useUiStore();

uiStore.setCurrentTitle(props.title);
</script>

<template>
    <div class="list-wrapper">
      <TabSelector v-if="!hide" @select="selection" :options="options"/>
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
