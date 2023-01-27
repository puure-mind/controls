import { observer } from 'mobx-react-lite';
import { Input } from '../../Input';
import React, { createContext, useEffect, useRef } from 'react';
import { AutocompleteViewModel } from '../viewModel/AutocompleteViewModel';
import { AutocompletePopup } from './components/AutocompletePopup';

export interface AutocompleteProps {
  viewModel: AutocompleteViewModel;
  renderOption: (props: any, option: any) => React.ReactNode;
}

export const AutocompleteContext = createContext<AutocompleteViewModel>(
  {} as AutocompleteViewModel
);

export const Autocomplete = observer(
  ({ viewModel, renderOption }: AutocompleteProps) => {
    const autocompleteRef = useRef({} as any);

    const openPopup = () => {
      viewModel.openPopup();
    };

    useEffect(() => {
      const closePopup = () => {
        viewModel.closePopup();
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
    }, [viewModel]);

    return (
      <AutocompleteContext.Provider value={viewModel}>
        <div ref={autocompleteRef} style={{ width: '250px' }}>
          <div onClick={openPopup}>
            <Input viewModel={viewModel.inputViewModel} />
          </div>
          {viewModel.isPopupOpen && <AutocompletePopup item={renderOption} />}
        </div>
      </AutocompleteContext.Provider>
    );
  }
);
