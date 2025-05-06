<!-- tab selector to select list type -->
<script setup lang="ts">
  import {ListType} from "@/components/00_utilities/types/list";
  import {TypeSelection} from "@/components/00_utilities/types/general";
  import {useUiStore} from "@/components/00_utilities/stores/uiStore";

  const uiStore = useUiStore();
  const types: {name: string; type: TypeSelection}[] = [{name: "To-Do", type: "task"}, {name: "Shopping", type: "shopping"}, {name: "Rezepte", type: "recipe"}]

  const selectType = (type: ListType) => {
    uiStore.setActiveType(type);
  }
</script>

<template>
  <div v-for="type in types" class="tab-wrapper">
    <button @click="selectType(type.type)">{{type.name}}</button>
  </div>
</template>



<style scoped>
.tab-wrapper {
  display: flex;
  flex-direction: row;
}
</style>
