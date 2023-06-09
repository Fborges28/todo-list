import React from 'react'
import styles from "./Input.module.css";
import { InputProps } from '@/types';

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