import {createRouter, createWebHistory} from 'vue-router'

import MainPage from './components/05_pages/MainPage.vue'
import ListView from './components/05_pages/ListView.vue'

const routes = [
    { path: '/', component: MainPage },
    { path: '/list/:id', component: ListView },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
