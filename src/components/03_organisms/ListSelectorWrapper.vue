<!-- list overview wrapper with selectable list type -->
<script setup lang="ts">
import TabSelector from "@/components/02_molecules/TabSelector.vue";
import ListOverview from "@/components/03_organisms/ListOverview.vue";
import {useUiStore} from "@/components/00_utilities/stores/uiStore";

const uiStore = useUiStore();
</script>

<template>
  <TabSelector/>
  <p>{{uiStore.activeType}}</p>
  <ListOverview/>
</template>

<style>

</style>
