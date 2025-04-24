<!-- component template -->
<script setup lang="ts">
  import {TaskItem} from "@/components/00_utilities/types/list";
  import CheckableItem from "@/components/01_atoms/CheckableItem.vue";
  import AddListOverlay from "@/components/02_molecules/AddListOverlay.vue";

  const props = defineProps<{ task: TaskItem }>();
  const emits = defineEmits<{
    (e: 'addSubitem', text: string): void;
  }>();
  const handleSubtaskCreate = (text: string) => {
    emits('addSubitem', text);
  }

</script>

<template>
    <div>
        <CheckableItem :item="subtask" v-for="subtask in props.task.subtasks"/>
        <AddListOverlay @submit="handleSubtaskCreate"/>
    </div>
</template>

<style scoped>

</style>
