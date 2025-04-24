<!-- single task list component -->
<template>
  <h1>List</h1>
  <div v-if="type === 'task'">
    <p>Tasks</p>
    <TaskList :list="list"/>
  </div>
  <div v-if="type === 'shopping'">
    <p>Shopping list tba.</p>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import TaskList from "@/components/03_organisms/TaskList.vue";
import {useRoute} from "vue-router";
import {useListStore} from "@/components/00_utilities/stores/listStore";

export default defineComponent({
  name: 'ListView',
  setup() {
    // @todo make type dynamic
    const route = useRoute();
    const listID :number = parseInt(route.params.id.toString());
    const store = useListStore();

    const list = store.getListByID(listID)
    let type = list?.type;

    return {
      type,
      list
    }
  },
  components: {
    TaskList
  }

});
</script>

<style>

</style>
