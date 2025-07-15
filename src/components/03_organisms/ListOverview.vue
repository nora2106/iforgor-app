<script setup lang="ts">
import {computed, ref} from 'vue';
import ListPreview from "@/components/01_atoms/ListPreview.vue";
import {useListStore} from "@/components/00_utilities/stores/listStore";
import AddListOverlay from "@/components/02_molecules/AddListOverlay.vue";
import {useUiStore} from "@/components/00_utilities/stores/uiStore";
import type {List} from "@/components/00_utilities/types/list";
import ListWrapper from "@/components/03_organisms/ListWrapper.vue";
import {MobileMenuButtons} from "@/components/00_utilities/types/general";
import {useI18n} from "vue-i18n";

const listStore = useListStore();
const uiStore = useUiStore();
const openOverlay = ref<boolean>(false)
const props = defineProps<{ lists: List[] }>();
const { t } = useI18n();
const listType = computed( () => t(`titles.title-${uiStore.activeListType}`));

const toggleAddListOverlay = () => {
  openOverlay.value = !openOverlay.value;
}

const buttons: MobileMenuButtons = [{icon: 'mdi:user', label: 'profile', onClick: openProfile}, {icon: 'ph:plus-bold', label: 'add', onClick: toggleAddListOverlay }, {icon: 'solar:settings-bold', label: 'settings', onClick: openSettings}]
uiStore.setMobileButtons(buttons);

const addNewList = (name: string) => {
  if (uiStore.activeListType === 'recipe') {
    // add recipe store
  } else {
    listStore.addList(name, uiStore.activeListType);
  }
  toggleAddListOverlay();
}

function openProfile() {
  // @todo add open profile function to ui store?
  console.log('open profile')
}

function openSettings() {
  // @todo add open settings function to ui store?
  console.log('open settings')
}
</script>

<template>
    <ListWrapper>
      <router-link class="list-item__link" v-for="list in lists" :to="'/list/' + list.id" :key="list.id">
        <ListPreview>
            {{list.name}}
        </ListPreview>
      </router-link>
    </ListWrapper>
    <p v-if="!lists || lists.length === 0">{{ t('list.no-lists', {type: listType}) }}</p>
    <AddListOverlay @submit="addNewList" :close="toggleAddListOverlay" v-show="openOverlay"/>
</template>

<style lang="scss" scoped>

.list-item__link {
  text-decoration: none;
  width: 100%;
}

</style>
