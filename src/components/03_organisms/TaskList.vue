<!-- single task list component -->
<script setup lang="ts">
import type {List} from "../00_utilities/types/list";
import {computed, ref} from "vue";
import TaskItem from "@/components/02_molecules/TaskItem.vue";
import {useListStore} from "@/components/00_utilities/stores/listStore";
import ListWrapper from "@/components/03_organisms/ListWrapper.vue";

const props = defineProps<{ list: List }>();
const tasks = computed(() => props.list.items);
const store = useListStore();

const addItem = (text: string) => {
  store.addItemToList(props.list.id, text);
}

</script>

<template>
  <ListWrapper>
    <TaskItem :task="task" v-for="task in tasks" :key="task.id">
      {{task.text}}
    </TaskItem>
  </ListWrapper>
</template>


<style lang="scss" scoped>

</style>
