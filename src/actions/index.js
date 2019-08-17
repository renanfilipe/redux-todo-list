export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_COMPLETED = 'SHOW_COMPLETED'
export const SHOW_INCOMPLETED = 'SHOW_INCOMPLETED'

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'


export const setVisibilityFilter = filter => ({
 type: SET_VISIBILITY_FILTER,
 filter,
})

export const addTodo = text => ({
 type: ADD_TODO,
 text,
})

export const removeTodo = id => ({
 type: REMOVE_TODO,
 id,
})

export const toggleTodo = id => ({
 type: TOGGLE_TODO,
 id,
})
