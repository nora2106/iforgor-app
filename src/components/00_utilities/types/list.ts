export interface BaseListItem {
    id: number;
    type: 'task' | 'shopping';
    checked: boolean;
    text: string;
    listID: number
}

export interface SubTask {
    id: number;
    text: string,
    checked: boolean;
    parentID: number;
}

export interface TaskItem extends BaseListItem {
    type: 'task';
    dueDate?: string;
    subtasks: SubTask[];
}

export interface ShoppingItem extends BaseListItem {
    type: 'shopping';
    quantity?: string;
}

export type ListItem = TaskItem | ShoppingItem;

export type ListType = "task" | "shopping";

export interface List {
    id: number;
    type: ListType;
    name: string;
    items: ListItem[];
}
