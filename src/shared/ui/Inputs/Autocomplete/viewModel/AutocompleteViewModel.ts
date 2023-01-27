import { autorun, makeAutoObservable, reaction } from 'mobx';
import { debounce } from 'lodash';
import { InputViewModel } from '../../Input';
import { AutocompleteModel } from '../model/AutocompleteModel';
import { CountryInfo } from '../../../../api';

const delay = 300;

export class AutocompleteViewModel {
  isPopupOpen;
  completeValue;
  model: AutocompleteModel;

  inputViewModel: InputViewModel;

  searchTask: any;

  constructor(
    maxOptions: number,
    initialValue: string = '',
    placeholder: string = ''
  ) {
    makeAutoObservable(this);
    this.model = new AutocompleteModel(maxOptions);
    this.inputViewModel = new InputViewModel(initialValue, placeholder);

    this.isPopupOpen = false;
    this.completeValue = {} as CountryInfo;

    reaction(
      () => this.inputViewModel.inputValue,
      debounce((value) => {
        this.searchOptions(value);
      }, delay)
    );

    autorun(() => {
      if (!this.completeValue.name) return;

      this.inputViewModel.changeInputValue(this.completeValue.name);
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

  changeCompleteValue = (value: CountryInfo) => {
    this.completeValue = value;
  };

  *searchOptions(value: string): Generator<Promise<void>> {
    if (this.searchTask) {
      this.searchTask.cancel();
    }
    this.searchTask = yield this.model.searchMatchOptions(value);
  }
}
