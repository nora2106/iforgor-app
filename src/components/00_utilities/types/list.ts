export interface BaseListItem {
    id: number;
    type: 'task' | 'shopping';
    completed: boolean;
    text: string;
    listID: number
}

export interface SubTask {
    id: number;
    text: string,
    completed: boolean;
}

export interface TaskItem extends BaseListItem {
    type: 'task';
    dueDate?: string;
    subtasks: SubTask[];
}

export interface ShoppingItem extends BaseListItem {
    type: 'shopping';
    quantity?: number;
    unit?: string;
}

export type ListItem = TaskItem | ShoppingItem;

export type ListType = "task" | "shopping";

export interface List {
    id: number;
    type: ListType;
    name: string;
    items: ListItem[];
}
