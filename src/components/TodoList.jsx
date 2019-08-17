import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos }) =>
 <ul>
  {todos.map(todo =>
   <Todo {...todo} key={todo.id} />
  )}
 </ul>

TodoList.propTypes = {
 todos: PropTypes.arrayOf(
  PropTypes.shape({
   id: PropTypes.string.isRequired,
   text: PropTypes.string.isRequired,
   completed: PropTypes.bool.isRequired,
   onClick: PropTypes.func.isRequired,
   onClickRemoveTodo: PropTypes.func.isRequired,
  })
 )
}

TodoList.defaultProps = {
 todos: [],
}

export default memo(TodoList)
