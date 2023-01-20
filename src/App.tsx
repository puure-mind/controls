import React from 'react';
import './App.module.css';
import { Greeting } from './components/Greeting';
import { AlertInput } from './components/AlertInput';
import { Autocomplete } from './components/inputs/autocomplete/Autocomplete';
import styles from './App.module.css';
import { Option } from './components/Option';

function App() {
  return (
    <div className={styles.app}>
      <Greeting />
      <br />
      <AlertInput />
      <br />
      <Autocomplete
        maxOptions={10}
        renderOption={(props, option) => <Option option={option} {...props} />}
      />
    </div>
  );
}

export default App;
