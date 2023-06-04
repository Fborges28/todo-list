import { ITodoItem } from '@/types';
import {ButtonIcon} from "@/components";
import styles from "./TodoItem.module.css"; 
import React, { useState } from 'react'

interface TodoProps {
  onComplete: (completed: boolean) => void;
}

function TodoItem({label = "Item", completed = true, id, onComplete}: ITodoItem & TodoProps) {
  const [checked, setChecked] = useState<boolean>(completed);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onComplete && onComplete(e.target.checked);
    setChecked(e.target.checked);
  }

  return (
    <li className={styles.todo}>
      <div className={styles.todoInfo}>
        <input id={`completed-${id}`} type="checkbox" defaultChecked={checked} onChange={handleChange}/>
        <label htmlFor={`completed-${completed}`} className={`${checked ? styles.todoLabelCompleted : ""}`}>{label}</label>
      </div>
      <div className={`${styles.todoOptions}`}>
        <ButtonIcon icon="edit" onClick={() => {}} />
        <ButtonIcon icon="trash" onClick={() => {}} />
      </div>
    </li>
  )
}

export default TodoItem