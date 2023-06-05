import React from 'react'
import styles from "./FormValidation.module.css"

interface IFormValidationProps {
  error: boolean;
  errorMessage: string;
  children: React.ReactNode;
}

function FormValidation({error, errorMessage, children}: IFormValidationProps) {
  return (
    <div className={`${styles.formValidation} ${error ? styles["formValidation--error"]: ""}`}>
      {children}
      {error && <span className={styles.errorMessage}>{errorMessage}</span>}
    </div>
  )
}

export default FormValidation