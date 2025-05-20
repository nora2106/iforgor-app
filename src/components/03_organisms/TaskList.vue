<!-- single task list component -->
<script setup lang="ts">
import type {List} from "../00_utilities/types/list";
import {computed, ref} from "vue";
import Task from "@/components/02_molecules/Task.vue";
import AddListOverlay from "@/components/02_molecules/AddListOverlay.vue";
import ButtonIcon from "@/components/01_atoms/ButtonIcon.vue";
import {useListStore} from "@/components/00_utilities/stores/listStore";
import ListWrapper from "@/components/02_molecules/ListWrapper.vue";

const props = defineProps<{ list: List }>();
const tasks = computed(() => props.list.items);
const store = useListStore();
const openOverlay = ref<boolean>(false)

const toggleAddItemOverlay = () => {
  openOverlay.value = !openOverlay.value;
}

const addItem = (text: string) => {
  store.addItemToList(props.list.id, text);
  toggleAddItemOverlay();
}


</script>

<template>
  <ListWrapper>
    <Task @toggleCheckedItem="toggleItemCompleted" :task="task" v-for="task in tasks" :key="task.id">
      {{task.text}}
    </Task>
  </ListWrapper>
  <ButtonIcon :action="toggleAddItemOverlay">Add item</ButtonIcon>
  <AddListOverlay @submit="addItem" :close="toggleAddItemOverlay" v-show="openOverlay"/>
</template>


<style lang="scss" scoped>

</style>
