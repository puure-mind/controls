import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { AutocompleteContext } from '../Autocomplete';
import styles from './AutocompletePopup.module.css';

export const AutocompletePopup = observer(({ item }: any) => {
  const autocompleteViewModel = useContext(AutocompleteContext);

  const selectHandler = (value: any) => {
    autocompleteViewModel.changeCompleteValue(value);
    autocompleteViewModel.closePopup();
  };

  return (
    <div className={styles.popup}>
      {autocompleteViewModel.options?.map((option) => {
        return item({ onClick: () => selectHandler(option) }, option);
      })}
    </div>
  );
});
