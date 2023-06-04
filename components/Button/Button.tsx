import React from 'react'
import style from "./Button.module.css";
import { ButtonType } from '@/types';

function Button({children, type, onClick}: {
  children: string, 
  type?: ButtonType, 
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void}) {
  return (
    <button className={style.btn} type={type} onClick={onClick}>{children}</button>
  )
}

export default Button