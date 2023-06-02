import React from 'react'
import styles from "./Input.module.css";

interface InputProps {
  value?: string;
  name: string;
  id: string;
  placeholder: string;
  type: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  onKeyUp?: (event: React.KeyboardEvent) => void;
}

function Input({
  id,
  value, 
  name, 
  type,
  placeholder, 
  onChange, 
  onBlur, 
  onFocus,
  onKeyDown,
  onKeyUp}: InputProps) {
  return (
    <input 
      className={styles.input} 
      value={value} 
      id={id} 
      name={name} 
      type={type}
      placeholder={placeholder} 
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}/>
  )
}

export default Input