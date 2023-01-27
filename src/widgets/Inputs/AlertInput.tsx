import { observer } from 'mobx-react-lite';
import { InputRightAddon } from '../../shared/ui/Inputs/Input';
import { Button } from '../../shared/ui/Buttons';
import React, { createRef } from 'react';
import { InputLeftAddon } from '../../shared/ui/Inputs/Input';
import {
  AddonsInput,
  AddonsInputRef,
} from '../../shared/ui/Inputs/AddonsInput/ui/AddonsInput';

const isNumber = (value: string) => {
  if (value.slice(0, 1) === ' ' || value.slice(-1) === ' ') return;

  const processed = value.split(' ').join('');

  if (processed.length === 0) return;

  return !isNaN(Number(processed));
};

export const AlertInput = observer(() => {
  const addonRef = createRef<AddonsInputRef>();

  const showHandler = () => {
    if (!addonRef.current) return;

    alert(addonRef.current.viewModel.inputValue);
  };

  const showNumberHandler = () => {
    if (!addonRef.current) return;

    if (!isNumber(addonRef.current.viewModel.inputValue)) return;

    alert(Number(addonRef.current.viewModel.inputValue));
  };

  return (
    <AddonsInput
      ref={addonRef}
      leftAddons={
        <>
          <InputLeftAddon>
            <Button text={'Show'} onClick={showHandler} />
          </InputLeftAddon>
        </>
      }
      rightAddons={
        <>
          <InputRightAddon>
            <Button text={'ShowIsNumber'} onClick={showNumberHandler} />
          </InputRightAddon>
        </>
      }
    />
  );
});
