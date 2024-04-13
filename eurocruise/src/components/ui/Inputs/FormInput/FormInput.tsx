import styles from './FormInput.module.css';
import React from "react";


interface FormInputProps extends  React.HTMLProps<HTMLInputElement>{
  label: string,
  icon: string,
  placeholder: string
}

export const FormInput = ({label, icon, placeholder}:FormInputProps) => {
  return (
      <div className={styles.container}>
        <label className={styles.label} htmlFor="">{label}<img src={icon} alt="icon"/></label>
        <input className={styles.input} type="text" placeholder={placeholder}/>
      </div>
  );
};