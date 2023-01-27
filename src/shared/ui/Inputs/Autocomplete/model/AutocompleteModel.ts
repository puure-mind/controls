import { makeAutoObservable } from 'mobx';
import { CountryInfo, getCountryByName } from '../../../../api';

export class AutocompleteModel {
  maxOptions;
  options: Array<CountryInfo>;

  constructor(maxOptions: number) {
    makeAutoObservable(this);
    this.maxOptions = maxOptions;
    this.options = [];
  }

  searchMatchOptions = async (value: string): Promise<void> => {
    console.log('searching');
    const values = await getCountryByName(value);
    this.options = values.slice(0, this.maxOptions);
  };
}
