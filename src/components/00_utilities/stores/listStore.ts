import {defineStore} from 'pinia'
import {computed, ref} from "vue";
import type {List, SubTask, TaskItem, ListType} from '../types/list'

export const useListStore = defineStore('list', () => {
        const lists = ref<List[]>([]);

        // getters
        const getListByID = computed(() => (listID: number) => lists.value.find(l => l.id === listID));
        const getListsByType = computed(() => (type: ListType) => lists.value.filter(l => l.type === type));
        const getListCount = computed(() => (type: string) => lists.value.filter(l => l.type === type).length);
        function getCompletedItemCount(id: number) {
            return computed(() => {
                const list = lists.value.find(l => l.id === id)
                return list ? list.items.filter(i => i.checked).length : 0
            })
        }

        // add new list of a certain type
        function addList(name: string, type: ListType) {
            lists.value.push({
                id: Date.now(),
                name,
                items: [],
                type
            });
        }

        // add new item to an existing list
        function addItemToList(listID: number, content: string) {
            const list = lists.value.find(l => l.id === listID);
            if (list) {
                list.items.push({
                    type: list.type,
                    id: Date.now(),
                    checked: false,
                    text: content,
                    listID,
                    subtasks: []
                });
            }
        }

        // delete certain item from a list
        function deleteItem(listID: number, itemID: number) {
            const list = lists.value.find(l => l.id === listID);
            const item = list?.items.find(i => i.id === itemID);

            if (item && list) {
                list.items = list.items.filter(item => item.id !== itemID);
            }
        }

        // toggle the item completion state
        function toggleItemChecked(listID: number, itemID: number) {
            console.log('check')
            const list = lists.value.find(l => l.id === listID);
            const item = list?.items.find(i => i.id === itemID);
            if (item) {
                item.checked = !item.checked;
            }
        }

        // edit content or values of a list item (shopping or task)
        function editListItem(listID: number, itemID: number, newText?: string, quantity?: number) {
            const list = lists.value.find(l => l.id === listID);
            const item = list?.items.find(i => i.id === itemID);
            if (!item) {
                return;
            }
            if (item.type === 'task') {
                // @todo add due date, assignee, repeat (reminders?)
                if(newText) {
                    item.text = newText;
                }
            } else {
                // @todo add unit edit
                if(newText) {
                    item.text = newText;
                }
                if(quantity) {
                    item.quantity = quantity;
                }
            }
        }

        // edit content of a subtask
        function editSubtask(listID: number, itemID: number, subtaskID: number, newText: string) {
            const list = lists.value.find(l => l.id === listID);
            const item = list?.items.find((i): i is TaskItem => i.type === 'task' && i.id === itemID);
            const subtask = item?.subtasks.find(i => i.id === subtaskID);
            if(subtask) {
                subtask.text = newText;
            }
        }

        // toggle the subtask completion state
        function toggleSubtaskChecked(listID: number, itemID: number, subtaskID: number) {
            const list = lists.value.find(l => l.id === listID);
            const item = list?.items.find((i): i is TaskItem => i.type === 'task' && i.id === itemID);
            const subtask = item?.subtasks.find(i => i.id === subtaskID);
            if (item && subtask) {
                subtask.checked = !subtask.checked;
            }
        }

        // add a subtask to a task item
        function addSubtask(listID: number, itemID: number, subtaskTitle: string) {
            const list = lists.value.find(l => l.id === listID);
            const taskItem = list?.items.find(i => i.id === itemID);
            if (taskItem && taskItem.type === 'task') {
                taskItem.subtasks.push({
                    id: Date.now(),
                    text: subtaskTitle,
                    checked: false,
                    parentID: taskItem.id
                })
            }
        }

        // delete a subtask from a task item
        function deleteSubtask(listID: number, itemID: number, subtaskID: number) {
            const list = lists.value.find(l => l.id === listID);
            const item = list?.items.find((i): i is TaskItem => i.type === 'task' && i.id === itemID);
            console.log(item)
            const subtask = item?.subtasks.find(i => i.id === subtaskID);
            if(item && subtask) {
                item.subtasks = item.subtasks.filter(subtask => subtask.id !== subtaskID);
            }
        }

        return {
            lists,
            getListCount,
            getListByID,
            getListsByType,
            addList,
            addItemToList,
            deleteItem,
            toggleItemChecked,
            editListItem,
            editSubtask,
            addSubtask,
            deleteSubtask,
            toggleSubtaskChecked,
            getCompletedItemCount
        }
    },
    {
        persist: true,
    })
