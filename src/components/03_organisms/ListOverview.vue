<!-- list overview of all lists of the selected type -->
<script lang="ts">
import {defineComponent, ref} from 'vue';
import ListPreview from "@/components/01_atoms/ListPreview.vue";
import {useListStore} from "@/components/00_utilities/stores/listStore";
import {storeToRefs} from "pinia";
import ButtonIcon from "@/components/01_atoms/ButtonIcon.vue";
import AddListOverlay from "@/components/02_molecules/AddListOverlay.vue";

export default defineComponent({
  name: 'ListOverview',
  setup() {
    const store = useListStore();
    const {lists} = storeToRefs(store);
    const openOverlay = ref<boolean>(false)

    const addNewList = (name: string) => {
      // create new task list
      // @todo replace "task" with dynamic list type
      store.addList(name, "task");
      toggleAddListOverlay();
    }

    const toggleAddListOverlay = () => {
      openOverlay.value = !openOverlay.value;
    }

    return {
      lists,
      addNewList,
      toggleAddListOverlay,
      openOverlay
    }
  },
  components: {
    AddListOverlay,
    ListPreview,
    ButtonIcon,
  }

});
</script>

<template>
    <div>
      <p v-if="lists.length === 0">No lists available</p>
      <ul>
        <ListPreview v-for="list in lists" :key="list.id">
          {{list.name}}
        </ListPreview>
      </ul>
    </div>
  <ButtonIcon :action="toggleAddListOverlay">Create list</ButtonIcon>
  <AddListOverlay @submit="addNewList" :close="toggleAddListOverlay" v-show="openOverlay"/>
</template>

<style scoped>

</style>
