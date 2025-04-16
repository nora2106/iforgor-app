import { defineStore } from 'pinia'
import {ref} from "vue";
import ListItem from "@/components/01_atoms/ListItem.vue";

interface BaseListItem {
    id: number;
    type: 'task' | 'shopping';
    completed: boolean;
    text: string;
    listID: number
}

interface SubTask {
    id: number;
    text: string,
    completed: boolean;
}

interface TaskItem extends BaseListItem {
    type: 'task';
    dueDate?: string;
    subtasks: SubTask[];
}

interface ShoppingItem extends BaseListItem {
    type: 'shopping';
    quantity?: number;
    unit?: string;
}

type ListItem = TaskItem | ShoppingItem;

interface List {
    id: number;
    type: 'task' | 'shopping';
    name: string;
    items: ListItem[];
}

export const useListStore = defineStore('list', () => {
    const lists = ref<List[]>([]);

    // add new list of a certain type
    const addList = (name: string, type: 'task' | 'shopping') => {
        lists.value.push({
            id: Date.now(),
            name,
            items: [],
            type
        });
    };

    // add new item to an existing list
    const addItemToList = (listID: number, content: string) => {
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
    };

    // delete certain item from a list
    const deleteItem = (listID: number, itemID: number) => {
        const list = lists.value.find(l => l.id === listID);
        const item = list?.items.find(i => i.id === itemID);

        if(item && list) {
            list.items = list.items.filter(item => item.id !== itemID);
        }
    }

    // toggle the item completion state
    const toggleItemCompleted = (listID: number, itemID: number) => {
        const list = lists.value.find(l => l.id === listID);
        const item = list?.items.find(i => i.id === itemID);

        if(item) {
            item.completed = !item.completed;
        }
    }

    // edit the values of a certain list item
    const editItem = (listID: number, itemID: number) => {
        const list = lists.value.find(l => l.id === listID);
        const item = list?.items.find(i => i.id === itemID);

        if(item) {
            // edit item
        }
    }

    // add a subtask to a task item
    const addSubtask = (listID: number, itemID: number, subtaskTitle: string) => {
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
})
