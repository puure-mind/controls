import { observer } from 'mobx-react-lite';
import React, { createRef } from 'react';
import {
  AddonsInput,
  AddonsInputRef,
} from '../../shared/ui/Inputs/AddonsInput/ui/AddonsInput';
import { InputRightAddon } from '../../shared/ui/Inputs/Input';
import { Button } from '../../shared/ui/Buttons';

const GREETING = 'Hello World!';

export const Greeting = observer(() => {
  const addonRef = createRef<AddonsInputRef>();

  const clearHandler = () => {
    if (!addonRef.current) return;

    addonRef.current.viewModel.changeInputValue('');
  };

  const greetingHandler = () => {
    if (!addonRef.current) return;

    addonRef.current.viewModel.changeInputValue(GREETING);
  };

  return (
    <AddonsInput
      ref={addonRef}
      rightAddons={
        <>
          <InputRightAddon>
            <Button text={'clear'} onClick={clearHandler} />
          </InputRightAddon>
          <InputRightAddon>
            <Button text={'greeting'} onClick={greetingHandler} />
          </InputRightAddon>
        </>
      }
    />
  );
});
