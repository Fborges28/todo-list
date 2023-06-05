import React from 'react'
import { TodoItem } from '@/components'
import { ITodoItem } from '@/types';
import styles from "./TodoList.module.css"

interface ITodoList {
  todos: Array<ITodoItem>;
  completeTodo: (todo: ITodoItem, completed: boolean) => void;
  removeTodo: (id: number) => void;
  editTodo: (id: number, text: string) => void;
}

function TodoList({todos, completeTodo, removeTodo, editTodo}: ITodoList) {
  return (
    <section className={styles.todoList}>
      <ul>
        {
          todos.map((todo, index) => (
            <TodoItem 
              {...todo} 
              key={todo.id} 
              onComplete={(completed) => completeTodo(todo, completed) }
              onConfirmEdit={(newValue: string) => editTodo(todo.id, newValue)} 
              onRemove={() => removeTodo(todo.id)} 
            />
          ))
        }
      </ul>
    </section>
  )
}

export default TodoList