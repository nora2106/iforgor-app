<!-- main page of the app -->
<script setup lang="ts">
import {useListStore} from "@/components/00_utilities/stores/listStore";
import {useUiStore} from "@/components/00_utilities/stores/uiStore";
import {computed} from "vue";
import ListOverview from "@/components/03_organisms/ListOverview.vue";
import ListLayout from "@/components/04_templates/ListLayout.vue";
import {TypeSelection} from "@/components/00_utilities/types/general";
import {useI18n} from "vue-i18n";
import {ListType} from "@/components/00_utilities/types/list";

const i18n = useI18n();
const listStore = useListStore();
const uiStore = useUiStore();

const listsByType = computed(() => {
  switch (uiStore.activeListType) {
    case 'task':
    case 'shopping':
      return listStore.getListsByType(uiStore.activeListType)
    case 'recipe':
      // add recipe store
    default:
      return []
  }
})

const selectListType = (value: ListType) => {
  uiStore.setActiveListType(value);
}

const options: {name: string; value: TypeSelection}[] = [{name: i18n.t("tabs.task"), value: "task"}, {name: i18n.t("tabs.shopping"), value: "shopping"}, {name: i18n.t("tabs.recipes"), value: "recipe"}]

</script>

<template>
  <h1>{{ $t("home.title") }}</h1>
  <ListLayout :selection="selectListType" :options="options" :title="''">
    <ListOverview :activeType="uiStore.activeType" :lists="listsByType"/>
  </ListLayout>
</template>

<style>

</style>
