'use client';

import {Button, ButtonIcon } from "@/components";
import { FormEvent, useState } from 'react';
import styles from "../shared/Form.module.css";


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
      <input className={styles.input} value={formData.age} name='age' type="text" placeholder="Idade" onChange={handleChange}/>
      <input className={styles.input} value={formData.city} name='city' type="text" placeholder="Cidade" onChange={handleChange}/>
      <input className={styles.input} value={formData.name} name='name' type="text" placeholder="Nome" onChange={handleChange}/>
      <Button type="submit">Submit</Button>
    </form>
  )
}
