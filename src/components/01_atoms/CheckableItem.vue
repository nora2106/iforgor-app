<!-- a checkable list item -->
<script setup lang="ts">
import {ListItem} from "@/components/00_utilities/types/list";
import {computed, ref, watch} from "vue";
import {useListStore} from "@/components/00_utilities/stores/listStore";
import { isRegExp } from "@vue/shared";
import ButtonIcon from "@/components/01_atoms/ButtonIcon.vue";

const props = defineProps<{ item: ListItem, listID: number, parentItemID?: number, toggleDetail?: void }>();

const emits = defineEmits<{
  (e: 'delete-item', id: number, parentID?: number): void;
  (e: 'toggle-checked', id: number, parentID?: number): void;
}>();

const isChecked = ref<boolean>(computed(() => props.item.checked).value);

const toggleEdit = () => {
  console.log('edit');
  // open edit window
}

const handleDelete = () => {
  emits('delete-item', props.item.id, props.parentItemID);
}

watch(isChecked, () => {
  emits("toggle-checked", props.item.id, props.parentItemID);
})

// @todo add swipes for checking and deleting

</script>

<template>
    <input class="checkbox" v-model="isChecked" :id="props.item.id" type="checkbox">
    <span>{{props.item.text}}</span>
    <slot/>
</template>

<style lang="scss" scoped>

.checkbox {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  background-color: transparent;
  width: 1.4rem;
  height: 1.4rem;

  &:after {
    content: '';
    border: .3rem solid var(--icon-color);
    border-radius: 100%;
    width: 100%;
    height: 100%;
    display: inline-block;
  }

  &:checked {
    &:after {
      width: 1.5rem;
      height: 1.5rem;
      background-color: var(--icon-color);
      mask: url('/img/icons/check.svg') no-repeat center;
      -webkit-mask: url('/img/icons/check.svg') no-repeat center;
      transform: scale(1.5);
    }
  }

  &:hover {
    cursor: pointer;;
  }
}

</style>
