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

    const settingsContext = ref<'task' | 'shopping' | null>(null);
    function setSettingsContext(type: 'task' | 'shopping') {
        settingsContext.value = type;
    }

    const settingsOpen = ref(false);
    function toggleSettings() {
        settingsOpen.value = !settingsOpen;
    }

    const addUserOverlayOpen = ref(false);
    function toggleAddUserOverlay() {
        settingsOpen.value = !addUserOverlayOpen;
    }

    const currentTitle = ref('');
    function setCurrentTitle(title: string) {
        currentTitle.value = title;
    }

    const currentListData = ref<{count: number, type: 'list' | 'recipe' |'task' | 'item-task' | 'item-shopping'}>({count: 0, type: 'list'});
    function setCurrentListData(Count: number, Type: 'list' | 'recipe' |'task' | 'item-task' | 'item-shopping') {
        currentListData.value = {count: Count, type: Type};
    }

    return {
        activeListType,
        setActiveListType,
        mobileButtons,
        setMobileButtons,
        settingsContext,
        setSettingsContext,
        settingsOpen,
        toggleSettings,
        addUserOverlayOpen,
        toggleAddUserOverlay,
        currentTitle,
        setCurrentTitle,
        currentListData,
        setCurrentListData
    }
});
