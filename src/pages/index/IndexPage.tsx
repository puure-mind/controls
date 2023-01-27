import React from 'react';
import { AlertInput, Greeting } from '../../widgets/Inputs';
import {
  LessAutocomplete,
  MoreAutocomplete,
} from '../../widgets/Autocompletes';

export const IndexPage = () => {
  return (
    <>
      <Greeting />
      <br />
      <AlertInput />
      <br />
      <LessAutocomplete />
      <br />
      <MoreAutocomplete />
    </>
  );
};
