import { observer } from 'mobx-react-lite';
import React from 'react';
import styles from './InputRightAddon.module.css';

export interface InputRightAddonProps {
  children: React.ReactNode;
}

export const InputRightAddon = observer(
  ({ children }: InputRightAddonProps) => {
    return <div className={styles.rightAddon}>{children}</div>;
  }
);
