import {defineStore} from "pinia";
import {ref} from "vue";
import type {ListType} from "@/components/00_utilities/types/list";
import {TypeSelection} from "@/components/00_utilities/types/general";

export const useUiStore = defineStore('ui', () => {
    const activeType = ref<TypeSelection>('task');
    function setActiveType (type: ListType) { activeType.value = type}

    return { activeType, setActiveType}
});
