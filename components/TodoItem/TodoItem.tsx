import { ITodoItem } from '@/types';
import {Button, ButtonIcon, Input} from "@/components";
import styles from "./TodoItem.module.css"; 
import React, { useState } from 'react'

interface TodoProps {
  onComplete: (completed: boolean) => void;
  onConfirmEdit: (newValue: string) => void;
  onRemove: () => void;
}

function TodoItem({label = "Item", completed = true, id, onComplete, onConfirmEdit, onRemove}: ITodoItem & TodoProps) {
  const [checked, setChecked] = useState<boolean>(completed);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [newValue, setNewValue] = useState<string>(label);

  const handleComplete = (e: React.ChangeEvent<HTMLInputElement>) => {
    onComplete && onComplete(e.target.checked);
    setChecked(e.target.checked);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewValue(e.target.value);
  }

  const handleConfirmEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    onConfirmEdit && onConfirmEdit(newValue);
    setEditMode(false);
  }

  const handleRemove = () => {
    onRemove && onRemove();
    setEditMode(false);
  }

  return (
    <li className={styles.todo}>
      {
        editMode ? (
          <section className={`${styles.todoEditMode} ${styles.todoRow}`}>
            <div className={`${styles.todoOptions}`}>
              <Input value={newValue} name="a" id="a" placeholder="a" type="text" onChange={handleChange}/>
              <Button onClick={handleConfirmEdit}>Confirmar</Button>
              <Button onClick={() => setEditMode(false)}>Cancelar</Button>
            </div>
          </section>
        ) : (
          <section className={`${styles.todoViewMode} ${styles.todoRow}`}>
            <div className={styles.todoInfo}>
              <input id={`completed-${id}`} type="checkbox" defaultChecked={checked} onChange={handleComplete}/>
              <label htmlFor={`completed-${completed}`} className={`${checked ? styles.todoLabelCompleted : ""}`}>{label}</label>
            </div>
            <div className={`${styles.todoOptions}`}>
              <ButtonIcon icon="edit" onClick={() => setEditMode(true)} />
              <ButtonIcon icon="trash" onClick={() => handleRemove()} />
            </div>
          </section>
        )
      }
    </li>
  )
}

export default TodoItem