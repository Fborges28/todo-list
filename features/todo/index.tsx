'use client';

import {Button, ButtonIcon } from "@/components";
import { FormEvent, useState } from 'react';
import styles from "./Todo.module.css";

interface ITodo {
  id: number;
  label: string;
  completed: boolean;
}

export default function Todo() {

  const [todoValue, setTodoValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (newTodo: string) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        label: newTodo,
        completed: false
      },
    ])
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(todoValue);
  }

  const handleChange = (e: FormEvent) => {
    const input = e.target as HTMLInputElement;
    setTodoValue(input.value);
  }

  return (
    <>
      <form id='todo-form' className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} value={todoValue} id="todo" name='todo' type="text" placeholder="Insert a new todo" onChange={handleChange}/>
        <Button type="submit">Submit</Button>
      </form>
      <section className={styles.todoList}>
        {
          todos.map((todo, index) => (
            <div className={styles.todo} key={index}>
              {todo.label}
            </div>
          ))
        }
      </section>
    </>
  )
}
