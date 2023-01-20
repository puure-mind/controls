import { makeAutoObservable, autorun, reaction } from 'mobx';
import { getCountryByName } from '../../../api/apiService';
import { debounce } from 'lodash';

const delay = 300;

export class AutocompleteViewModel {
  isPopupOpen;
  inputValue;
  completeValue;
  model: AutocompleteModel;

  constructor(maxOptions: number) {
    makeAutoObservable(this);
    this.model = new AutocompleteModel(maxOptions);
    this.isPopupOpen = false;
    this.inputValue = '';
    this.completeValue = {} as any;

    reaction(
      () => this.inputValue,
      debounce((value) => {
        void this.model.searchMatchOptions(value);
      }, delay)
    );

    autorun(() => {
      if (!this.completeValue.name) return;

      this.changeInputValue(this.completeValue.name);
    });
  }

  get options() {
    return this.model.options;
  }

  openPopup = () => {
    this.isPopupOpen = true;
  };

  closePopup = () => {
    this.isPopupOpen = false;
  };

  changeInputValue = (value: string) => {
    this.inputValue = value;
  };

  changeCompleteValue = (value: any) => {
    this.completeValue = value;
  };
}

export class AutocompleteModel {
  maxOptions;
  options: any[];

  constructor(maxOptions: number) {
    makeAutoObservable(this);
    this.maxOptions = maxOptions;
    this.options = [];
  }

  searchMatchOptions = async (value: any) => {
    console.log('search');
    const values = await getCountryByName(value);
    this.options = values.slice(0, this.maxOptions);
  };
}
