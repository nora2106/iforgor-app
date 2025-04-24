<!-- single task list component -->
<script setup lang="ts">
import ListItem from "@/components/01_atoms/ListItem.vue";
import type {List, TaskItem} from "../00_utilities/types/list";

const props = defineProps<{ list: List }>();
console.log(props.list)
// const tasks = props.list;

</script>

<template>
  <h1>List name</h1>
  <p v-if="tasks.length === 0">No tasks available</p>
  <ul>
    <ListItem v-for="task in tasks" :key="task.id">
      {{ task.name }}
    </ListItem>
  </ul>
</template>


<style>

</style>
