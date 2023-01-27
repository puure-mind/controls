import { makeAutoObservable } from 'mobx';

export class InputViewModel {
  inputValue = '';
  placeholder = '';

  constructor(initialValue: string = '', placeholder: string = '') {
    makeAutoObservable(this);

    this.inputValue = initialValue;
    this.placeholder = placeholder;
  }

  changeInputValue = (value: string) => {
    this.inputValue = value;
  };
}
