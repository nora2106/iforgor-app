<script setup lang="ts">
import {ref} from 'vue';
import ListPreview from "@/components/01_atoms/ListPreview.vue";
import {useListStore} from "@/components/00_utilities/stores/listStore";
import {storeToRefs} from "pinia";
import ButtonIcon from "@/components/01_atoms/ButtonIcon.vue";
import AddListOverlay from "@/components/02_molecules/AddListOverlay.vue";

const store = useListStore();
const {lists} = storeToRefs(store);

const openOverlay = ref<boolean>(false)

const toggleAddListOverlay = () => {
  openOverlay.value = !openOverlay.value;
}

const addNewList = (name: string) => {
  // create new task list
  store.addList(name, "task");
  toggleAddListOverlay();
}
</script>

<template>
      <p v-if="lists.length === 0">No lists available</p>
      <ul>
        <ListPreview v-for="list in lists" :key="list.id">
          <router-link :to="'/lists/' + list.id">
          {{list.name}}
          </router-link>
        </ListPreview>
      </ul>
  <ButtonIcon :action="toggleAddListOverlay">Create list</ButtonIcon>
  <AddListOverlay @submit="addNewList" :close="toggleAddListOverlay" v-show="openOverlay"/>
</template>

<style scoped>

</style>
