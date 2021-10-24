import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/dracula.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
