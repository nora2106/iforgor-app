import {createRouter, createWebHistory} from 'vue-router'

import MainPage from './components/05_pages/MainPage.vue'
import ListPage from './components/05_pages/ListPage.vue'

const routes = [
    { path: '/', component: MainPage, name: 'Home' },
    { path: '/list/:id', component: ListPage, name: 'list' },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
