<!-- a checkable list item -->
<script setup lang="ts">
import {ListItem} from "@/components/00_utilities/types/list";
import {computed, ref, watch} from "vue";
import {useListStore} from "@/components/00_utilities/stores/listStore";
import { isRegExp } from "@vue/shared";

const props = defineProps<{ item: ListItem, listID: number, parentItemID?: number }>();
const emit = defineEmits<{
  (e: 'toggleChecked', itemID: number): void;
  (e: 'toggleDetail'): void;
  (e: 'delete', itemID: number): void;
  (e: 'edit', itemID: number, newText: string, quantity?: string, parentItemID?: number): void;
}>();
const isChecked = ref<boolean>(computed(() => props.item.checked).value);
const store = useListStore();

const toggleItemCompleted = (itemID: number, parentID?: number) => {
  // is subtask
  if(parentID) {
    store.toggleSubtaskChecked(props.listID, parentID, itemID);
  }
  // is item
  else {
    store.toggleItemChecked(props.listID, itemID);
  }
}

const toggleEdit = () => {
  // open edit window
}

const editItem = (itemID: number, newText: string, parentItemID?: number, quantity?: number) => {
  // is subtask
  if(parentItemID) {
    store.editSubtask(props.item.listID, parentItemID, itemID, newText);
  }
  // is item
  else {
    store.editListItem(props.item.listID, itemID, newText, quantity);
  }
}

const deleteTask = (itemID: number, parentItemID?: number) => {
  // is subtask
  if(parentItemID) {
    store.deleteSubtask(props.listID, parentItemID, itemID);
  }
  // is item
  store.deleteItem(props.listID, itemID);
}

watch(isChecked, () => {
  toggleItemCompleted(props.item.id, props.parentItemID);
})

// @todo add swipes for checking and deleting

</script>

<template>
    <input v-model="isChecked" :id="props.item.id" type="checkbox">
    <span @click="emit('toggleDetail')">{{props.item.text}}</span>
    <span @click="toggleEdit"> Edit</span>
</template>

<style lang="scss" scoped>

li {
  list-style: none;
}

</style>
