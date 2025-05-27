<!-- single task with checkable item and optional subtasks-->
<script setup lang="ts">
  import {TaskItem} from "@/components/00_utilities/types/list";
  import CheckableItem from "@/components/01_atoms/CheckableItem.vue";
  import TaskDetail from "@/components/02_molecules/TaskDetail.vue";
  import {useListStore} from "@/components/00_utilities/stores/listStore";
  import {ref} from "vue";

  const props = defineProps<{ task: TaskItem }>();
  const store = useListStore();
  const showDetail = ref<boolean>(false);

  const toggleDetailView = () => {
    showDetail.value = !showDetail.value;
  }

  const toggleTaskCompleted = (itemID: number, parentID?: number) => {
    // is subtask
    if(parentID) {
      store.toggleSubtaskChecked(props.task.listID, parentID, itemID);
    }
    // is task
    else {
      store.toggleItemChecked(props.task.listID, itemID);
    }
  }

  const deleteTask = (id: number, parentID?: number) => {
    // is subtask
    if(parentID) {
      store.deleteSubtask(props.task.listID, parentID, id);
    }
    // is task
    else {
      store.deleteItem(props.task.listID, id);
    }
  }

  const addSubtask = (text: string) => {
    store.addSubtask(props.task.listID, props.task.id, text);
  }



  const addTask = () => {

  }

  const editItem = (itemID: number, newText: string, parentItemID?: number) => {
    // is subtask
    if(parentItemID) {
      store.editSubtask(props.task.listID, parentItemID, itemID, newText);
    }
    // is item
    else {
      store.editListItem(props.task.listID, itemID, newText);
    }
  }

</script>

<template>
  <li>
    <CheckableItem @toggle-checked="toggleTaskCompleted" :toggleDetail="toggleDetailView" :listID="props.task.listID" :item="props.task"/>
  </li>
  <TaskDetail v-show="showDetail" @delete-subitem="deleteTask" @toggle-view="toggleDetailView" @add-subitem="addSubtask" :task="props.task"/>
</template>

<style lang="scss" scoped>

li {
  list-style: none;
  background-color: var(--element-color);
  padding: .8rem;
  border-radius: $border-radius-mobile;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: $font-size-small;

  --btn-bg-color: var(--component-bg);
  --btn-padding: 3px;
  --icon-font-size: 1.6rem;
}

</style>
