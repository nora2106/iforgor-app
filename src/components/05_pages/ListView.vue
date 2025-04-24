<!-- single task list component -->
<template>
  <h1>List</h1>
  <div v-if="type === 'task'">
    <TaskList/>
  </div>
  <div v-if="type === 'shopping'">
    <p>Shopping list tba.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TaskList from "@/components/03_organisms/TaskList.vue";

export default defineComponent({
  name: 'ListView',
  setup() {
    let type = "shopping"
    return {
      type
    }
  },
  components: {
    TaskList
  }

});
</script>

<style>

</style>
