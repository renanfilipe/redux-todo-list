import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  TodoTypes,
  TodoItem,
} from "../actions/types";
import { generateRandomId } from "../utils";

const todos = (
  state: TodoItem[] = [],
  action: TodoTypes,
): TodoItem[] => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: generateRandomId(),
        },
      ];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {...todo,  completed: !todo.completed};
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todos;
