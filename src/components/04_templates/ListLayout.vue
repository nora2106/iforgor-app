<!-- layout for all list displays -->
<!-- contains list overview, title bar, tab selector sidebar-->
<script setup lang="ts">
import TabSelector from "@/components/02_molecules/TabSelector.vue";

defineProps<{ title: string}>();
</script>

<template>
    <div>
      <h1>{{title}}</h1>
      <TabSelector/>
      <slot/>
    </div>
</template>

<style scoped>

</style>
