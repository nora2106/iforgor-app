<!-- layout for all list displays -->
<!-- contains list overview, title bar, tab selector sidebar-->
<script setup lang="ts">
import TabSelector from "@/components/02_molecules/TabSelector.vue";

defineProps<{selection: Function, title: string, options: {name: string; value: string}[]}>();
</script>

<template>
    <div class="list-wrapper">
      <h1>{{title}}</h1>
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
}

</style>
