<!-- single task with checkable item and optional subtasks-->
<script setup lang="ts">
  import {TaskItem} from "@/components/00_utilities/types/list";
  import CheckableItem from "@/components/01_atoms/CheckableItem.vue";
  import TaskDetail from "@/components/01_atoms/TaskDetail.vue";
  import {useListStore} from "@/components/00_utilities/stores/listStore";
  import {ref} from "vue";

  const props = defineProps<{ task: TaskItem }>();
  const emit = defineEmits<{
    (e: 'toggleCheckedItem', itemID: number): void;
  }>();
  const store = useListStore();
  const showDetail = ref<boolean>(false);

  const toggleDetailView = () => {
    showDetail.value = !showDetail.value;
  }

  const handleSubtaskDone = (id: number) => emit("toggleCheckedItem", id);

  const addSubtask = (text: string) => {
    store.addSubtask(props.task.listID, props.task.id, text);
  }
</script>

<template>
  <li>
    <CheckableItem @onClick="toggleDetailView" @toggleChecked="handleSubtaskDone" :item="props.task"/>
    <TaskDetail v-show="showDetail" @addSubitem="addSubtask" :task="props.task"/>
  </li>
</template>

<style scoped>

li {
  list-style: none;
}

</style>
