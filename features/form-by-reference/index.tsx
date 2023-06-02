'use client';

import {Button } from "@/components";
import { FormEvent, useRef } from 'react';
import styles from "../shared/Form.module.css";

export default function FormByReference() {

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(formRef.current as HTMLFormElement);
    console.log(formData);
  }

  return (
    <form ref={formRef} id='my-form' className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.input} name='age' type="text" placeholder="Idade"/>
      <input className={styles.input} name='city' type="text" placeholder="Cidade"/>
      <input className={styles.input} name='name' type="text" placeholder="Nome"/>
      <input className={styles.input} name='country' type="text" placeholder="País"/>
      <Button type="submit">Submit</Button>
    </form>
  )
}
