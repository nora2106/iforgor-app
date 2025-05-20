<!-- single list component -->
<script setup lang="ts">
  import TaskList from "@/components/03_organisms/TaskList.vue";
  import {useRoute} from "vue-router";
  import {useListStore} from "@/components/00_utilities/stores/listStore";
  import ListLayout from "@/components/04_templates/ListLayout.vue";
  import {TypeSelection} from "@/components/00_utilities/types/general";
  import {useI18n} from "vue-i18n";

  const i18n = useI18n();
  const route = useRoute();
  const listID :number = parseInt(route.params.id.toString());
  const store = useListStore();
  const list = store.getListByID(listID)
  let type = list?.type;
  const tabOptions: {name: string; value: string}[] = [{name: i18n.t("tabs.all-tasks"), value: "allTasks"}, {name: i18n.t("tabs.assigned"), value: "assignedTasks"}]

  const selectTaskTab = (value: string) => {

  }
</script>

<template>
  <ListLayout :selection="selectTaskTab" v-show="type === 'task'" :options="tabOptions" :title="list.name">
    <TaskList v-if="type === 'task'" :list="list"/>
    <div v-if="type === 'shopping'">
      <p>Shopping list tba.</p>
    </div>
  </ListLayout>
</template>

<style>

</style>
