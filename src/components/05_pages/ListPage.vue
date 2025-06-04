<!-- single list component -->
<script setup lang="ts">
  import TaskList from "@/components/03_organisms/TaskList.vue";
  import {useRoute} from "vue-router";
  import {useListStore} from "@/components/00_utilities/stores/listStore";
  import {useUiStore} from "@/components/00_utilities/stores/uiStore";
  import ListLayout from "@/components/04_templates/ListLayout.vue";
  import {MobileMenuButtons} from "@/components/00_utilities/types/general";
  import {useI18n} from "vue-i18n";
  import AddListOverlay from "@/components/02_molecules/AddListOverlay.vue";
  import {ref} from "vue";
  import ShoppingList from "@/components/03_organisms/ShoppingList.vue";

  const i18n = useI18n();
  const route = useRoute();
  const listID :number = parseInt(route.params.id.toString());
  const store = useListStore();
  const uiStore = useUiStore();
  const list = store.getListByID(listID)
  let type = list?.type;
  let showTabs = false;
  const tabOptions: {name: string; value: string}[] = [{name: i18n.t("tabs.all-tasks"), value: "allTasks"}, {name: i18n.t("tabs.assigned"), value: "assignedTasks"}]
  const openAddOverlay = ref<boolean>(false)

  const selectTaskTab = (value: string) => {

  }

  const toggleAddOverlay = () => {
    openAddOverlay.value = !openAddOverlay.value;
  }

  const buttons: MobileMenuButtons = [{icon: 'mdi:user-add', label: 'add-user', onClick: uiStore.toggleAddUserOverlay}, {icon: 'ph:plus-bold', label: 'add', onClick: toggleAddOverlay }, {icon: 'solar:settings-bold', label: 'settings', onClick: uiStore.toggleSettings}]

  uiStore.setMobileButtons(buttons);

  if(list && type) {
    if(type !== 'task') {
      showTabs = true;
    }
    // @todo get only unchecked items and differentiate between task items and shopping items
    uiStore.setCurrentListData(list.items.length, `item-${type}`);
  }

  const addItem = (text: string) => {
    if(list) {
      store.addItemToList(list.id, text);
    }
  }
</script>

<template>
  <ListLayout :hide="showTabs" :selection="selectTaskTab" :options="tabOptions" :title="list.name">
    <TaskList v-if="type === 'task'" :list="list"/>
    <ShoppingList v-if="type === 'shopping'" :list="list"/>
    <AddListOverlay @submit="addItem" :close="toggleAddItemOverlay" v-show="openAddOverlay"/>
  </ListLayout>
</template>

<style>

</style>
