import {
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  TodoTypes,
  VisibilityFilterTypes,
  FilterTypes,
} from "./types";

export const setVisibilityFilter = (
  filter: FilterTypes,
): VisibilityFilterTypes => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});

export const addTodo = (text: string): TodoTypes => ({
  type: ADD_TODO,
  text,
});

export const removeTodo = (id: string): TodoTypes => ({
  type: REMOVE_TODO,
  id,
});

export const toggleTodo = (id: string): TodoTypes => ({
  type: TOGGLE_TODO,
  id,
});
