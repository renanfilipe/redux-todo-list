import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions'
import { generateRandomId } from '../utils'

const todos = (state = [], action) => {
 switch (action.type) {
  case ADD_TODO:
   return [
    ...state,
    {
     text: action.text,
     completed: false,
     id: generateRandomId(),
    }
   ]
  case REMOVE_TODO:
   return state.filter(todo => todo.id !== action.id)
  case TOGGLE_TODO:
   return state.map(todo => {
    if (todo.id === action.id) {
     return Object.assign({}, todo, { completed: !todo.completed })
    }
    return todo
   })
  default:
   return state
 }
}

export default todos
