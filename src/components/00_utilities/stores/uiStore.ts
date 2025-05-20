import {defineStore} from "pinia";
import {ref} from "vue";
import type {ListType} from "@/components/00_utilities/types/list";
import {TypeSelection} from "@/components/00_utilities/types/general";

export const useUiStore = defineStore('ui', () => {
    const activeListType = ref<TypeSelection>('task');
    function setActiveListType (type: ListType) { activeListType.value = type}

    return { activeListType, setActiveListType}
});
