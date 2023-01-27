import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};
