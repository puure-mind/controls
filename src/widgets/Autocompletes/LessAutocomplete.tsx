import React, { useState } from 'react';
import {
  Autocomplete,
  AutocompleteViewModel,
} from '../../shared/ui/Inputs/Autocomplete';
import { Option } from '../../shared/ui/Options';

export const LessAutocomplete = () => {
  const [autocompleteViewModel] = useState(() => new AutocompleteViewModel(3));

  return (
    <Autocomplete
      viewModel={autocompleteViewModel}
      renderOption={(props, option) => (
        <Option key={option.name} option={option} {...props} />
      )}
    />
  );
};
