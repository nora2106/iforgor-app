<!-- a checkable list item -->
<script setup lang="ts">
import {ListItem} from "@/components/00_utilities/types/list";
import {computed, ref, watch} from "vue";

const props = defineProps<{ item: ListItem }>();
const emit = defineEmits<{
  (e: 'toggleChecked', itemID: number): void;
}>();
const isCompleted = computed(() => props.item.completed);
const isChecked = ref<boolean>(isCompleted.value);

watch(isChecked, () => {
  emit("toggleChecked", props.item.id);
})

</script>

<template>
    <input v-model="isChecked" :id="props.item.id" type="checkbox">
     {{props.item.text}}
</template>

<style scoped>

li {
  list-style: none;
}

</style>
