import React from 'react'
import style from "./Button.module.css";
import { ButtonType } from '@/types';

function Button({children, type}: {children: string, type: ButtonType}) {
  return (
    <button className={style.btn} type={type}>{children}</button>
  )
}

export default Button