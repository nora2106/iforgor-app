import {defineStore} from "pinia";
import {ref} from "vue";
import type {ListType} from "@/components/00_utilities/types/list";
import {MobileMenuButtons, TypeSelection} from "@/components/00_utilities/types/general";

export const useUiStore = defineStore('ui', () => {
    const activeListType = ref<TypeSelection>('task');
    function setActiveListType (type: ListType) { activeListType.value = type}

    const activeContext = ref<'overview' | 'list'>('overview')
    function setActiveContext (context: 'overview' | 'list') {activeContext.value = context}

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
        addUserOverlayOpen.value = !addUserOverlayOpen;
    }

    const currentListOverview = ref<{
        type: TypeSelection,
        title: string
        count: number,
    }>({type: 'task', title: '', count: 0})

    function setCurrentListOverview(Type: TypeSelection, Title: string, Count: number) {
        currentListOverview.value = {type: Type, title: Title, count: Count};
    }

    const currentListData = ref<{
        type: 'list' |'item-task' | 'item-shopping' | 'recipe',
        title: string
        count: number,
        checkedCount: number
    }>()
    function setCurrentListData(Type: 'list' |'item-task' | 'item-shopping' | 'recipe', Title: string, Count: number, CheckedItems: number) {
        currentListData.value = {type: Type, title: Title, count: Count, checkedCount: CheckedItems};
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
        currentListData,
        setCurrentListData,
        currentListOverview,
        setCurrentListOverview,
        activeContext,
        setActiveContext
    }
});
