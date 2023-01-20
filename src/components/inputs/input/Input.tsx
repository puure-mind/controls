import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './Input.module.css';

export interface InputProps {
  value?: string;
  onChange?: (e: any) => void;
}

export const Input = observer(({ value, onChange }: InputProps) => {
  return (
    <input
      className={styles.input}
      placeholder="input..."
      type="text"
      value={value}
      onChange={onChange}
    />
  );
});
