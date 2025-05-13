<!-- single list component -->
<script setup lang="ts">
  import TaskList from "@/components/03_organisms/TaskList.vue";
  import {useRoute} from "vue-router";
  import {useListStore} from "@/components/00_utilities/stores/listStore";
  import ListLayout from "@/components/04_templates/ListLayout.vue";

  const route = useRoute();
  const listID :number = parseInt(route.params.id.toString());
  const store = useListStore();

  const list = store.getListByID(listID)
  let type = list?.type;
</script>

<template>
  <ListLayout :title="list.name">
    <div v-if="type === 'task'">
      <p>Task-Liste</p>
      <TaskList :list="list"/>
    </div>
    <div v-if="type === 'shopping'">
      <p>Shopping list tba.</p>
    </div>
  </ListLayout>
</template>

<style>

</style>
