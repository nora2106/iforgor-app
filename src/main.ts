import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import {router} from './router'
import { registerSW } from 'virtual:pwa-register'
registerSW({
    immediate: true,
    onOfflineReady() {
        console.log('App is ready to work offline')
    },
})
const pinia = createPinia();
const app = createApp(App);
app.use(router)
app.use(pinia);
app.mount('#app');
