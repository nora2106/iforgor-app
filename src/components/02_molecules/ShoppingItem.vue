<!-- single task with checkable item and optional subtasks-->
<script setup lang="ts">
import {ShoppingItem, TaskItem} from "@/components/00_utilities/types/list";
import CheckableItem from "@/components/01_atoms/CheckableItem.vue";
import TaskDetail from "@/components/02_molecules/TaskDetail.vue";
import {useListStore} from "@/components/00_utilities/stores/listStore";
import {ref} from "vue";

const props = defineProps<{ item: ShoppingItem }>();
const store = useListStore();
const quantityElement = ref<HTMLElement | null>(null);

const toggleItemChecked = (itemID: number) => {
  store.toggleItemChecked(props.item.listID, itemID);
}

const editItem = (newText?: string, quantity?: string) => {
  store.editListItem(props.item.listID, props.item.id, newText, quantity);
}

const deleteItem = () => {
  store.deleteItem(props.item.listID, props.item.id);
}

function validate(event : Event) {
  (event.target as HTMLInputElement).blur()
  if(quantityElement.value && quantityElement.value instanceof HTMLElement) {
    editItem(undefined, quantityElement.value.innerText);
  }
}

</script>

<template>
  <li>
    <CheckableItem @toggleChecked="toggleItemChecked" @edit="editItem" :editable="true" :listID="props.item.listID"
                   :item="props.item">
      <div class="info-container">
        <span ref="quantityElement" @focusout="validate" @keydown.enter="validate" contenteditable spellcheck="false">
          {{ props.item.quantity }}
        </span>
        <Icon icon="fluent:food-apple-24-regular"/>
      </div>
    </CheckableItem>
  </li>
</template>

<style lang="scss" scoped>

li {
  list-style: none;
  padding: .8rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: $spacer;
  align-items: center;
  width: 100%;
  border-bottom: 1.5px solid var(--page-bg);
}

.info-container {
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: $spacer;
  font-size: $font-size-smallest;
  font-weight: $font-weight-light;

  svg {
    font-size: 1.4rem;
    color: var(--icon-color);
  }
}

</style>
