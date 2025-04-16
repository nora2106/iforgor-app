<!-- single task list component -->
<template>
  <h1>List name</h1>
  <p v-if="tasks.length === 0">No tasks available</p>
  <ul>
    <ListItem v-for="task in tasks" :key="task.id">
      {{ task.name }}
    </ListItem>
  </ul>
</template>

<script lang="ts">
import {ref} from "vue";
import { defineComponent } from 'vue';
import ListItem from "@/components/01_atoms/ListItem.vue";

interface Task {
  id: number;
  name: string;
}

export default defineComponent({
  name: 'TaskList',
  setup() {
    const tasks = ref<Task[]>([
      {id: 1, name: "Buying milk"},
      {id: 2, name: "Second task"}
    ])
    return {
      tasks
    }
  },
  components: {
    ListItem
  }

});
</script>

<style>

</style>
