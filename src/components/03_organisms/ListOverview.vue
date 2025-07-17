<script setup lang="ts">
import {computed, ref} from 'vue';
import ListPreview from "@/components/01_atoms/ListPreview.vue";
import {useUiStore} from "@/components/00_utilities/stores/uiStore";
import type {List} from "@/components/00_utilities/types/list";
import ListWrapper from "@/components/03_organisms/ListWrapper.vue";
import {MobileMenuButtons} from "@/components/00_utilities/types/general";
import {useI18n} from "vue-i18n";

const uiStore = useUiStore();
const props = defineProps<{ lists: List[] }>();
const { t } = useI18n();
const listType = computed( () => t(`titles.title-${uiStore.activeListType}`));

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
</template>

<style lang="scss" scoped>

.list-item__link {
  text-decoration: none;
  width: 100%;
}

</style>
