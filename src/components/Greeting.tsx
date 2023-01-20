import { observer } from 'mobx-react-lite';
import React, { createRef } from 'react';
import { AddonsInput, AddonsInputRef } from './inputs/AddonsInput';
import { Button } from './buttons/Button';
import { InputRightAddon } from './inputs/common/InputRightAddon';

export const Greeting = observer(() => {
  const addonRef = createRef<AddonsInputRef>();

  const clearHandler = () => {
    if (!addonRef.current) return;

    addonRef.current.viewModel.clearValue();
  };

  const greetingHandler = () => {
    if (!addonRef.current) return;

    addonRef.current.viewModel.greeting();
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
