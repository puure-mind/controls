import { makeAutoObservable } from 'mobx';

const greeting = 'Hello world!';

export class InputViewModel {
  inputValue = '';

  constructor() {
    makeAutoObservable(this);
  }

  changeInputValue = (value: string) => {
    this.inputValue = value;
  };

  clearValue = () => {
    this.inputValue = '';
  };

  greeting = () => {
    this.inputValue = greeting;
  };
}
