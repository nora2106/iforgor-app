<!-- main page of the app -->
<script setup lang="ts">
import {useListStore} from "@/components/00_utilities/stores/listStore";
import {useUiStore} from "@/components/00_utilities/stores/uiStore";
import {computed, ref} from "vue";
import ListOverview from "@/components/03_organisms/ListOverview.vue";
import ListLayout from "@/components/04_templates/ListLayout.vue";
import {MobileMenuButtons, TypeSelection} from "@/components/00_utilities/types/general";
import {useI18n} from "vue-i18n";
import {ListType} from "@/components/00_utilities/types/list";
import AddListOverlay from "@/components/02_molecules/AddListOverlay.vue";

const i18n = useI18n();
const listStore = useListStore();
const uiStore = useUiStore();
const openOverlay = ref<boolean>(false);

const listsByType = computed(() => {
  switch (uiStore.activeListType) {
    case 'task':
    case 'shopping':
      uiStore.setCurrentListOverview(uiStore.activeListType, i18n.t(`titles.title-${uiStore.activeListType}`), listStore.getListsByType(uiStore.activeListType).length);
      return listStore.getListsByType(uiStore.activeListType)
    case 'recipe':
      uiStore.setCurrentListOverview('recipe', i18n.t(`titles.title-${uiStore.activeListType}`), 0);
      // add recipe store and return recipes
      break;
    default:
      return [];
  }
})
uiStore.setActiveContext("overview");

const selectListType = (value: ListType) => uiStore.setActiveListType(value)

const options: {name: string; value: TypeSelection}[] = [{name: i18n.t("tabs.task"), value: "task"}, {name: i18n.t("tabs.shopping"), value: "shopping"}, {name: i18n.t("tabs.recipes"), value: "recipe"}]

const toggleAddListOverlay = () => {
  openOverlay.value = !openOverlay.value;
}

function openProfile() {
  // @todo add open profile function to ui store?
  console.log('open profile')
}

const buttons: MobileMenuButtons = [{icon: 'mdi:user', label: 'profile', onClick: openProfile}, {icon: 'ph:plus-bold', label: 'add', onClick: toggleAddListOverlay }, {icon: 'solar:settings-bold', label: 'settings', onClick: uiStore.toggleSettings}]
uiStore.setMobileButtons(buttons);

const addNewList = (name: string) => {
  if (uiStore.activeListType === 'recipe') {
    // add recipe store
  } else {
    listStore.addList(name, uiStore.activeListType);
  }
  toggleAddListOverlay();
}
</script>

<template>
  <ListLayout @toggleAdd="toggleAddListOverlay" :showTabs="true" :selection="selectListType" :options="options" :title="''">
    <div class="list-wrapper">
      <ListOverview :lists="listsByType"/>
      <AddListOverlay @submit="addNewList" v-show="openOverlay"/>
    </div>
  </ListLayout>
</template>

<style lang="scss" scoped>
.list-wrapper {
  width: 100%;
}
</style>
