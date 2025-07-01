<!-- single task with checkable item and optional subtasks-->
<script setup lang="ts">
  import {TaskItem} from "@/components/00_utilities/types/list";
  import CheckableItem from "@/components/01_atoms/CheckableItem.vue";
  import TaskDetail from "@/components/02_molecules/TaskDetail.vue";
  import {useListStore} from "@/components/00_utilities/stores/listStore";
  import {ref} from "vue";
  import ButtonIcon from "@/components/01_atoms/ButtonIcon.vue";

  const props = defineProps<{ task: TaskItem }>();
  const store = useListStore();
  const showDetail = ref<boolean>(false);

  const toggleDetailView = () => {
    showDetail.value = !showDetail.value;
  }

  // @todo watch changes in store
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

  const deleteTask = (subtaskID?: number) => {
    // is subtask
    if(subtaskID) {
      store.deleteSubtask(props.task.listID, subtaskID, props.task.id);
    }
    // is task
    else {
      store.deleteItem(props.task.listID, props.task.id);
      toggleDetailView();
    }
  }

  const addSubtask = (text: string) => {
    store.addSubtask(props.task.listID, props.task.id, text);
  }

  const editTask = (itemID: number, newText: string, parentItemID?: number) => {
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
    <CheckableItem @delete-item="deleteTask" @toggle-checked="toggleTaskCompleted" :listID="props.task.listID" :item="props.task">
      <ButtonIcon class="btn-detail" :action="toggleDetailView" icon="bi:three-dots"/>
    </CheckableItem>
  </li>
  <TaskDetail @delete-task="deleteTask" v-show="showDetail" @toggle-view="toggleDetailView" @add-subitem="addSubtask" :task="props.task"/>
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

.btn-detail {
  --btn-icon-color: var(--icon-color);
  --icon-font-size: 1.4rem;
  --btn-size: auto;
  --btn-padding: .3rem;
}

.btn-delete {
  margin-left: auto;
}

</style>
