import React, { useState } from 'react';
import {
  Autocomplete,
  AutocompleteViewModel,
} from '../../shared/ui/Inputs/Autocomplete';
import { Option } from '../../shared/ui/Options';

export const MoreAutocomplete = () => {
  const [autocompleteViewModel] = useState(() => new AutocompleteViewModel(10));

  return (
    <Autocomplete
      viewModel={autocompleteViewModel}
      renderOption={(props, option) => <Option option={option} {...props} />}
    />
  );
};
