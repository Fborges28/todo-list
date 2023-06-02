'use client';

import {Button, Input } from "@/components";
import { FormEvent, useRef } from 'react';
import styles from "@/shared/styles/Form.module.css";

export default function FormByReference() {

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(formRef.current as HTMLFormElement);
    console.log(formData);
  }

  return (
    <form ref={formRef} id='my-form' className={styles.form} onSubmit={handleSubmit}>
      <Input id="age" name='age' type="text" placeholder="Idade"></Input>
      <Input id="city" name='city' type="text" placeholder="Cidade"></Input>
      <Input id="name" name='name' type="text" placeholder="Nome"></Input>
      <Input id="country" name='country' type="text" placeholder="País"></Input>
      <Button type="submit">Submit</Button>
    </form>
  )
}
