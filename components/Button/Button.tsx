import React from 'react'
import style from "./Button.module.css";


type ButtonType = "button" | "submit" | "reset" | undefined;

function Button({children, type}: {children: string, type: ButtonType}) {
  return (
    <button className={style.btn} type={type}>{children}</button>
  )
}

export default Button