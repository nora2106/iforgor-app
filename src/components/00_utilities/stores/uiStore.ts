import {defineStore} from "pinia";
import {ref} from "vue";
import type {ListType} from "@/components/00_utilities/types/list";
import {MobileMenuButtons, TypeSelection} from "@/components/00_utilities/types/general";

export const useUiStore = defineStore('ui', () => {
    const activeListType = ref<TypeSelection>('task');
    function setActiveListType (type: ListType) { activeListType.value = type}

    const mobileButtons = ref<MobileMenuButtons>();
    function setMobileButtons(btns: MobileMenuButtons) {
        mobileButtons.value = btns;
    }

    return { activeListType, setActiveListType, mobileButtons, setMobileButtons}
});
