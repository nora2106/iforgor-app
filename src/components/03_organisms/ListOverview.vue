<script setup lang="ts">
import {computed, ref} from 'vue';
import ListPreview from "@/components/01_atoms/ListPreview.vue";
import {useListStore} from "@/components/00_utilities/stores/listStore";
import ButtonIcon from "@/components/01_atoms/ButtonIcon.vue";
import AddListOverlay from "@/components/02_molecules/AddListOverlay.vue";
import {useUiStore} from "@/components/00_utilities/stores/uiStore";

const listStore = useListStore();
const uiStore = useUiStore();
const openOverlay = ref<boolean>(false)

const listsByType = computed(() => {
  switch (uiStore.activeType) {
    case 'task':
    case 'shopping':
      return listStore.getListsByType(uiStore.activeType)
    case 'recipe':
      // add recipe store
    default:
      return []
  }
})

const toggleAddListOverlay = () => {
  openOverlay.value = !openOverlay.value;
}

const addNewList = (name: string) => {
  if (uiStore.activeType === 'recipe') {
    // add recipe store
  } else {
    listStore.addList(name, uiStore.activeType);
  }
  toggleAddListOverlay();
}
</script>

<template>
      <p v-if="listsByType.length === 0">No lists available</p>
      <ul>
        <ListPreview v-for="list in listsByType" :key="list.id">
          <router-link :to="'/list/' + list.id">
            {{list.name}}
          </router-link>
        </ListPreview>
      </ul>
  <ButtonIcon :action="toggleAddListOverlay">Create list</ButtonIcon>
  <AddListOverlay @submit="addNewList" :close="toggleAddListOverlay" v-show="openOverlay"/>
</template>

<style scoped>

</style>
