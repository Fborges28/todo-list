'use client';

import {Button, Input, FormValidation } from "@/components";
import { FormEvent, useState } from 'react';
import styles from "@/shared/styles/Form.module.css";
import { IForm } from "@/types";

interface IFormValidationProps {
  age: {
    isValid: boolean;
    message: string;
  };
}

export default function ControlledForm() {

  const [formData, setFormData] = useState<IForm>({
    age: '',
    city: '',
    name: ''
  });

  const [formValidation, setFormValidation] = useState<IFormValidationProps>({
    age: {
      isValid: false,
      message: 'Campo inválido'
    }
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

    setFormValidation({
      ...formValidation,
      [target.name]: {
        isValid: true,
      }
    })
  }

  return (
    <form id='my-form' className={styles.form} onSubmit={handleSubmit}>
      <FormValidation error={!formValidation.age.isValid} errorMessage={formValidation.age.message}>
        <Input value={formData.age} id="age" name='age' type="text" placeholder="Idade" onChange={handleChange}></Input>
      </FormValidation>
      <Input value={formData.city} id="city" name='city' type="text" placeholder="Cidade" onChange={handleChange}></Input>
      <Input value={formData.name} id="name" name='name' type="text" placeholder="Nome" onChange={handleChange}></Input>
      <Button type="submit">Submit</Button>
    </form>
  )
}
