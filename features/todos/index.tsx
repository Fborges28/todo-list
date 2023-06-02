'use client';

import {Button, Input, ButtonIcon } from "@/components";
import { FormEvent, useState } from 'react';
import styles from "./Todo.module.css";
import { ITodoItem } from "@/types";

export default function Todos() {

  const [todoValue, setTodoValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodoItem[]>([]);

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
        <Input value={todoValue} id="todo" name='todo' type="text" placeholder="Insert a new todo" onChange={handleChange}/>
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
