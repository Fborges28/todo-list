'use client';

import {Button, Input, ButtonIcon } from "@/components";
import { FormEvent, useState } from 'react';
import styles from "./Todo.module.css";
import { ITodoItem } from "@/types";
import TodoItem from "./components/TodoItem";

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

  const setCompleteTodo = (todo: ITodoItem, completed: boolean) => {
    todo.completed = completed;
  }

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
        <Button type="submit">Create todo</Button>
      </form>
      <section className={styles.todoList}>
        <ul>
          {
            todos.map((todo, index) => (
              <TodoItem {...todo} key={todo.id} onComplete={(completed) => setCompleteTodo(todo, completed)}/>
            ))
          }
        </ul>
      </section>
    </>
  )
}
