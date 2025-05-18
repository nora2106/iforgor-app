<!-- main page of the app -->
<script setup lang="ts">
import {useListStore} from "@/components/00_utilities/stores/listStore";
import {useUiStore} from "@/components/00_utilities/stores/uiStore";
import {computed} from "vue";
import ListOverview from "@/components/03_organisms/ListOverview.vue";
import ListLayout from "@/components/04_templates/ListLayout.vue";
const listStore = useListStore();
const uiStore = useUiStore();

const listsByType = computed(() => {
  switch (uiStore.activeType) {
    case 'task':
    case 'shopping':
      return listStore.getListsByType(uiStore.activeType)
    case 'recipe':
      // add recipe store
    default:
      return []
  }
})
</script>

<template>
  <h1>{{ $t("home.title") }}</h1>
  <ListLayout :title="''">
    <ListOverview :activeType="uiStore.activeType" :lists="listsByType"/>
  </ListLayout>
</template>

<style>

</style>
