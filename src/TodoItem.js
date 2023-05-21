import React, { useState } from 'react'
import './TodoItems.css'

function TodoItem() {
  const [text, setText] = useState("Take out the trush");
  
  const [checked, setChecked] = useState(false);
  const onChackedboxClick = () => {
    setChecked(!checked)
  }

  return (
    <div className='todo-item'>
        <input type="checkbox" checked={checked} onClick={onChackedboxClick}/>
        <span className={checked ? 'delete': ""}>{text}</span>
        
    </div>
  )
}

export default TodoItem