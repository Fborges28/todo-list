'use client';

import {Button, Input } from "@/components";
import { FormEvent, useState } from 'react';
import styles from "@/shared/styles/Form.module.css";


interface IForm {
  city: string;
  age: string;
  name: string;
}

export default function ControlledForm() {

  const [formData, setFormData] = useState<IForm>({
    age: '',
    city: '',
    name: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('submit', formData);
  }

  const handleChange = (e: FormEvent) => {
    const target = e.target as HTMLInputElement;
    setFormData({
    ...formData,
      [target.name]: target.value
    });
  }

  return (
    <form id='my-form' className={styles.form} onSubmit={handleSubmit}>
      <Input value={formData.age} id="age" name='age' type="text" placeholder="Idade" onChange={handleChange}></Input>
      <Input value={formData.city} id="city" name='city' type="text" placeholder="Cidade" onChange={handleChange}></Input>
      <Input value={formData.name} id="name" name='name' type="text" placeholder="Nome" onChange={handleChange}></Input>
      <Button type="submit">Submit</Button>
    </form>
  )
}
