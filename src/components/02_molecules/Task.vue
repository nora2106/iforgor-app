<!-- single task with checkable item and optional subtasks-->
<script setup lang="ts">
  import {TaskItem} from "@/components/00_utilities/types/list";
  import CheckableItem from "@/components/01_atoms/CheckableItem.vue";
  import TaskDetail from "@/components/02_molecules/TaskDetail.vue";
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

  const addSubtask = (text: string) => {
    store.addSubtask(props.task.listID, props.task.id, text);
  }

</script>

<template>
  <li>
    <CheckableItem @toggleDetail="toggleDetailView" @toggleChecked="handleSubtaskDone" :listID="props.task.listID" :item="props.task"/>
    <TaskDetail v-show="showDetail" @addSubitem="addSubtask" :task="props.task"/>
  </li>
</template>

<style lang="scss" scoped>

li {
  list-style: none;
  background-color: var(--element-color);
  padding: .8rem;
  border-radius: $border-radius-mobile;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

</style>
