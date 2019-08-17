import React, { useState, memo } from 'react'
import PropTypes from 'prop-types'

const AddTodo = ({ onClick }) => {
 const [inputValue, setInputValue] = useState('')
 const onChange = e => setInputValue(e.target.value)
 const localOnClick = () => {
  if (inputValue === '') {
   return;
  }
  onClick(inputValue.trim())
  setInputValue('')
 }

 return (
  <>
   <input
    type='text'
    value={inputValue}
    onChange={onChange}
   />
   <button
    type='button'
    onClick={localOnClick}
   >
    Add Todo
   </button>
  </>
 )
}

AddTodo.propTypes = {
 onClick: PropTypes.func.isRequired,
}

export default memo(AddTodo)
