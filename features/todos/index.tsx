'use client';

import {Button, Input, TodoItem } from "@/components";
import { FormEvent, useState } from 'react';
import styles from "./Todo.module.css";
import { ITodoItem } from "@/types";
import TodoList from "@/components/TodoList/TodoList";

export default function Todos() {

  const [todoValue, setTodoValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodoItem[]>([]);

  const addTodo = (newTodoValue: string) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        label: newTodoValue,
        completed: false
      },
    ])
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id: number, newValue: string) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
          ...todo,
            label: newValue,
          };
        }
        return todo;
      })
    )
  }

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
      <TodoList todos={todos} completeTodo={setCompleteTodo} removeTodo={removeTodo} editTodo={editTodo}/>
    </>
  )
}
