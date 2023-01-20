import { observer } from 'mobx-react-lite';
import { Input } from '../input/Input';
import React, { createContext, useEffect, useRef, useState } from 'react';
import { AutocompleteViewModel } from './AutocompleteViewModel';
import { AutocompletePopup } from './AutocompletePopup';

export interface AutocompleteProps {
  maxOptions: number;
  renderOption: (props: any, option: any) => React.ReactNode;
}

export const AutocompleteContext = createContext<AutocompleteViewModel>(
  {} as AutocompleteViewModel
);

export const Autocomplete = observer(
  ({ maxOptions, renderOption }: AutocompleteProps) => {
    const [autocompleteViewModel] = useState(
      () => new AutocompleteViewModel(maxOptions)
    );
    const autocompleteRef = useRef({} as any);

    const changeInputValueHandler = (e: any) => {
      autocompleteViewModel.changeInputValue(e.target.value);
    };
    const openPopup = () => {
      autocompleteViewModel.openPopup();
    };

    useEffect(() => {
      const closePopup = () => {
        autocompleteViewModel.closePopup();
      };

      const clickOutsideHandler = (e: any) => {
        if (
          autocompleteRef.current &&
          !autocompleteRef.current.contains(e.target)
        ) {
          closePopup();
        }
      };

      window.addEventListener('click', clickOutsideHandler);

      return () => {
        window.removeEventListener('click', clickOutsideHandler);
      };
    }, [autocompleteViewModel]);

    return (
      <AutocompleteContext.Provider value={autocompleteViewModel}>
        <div ref={autocompleteRef} style={{ width: '250px' }}>
          <div onClick={openPopup}>
            <Input
              value={autocompleteViewModel.inputValue}
              onChange={changeInputValueHandler}
            />
          </div>
          {autocompleteViewModel.isPopupOpen && (
            <AutocompletePopup item={renderOption} />
          )}
        </div>
      </AutocompleteContext.Provider>
    );
  }
);
