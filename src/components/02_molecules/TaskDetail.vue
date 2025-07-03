<!-- component template -->
<script setup lang="ts">
  import {TaskItem} from "@/components/00_utilities/types/list";
  import CheckableItem from "@/components/01_atoms/CheckableItem.vue";
  import AddListOverlay from "@/components/02_molecules/AddListOverlay.vue";
  import ButtonIcon from "@/components/01_atoms/ButtonIcon.vue";

  const props = defineProps<{ task: TaskItem }>();
  const emits = defineEmits<{
    (e: 'add-subitem', text: string, parentID: number): void;
    (e: 'delete-task', subtaskID?: number): void;
    (e: 'edit', id: number, text: string, parentID?: number): void;
    (e: 'toggle-view'): void;
  }>();
  const handleSubtaskCreate = (text: string, parentID: number) => {
    emits('add-subitem', text, parentID);
  }

  function handleDelete() {
    emits('delete-task');
  }

  function handleSubtaskDelete(subtaskID?: number) {
    emits('delete-task', subtaskID);
  }

  const handleToggleView = () => {
    emits('toggle-view');
  }

  const handleEdit = (id: number, text: string, parentID?: number) => {
    emits('edit', id, text, parentID );
  }

</script>

<template>
    <div class="container">
      <div class="parent">
        <CheckableItem :editable="true" :listID="props.task.listID" :item="props.task"/>
      </div>
      <ul class="subtasks">
        <li v-for="subtask in props.task.subtasks">
          <CheckableItem :editable="true" @edit="handleEdit" :parentItemID="props.task.id" :listID="props.task.listID" :item="subtask">
            <ButtonIcon class="btn-delete" :action="() => handleSubtaskDelete(subtask.id)" icon="solar:trash-bin-trash-bold"/>
          </CheckableItem>
        </li>
        <AddListOverlay @submit="handleSubtaskCreate"/>
      </ul>
      <div class="buttons">
        <ButtonIcon :action="handleToggleView" icon="ep:arrow-left-bold"/>
        <ButtonIcon :action="handleDelete" icon="solar:trash-bin-trash-bold"/>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  right: 0;
  background-color: var(--component-bg);
  display: flex;
  flex-direction: column;
  border-radius: $border-radius-mobile;
  z-index: 3;
}

li {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: $spacer;
  align-items: center;
  width: 100%;
  font-size: $font-size-small;

  --btn-bg-color: var(--component-bg);
  --btn-icon-color: var(--icon-color);
  --btn-padding: 3px;
  --icon-font-size: 1.4rem;

  .btn-delete {
    margin-left: auto;
  }
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: auto;
  margin-bottom: 2rem;
  margin-inline: 2rem;
}

.parent {
  background-color: var(--page-bg);
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: $spacer;
}

.subtasks {
  width: 100%;
  margin-block: 1rem;
  padding-left: 2rem;
  padding-right: 1rem;
  border-bottom: 1px solid var(--icon-color);
}

li {
  margin-block: .8rem;
}

</style>
