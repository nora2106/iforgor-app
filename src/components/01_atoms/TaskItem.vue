<!-- single task item with optional subtasks-->
<script setup lang="ts">
import {TaskItem} from "@/components/00_utilities/types/list";
import {computed, ref, watch} from "vue";

const props = defineProps<{ task: TaskItem }>();
const emit = defineEmits<{
  (e: 'toggleChecked', itemID: number): void;
}>();
const isCompleted = computed(() => props.task.completed);
const isChecked = ref<boolean>(isCompleted.value);

watch(isChecked, () => {
  emit("toggleChecked", props.task.id);
})

</script>

<template>
    <li>
      <input v-model="isChecked" :id="props.task.id" type="checkbox">
      <label :for="props.task.id">
        <slot/>
      </label>
    </li>
</template>

<style scoped>

li {
  list-style: none;
}

</style>
