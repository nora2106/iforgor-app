export type TypeSelection = 'task' | 'shopping' | 'recipe';
export type Theme = 'light' | 'dark';
export type MobileMenuButtons = [ButtonConfig, ButtonConfig, ButtonConfig];
export type ButtonConfig =   { icon: string, label: string, onClick: () => void };
