import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'

function TodoList() {
  const items = [1, 1, 1];  

  return (
    <div className='todo-list'>
      <input type='text' placeholder='What needs to be done?' />
        {items.map(item => <TodoItem />)}
    </div>
  )
}

export default TodoList