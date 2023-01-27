import React, { ChangeEvent } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './Input.module.css';
import { InputViewModel } from '../viewModel/InputViewModel';

export interface InputProps {
  viewModel: InputViewModel;
}

export const Input = observer(({ viewModel }: InputProps) => {
  const { inputValue, changeInputValue } = viewModel;

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    changeInputValue(e.target.value);
  };

  return (
    <input
      className={styles.input}
      placeholder="input..."
      type="text"
      value={inputValue}
      onChange={changeHandler}
    />
  );
});
