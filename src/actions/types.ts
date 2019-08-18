export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETED = "SHOW_COMPLETED";
export const SHOW_INCOMPLETED = "SHOW_INCOMPLETED";

export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export type FilterTypes =
  | typeof SHOW_ALL
  | typeof SHOW_COMPLETED
  | typeof SHOW_INCOMPLETED;

interface SetVisibilityFilter {
  type: typeof SET_VISIBILITY_FILTER;
  filter: FilterTypes;
}

interface AddTodo {
  type: typeof ADD_TODO;
  text: string;
}

interface RemoveTodo {
  type: typeof REMOVE_TODO;
  id: string;
}

interface ToggleTodo {
  type: typeof TOGGLE_TODO;
  id: string;
}

export interface TodoItem {
  text: string;
  completed: boolean;
  id: string;
}

export interface Store {
  visibilityFilter: FilterTypes;
  todos: TodoItem[];
}

export type TodoTypes = AddTodo | RemoveTodo | ToggleTodo;
export type VisibilityFilterTypes = SetVisibilityFilter;
