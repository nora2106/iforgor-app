<!-- single task with checkable item and optional subtasks-->
<script setup lang="ts">
  import {TaskItem} from "@/components/00_utilities/types/list";
  import CheckableItem from "@/components/01_atoms/CheckableItem.vue";
  import TaskDetail from "@/components/01_atoms/TaskDetail.vue";
  import {useListStore} from "@/components/00_utilities/stores/listStore";
  import AddListOverlay from "@/components/02_molecules/AddListOverlay.vue";

  const props = defineProps<{ task: TaskItem }>();
  const emit = defineEmits<{
    (e: 'toggleCheckedItem', itemID: number): void;
  }>();
  const store = useListStore();


  const handleSubtaskDone = (id: number) => emit("toggleCheckedItem", id);

  const addSubtask = (text: string) => {
    console.log('add subtask')
    store.addSubtask(props.task.listID, props.task.id, text);
  }

</script>

<template>
  <li>
    <CheckableItem @toggleChecked="handleSubtaskDone" :item="props.task"/>
    <TaskDetail @addSubitem="addSubtask" :task="props.task"/>
  </li>
</template>

<style scoped>

li {
  list-style: none;
}

</style>
