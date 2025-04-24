import { defineStore } from 'pinia'
import {computed, ref} from "vue";
import type { ListItem, List } from '../types/list'

export const useListStore = defineStore('list', () => {
    const lists = ref<List[]>([]);

    // getters
    const getListByID = computed(() => (listID: number) => lists.value.find(l => l.id === listID));
    const getListCount = computed(() => (type: string) => lists.value.filter(l => l.type === type).length);

    // add new list of a certain type
    function addList(name: string, type: 'task' | 'shopping') {
        lists.value.push({
            id: Date.now(),
            name,
            items: [],
            type
        });
    }

    // add new item to an existing list
    function addItemToList (listID: number, content: string){
        const list = lists.value.find(l => l.id === listID);
        if (list) {
            list.items.push({
                type: list.type,
                id: Date.now(),
                completed: false,
                text: content,
                listID,
                subtasks: []
            });
        }
    }

    // delete certain item from a list
    function deleteItem(listID: number, itemID: number){
        const list = lists.value.find(l => l.id === listID);
        const item = list?.items.find(i => i.id === itemID);

        if(item && list) {
            list.items = list.items.filter(item => item.id !== itemID);
        }
    }

    // toggle the item completion state
    function toggleItemCompleted(listID: number, itemID: number){
        const list = lists.value.find(l => l.id === listID);
        const item = list?.items.find(i => i.id === itemID);

        if(item) {
            item.completed = !item.completed;
        }
    }

    // edit the values of a certain list item
    function editItem(listID: number, itemID: number){
        const list = lists.value.find(l => l.id === listID);
        const item = list?.items.find(i => i.id === itemID);

        if(item) {
            // edit item
        }
    }

    // add a subtask to a task item
    function addSubtask(listID: number, itemID: number, subtaskTitle: string){
        const list = lists.value.find(l => l.id === listID);
        const taskItem = list?.items.find(i => i.id === itemID);

        if(taskItem && taskItem.type === 'task') {
            taskItem.subtasks.push({
                id: Date.now(),
                text: subtaskTitle,
                completed: false,
            })
        }

    }
        return {
            lists,
            getListCount,
            getListByID,
            addList,
            addItemToList,
            deleteItem,
            toggleItemCompleted,
            editItem,
            addSubtask
        }
    },
    {
        persist: true,
    })
