import { ITodoItem } from '@/types';
import React from 'react'

function TodoItem({label, completed, id}: ITodoItem) {
  return (
    <li>
      <div className="todo-info">
        <input id={`completed-${id}`} type="checkbox" checked={completed}/>
        <label htmlFor={`completed-${completed}`}>{label}</label>
      </div>
    </li>
  )
}

export default TodoItem