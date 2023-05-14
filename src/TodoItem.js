import React from 'react'
import './TodoItems.css'

function TodoItem() {
  return (
    <div className='todo-item'>
        <input type="checkbox" />
        To take out the trash
    </div>
  )
}

export default TodoItem