import React, { useCallback, memo } from 'react'
import { useDispatch } from 'react-redux'
import { TodoList } from '../components'
import { toggleTodo, removeTodo } from '../actions'

const TodoListContainer = ({ todos }) => {
 const dispatch = useDispatch()
 const onClick = useCallback(id => dispatch(toggleTodo(id)), [dispatch])
 const onClickRemoveTodo = useCallback(id => dispatch(removeTodo(id)), [dispatch])
 const formatedTodos = todos.map(todo => ({ ...todo, onClick, onClickRemoveTodo }))

 return <TodoList todos={formatedTodos} />
}

export default memo(TodoListContainer)
