import { observer } from 'mobx-react-lite';
import { Input } from './input/Input';
import React, { useImperativeHandle, useState } from 'react';
import { InputViewModel } from './input/InputViewModel';
import { InputGroup } from './common/InputGroup';

export interface AddonsInputProps {
  leftAddons?: React.ReactNode;
  rightAddons?: React.ReactNode;
  // ref?: React.RefObject<any>;
}

export interface AddonsInputRef {
  clearInput: () => void;
  greeting: () => void;
  viewModel: InputViewModel;
}

export const AddonsInput = observer(
  React.forwardRef(({ leftAddons, rightAddons }: AddonsInputProps, ref) => {
    const [inputViewModel] = useState(() => new InputViewModel());

    useImperativeHandle(
      ref,
      () =>
        ({
          clearInput,
          greeting,
          viewModel: inputViewModel,
        } as AddonsInputRef)
    );

    const clearInput = () => {
      inputViewModel.changeInputValue('');
    };

    const greeting = () => {
      inputViewModel.changeInputValue('Hello world!');
    };

    return (
      <InputGroup>
        {leftAddons}
        <Input
          value={inputViewModel.inputValue}
          onChange={(e) => inputViewModel.changeInputValue(e.target.value)}
        />
        {rightAddons}
      </InputGroup>
    );
  })
);
