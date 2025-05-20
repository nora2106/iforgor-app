import {defineStore} from "pinia";
import {ref} from "vue";
import {Theme} from "@/components/00_utilities/types/general";

export const useThemeStore = defineStore('theme', () => {
    const currentTheme = ref<Theme>('dark');

    function setTheme (type: Theme) {
        currentTheme.value = type;
        document.documentElement.setAttribute('data-theme', type);
    }

    return { currentTheme, setTheme}
});
