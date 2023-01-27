import { observer } from 'mobx-react-lite';
import React, { useImperativeHandle, useState } from 'react';
import { InputGroup } from '../../Input';
import { Input } from '../../Input';
import { InputViewModel } from '../../Input';

export interface AddonsInputProps {
  leftAddons?: React.ReactNode;
  rightAddons?: React.ReactNode;
}

export interface AddonsInputRef {
  viewModel: InputViewModel;
}

export const AddonsInput = observer(
  React.forwardRef(({ leftAddons, rightAddons }: AddonsInputProps, ref) => {
    const [inputViewModel] = useState(() => new InputViewModel());

    useImperativeHandle(
      ref,
      () =>
        ({
          viewModel: inputViewModel,
        } as AddonsInputRef)
    );

    return (
      <InputGroup>
        {leftAddons}
        <Input viewModel={inputViewModel} />
        {rightAddons}
      </InputGroup>
    );
  })
);
