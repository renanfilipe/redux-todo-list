import React, { memo } from 'react'
import PropTypes from 'prop-types'

const Todo = ({ id, text, onClick, completed, onClickRemoveTodo }) =>
 <li
  id={id}
  style={{
   textDecoration: completed ? 'line-through' : 'none'
  }}
 >
  <span onClick={() => onClick(id)}>
   {text}
  </span>
  <button
   style={{ marginLeft: 5 }}
   type="button"
   onClick={() => onClickRemoveTodo(id)}
  >Remove</button>
 </li>

Todo.propTypes = {
 id: PropTypes.string.isRequired,
 text: PropTypes.string.isRequired,
 completed: PropTypes.bool.isRequired,
 onClick: PropTypes.func.isRequired,
 onClickRemoveTodo: PropTypes.func.isRequired,
}

export default memo(Todo)
