<!-- single task list component -->
<script setup lang="ts">
import type {List} from "../00_utilities/types/list";
import {computed, ref} from "vue";
import TaskItem from "@/components/02_molecules/TaskItem.vue";
import {useListStore} from "@/components/00_utilities/stores/listStore";
import ListWrapper from "@/components/03_organisms/ListWrapper.vue";
import ShoppingItem from "@/components/02_molecules/ShoppingItem.vue";

const props = defineProps<{ list: List }>();
const items = computed(() => props.list.items);

</script>

<template>
  <ListWrapper>
    <ShoppingItem :item="item" v-for="item in items" :key="item.id">
      {{item.text}}
    </ShoppingItem>
  </ListWrapper>
</template>


<style lang="scss" scoped>

</style>
