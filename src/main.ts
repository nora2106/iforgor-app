import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import {router} from './router'
import { createI18n } from 'vue-i18n'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { registerSW } from 'virtual:pwa-register'
import de from '../locales/de.json';
import en from '../locales/en.json';

registerSW({
    immediate: true,
    onOfflineReady() {
        console.log('App is ready to work offline')
    },
})
const pinia = createPinia();
const app = createApp(App);
const i18n = createI18n({
    locale: 'de',
    fallbackLocale: 'de',
    messages: { de, en },
});

pinia.use(piniaPluginPersistedstate);
const useArray = [pinia, router, i18n];
useArray.forEach((item)=>{
    app.use(item);
})
app.mount('#app');
