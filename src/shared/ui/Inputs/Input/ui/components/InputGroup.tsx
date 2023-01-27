import { observer } from 'mobx-react-lite';
import React from 'react';
import styles from './InputGroup.module.css';

export const InputGroup = observer(
  ({ children }: { children: React.ReactNode }) => {
    return <div className={styles.wrapper}>{children}</div>;
  }
);
