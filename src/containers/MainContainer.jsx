import React, { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, SHOW_ALL, SHOW_COMPLETED, SHOW_INCOMPLETED } from '../actions'
import { AddTodo } from '../components'
import TodoListContainer from './TodoListContainer'
import FooterContainer from './FooterContainer'

const MainContainer = () => {
 const dispatch = useDispatch()
 const { todos } = useSelector(mapStateToProps)
 const onClick = useCallback(
  text => {
   dispatch(addTodo(text))
  },
  [dispatch],
 )

 return (
  <>
   <AddTodo
    onClick={onClick}
   />
   <TodoListContainer todos={todos} />
   <FooterContainer />
  </>
 )
}

const filterTodos = (todos, visibilityFilter) => {
 const filteredTodos = {
  [SHOW_ALL]: () => todos,
  [SHOW_COMPLETED]: () => todos.filter(todo => todo.completed === true),
  [SHOW_INCOMPLETED]: () => todos.filter(todo => todo.completed === false),
 }

 return filteredTodos[visibilityFilter]()
}

const mapStateToProps = ({ todos, visibilityFilter }) => ({
 todos: filterTodos(todos, visibilityFilter)
})

export default memo(MainContainer)
