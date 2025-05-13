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
  <div class="tab-wrapper">
    <div v-for="type in types">
      <button @click="selectType(type.type)">{{type.name}}</button>
    </div>
  </div>
</template>



<style scoped>
.tab-wrapper {
  display: flex;
  flex-direction: row;
}
</style>
