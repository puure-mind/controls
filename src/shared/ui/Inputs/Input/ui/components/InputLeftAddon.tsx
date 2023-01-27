import { observer } from 'mobx-react-lite';
import React from 'react';
import styles from './InputLeftAddon.module.css';

export interface InputLeftAddonProps {
  children: React.ReactNode;
}

export const InputLeftAddon = observer(({ children }: InputLeftAddonProps) => {
  return <div className={styles.leftAddon}>{children}</div>;
});
