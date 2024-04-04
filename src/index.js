import React from 'react';
import ReactDOM from 'react-dom';

import MyComponent from './picker-2.js';
import { createRoot } from 'react-dom/client';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function App({ children }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <h1>Testing Date-Time-Picker Output</h1>
      <MyComponent></MyComponent>
      <p></p>
      <p></p>
      <MyComponent></MyComponent>
      {children}
    </LocalizationProvider>
  );
}

createRoot(document.getElementById('root')).render(<App />);
