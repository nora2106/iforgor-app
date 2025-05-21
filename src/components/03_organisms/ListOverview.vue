<script setup lang="ts">
import {computed, ref} from 'vue';
import ListPreview from "@/components/01_atoms/ListPreview.vue";
import {useListStore} from "@/components/00_utilities/stores/listStore";
import Button from "@/components/01_atoms/Button.vue";
import AddListOverlay from "@/components/02_molecules/AddListOverlay.vue";
import {useUiStore} from "@/components/00_utilities/stores/uiStore";
import type {List} from "@/components/00_utilities/types/list";
import ListWrapper from "@/components/02_molecules/ListWrapper.vue";

const listStore = useListStore();
const uiStore = useUiStore();
const openOverlay = ref<boolean>(false)
defineProps<{ lists: List[] }>();

const toggleAddListOverlay = () => {
  openOverlay.value = !openOverlay.value;
}

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
    <p v-if="lists.length === 0">No lists available</p>
    <ListWrapper>
      <ListPreview v-for="list in lists" :key="list.id">
        <router-link class="list-item__link" :to="'/list/' + list.id">
          {{list.name}}
        </router-link>
      </ListPreview>
    </ListWrapper>
    <Button :action="toggleAddListOverlay">Create list</Button>
    <AddListOverlay @submit="addNewList" :close="toggleAddListOverlay" v-show="openOverlay"/>
</template>

<style lang="scss" scoped>

.list-item__link {
  text-decoration: none;
}

</style>
